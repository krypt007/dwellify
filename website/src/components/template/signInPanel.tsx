import {
  LoginLink,
  LogoutLink,
  RegisterLink,
  getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { Button } from "@nextui-org/react";
import React from "react";
import UserProfilePanel from "./UserProfilePanel";
import prisma from "@/lib/prisma";
import { Card } from "../ui/card";

const signInPanel = async () => {
  const { isAuthenticated, getUser } = await getKindeServerSession();
  // if (await isAuthenticated()) {
  //   const user = await getUser();
  //   const dbUser = await prisma.user.findUnique({
  //     where: {
  //       id: user?.id,
  //     },
  //   });

  //   return <>{dbUser!! && <UserProfilePanel user={dbUser} />}</>;
  // }
  const user = await getUser();
  if(await isAuthenticated()) return <LogoutLink><Button>Logout: {user?.given_name}</Button></LogoutLink>

  return (
    <div className="flex gap-3">
      <Button color="primary">
        <LoginLink>Sign In</LoginLink>
      </Button>
      <Button>
        <RegisterLink>Sign Up</RegisterLink>
      </Button>
    </div>
  );
};

export default signInPanel;
