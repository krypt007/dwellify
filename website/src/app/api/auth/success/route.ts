import prisma from "@/lib/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { getUser } = await getKindeServerSession();
    const user = await getUser();

    if (!user || !user.id) {
      console.error("User not found or missing ID", user);
      throw new Error("Something went wrong with authentication: user data is missing or invalid.");
    }

    const dbUser = await prisma.user.findUnique({
      where: {
        id: user.id,
      },
    });

    if (!dbUser) {
      await prisma.user.create({
        data: {
          id: user.id,
          firstName: user.given_name ?? "",
          lastName: user.family_name ?? "",
          email: user.email ?? "",
        },
      });
    }

    return NextResponse.redirect("http://localhost:3001/user");
  } catch (error) {
    console.error("Error in GET handler:", error);
    return NextResponse.error();
  }
}
