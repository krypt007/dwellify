// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import prisma from "@/lib/prisma";
import {useUser} from "@clerk/nextjs"
import { auth, currentUser } from '@clerk/nextjs/server'
import { NextResponse } from "next/server";
import { unstable_noStore as noStore } from "next/cache";

export async function GET() {
  noStore();
  // const { getUser } = getKindeServerSession();

  const {user, isSignedIn} = await useUser();

  if (!user || user === null || !user.id) {
    throw new Error("Smoething went wrong, i am srorry....");
  }

  const { userId } = auth()
  let dbUser = await prisma.user.findUnique({
    where: {
      id: userId!
    },
  });

  if (!dbUser) {
    dbUser = await prisma.user.create({
      data: {
        email: user?.primaryEmailAddressId!,
        firstName: user?.firstName ?? "",
        lastName: user?.lastName ?? "",
        id: userId!,
        // profileImage: user?.imageUrl ?? `https://avatar.vercel.sh/${user.firstName}`,
      },
    });
  }

  return NextResponse.redirect("localhost:3001/user");
}