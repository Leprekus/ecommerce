'use client'
import React from "react";
import { SignIn, SignInButton, useClerk, useUser } from "@clerk/nextjs";
import { SignOutButton } from "@clerk/clerk-react";

export default function Test() {
  const user = useUser();

  return (
    <div>
      <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
      {
        user.isSignedIn ? 
        <>
        <p>Welcome {user.user?.firstName}</p>
        <SignOutButton/>
        </>:
        <SignInButton />
      }

    </div>
  );
}
