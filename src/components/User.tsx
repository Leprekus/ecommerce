'use client'
import React from "react";
import { SignIn, SignInButton, useClerk, useUser } from "@clerk/nextjs";
import { SignOutButton } from "@clerk/clerk-react";
import Link from "next/link";

export default function User() {
  const user = useUser();

  return (
    <div>
      <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
      {
        user.isSignedIn ? 
        <>
        <p>{user.user?.firstName}&apos;s <Link href='/dashboard'>Dashboard</Link></p>
        <SignOutButton/>
        </>:
        <SignInButton />
      }

    </div>
  );
}
