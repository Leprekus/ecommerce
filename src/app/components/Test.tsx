'use client'
import React from "react";
import { SignIn, SignInButton, useUser } from "@clerk/nextjs";

export default function Test() {
  const user = useUser();
  return (
    <div>
      <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
      {
        user ? 
        <>
        <p>Welcome {user.user?.firstName}</p>
        </>:
        <SignInButton />
      }

    </div>
  );
}
