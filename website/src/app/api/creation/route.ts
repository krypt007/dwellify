import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import {useUser} from "@clerk/nextjs"
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { unstable_noStore as noStore } from "next/cache";

export async function GET() {
  noStore();

  const { isSignedIn, user, isLoaded } = useUser()

  if (!user || user === null || !user.id) {
    throw new Error("Smoething went wrong, i am srorry....");
  }

  let dbUser = await prisma.user.findUnique({
    where: {
      id: user.id,
    },
  });

  if (!dbUser) {
    dbUser = await prisma.user.create({
      data: {
        email: user.primaryEmailAddressId!,
        firstName: user.firstName ?? "",
        lastName: user.lastName ?? "",
        id: user.id,
        profileImage: user.imageUrl ?? `https://avatar.vercel.sh/${user.firstName}`,
      },
    });
  }

  return NextResponse.redirect("https://localhost:3001");
}