"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import { Button } from "../ui/button";

function OAuthButtons() {
  return (
    <div className="flex flex-col gap-2 w-full">
      <Button
        onClick={() => signIn("google", { redirectTo: "/dashboard" })}
        variant="secondary"
        className="flex items-center gap-2 w-full"
      >
        <Image width={20} height={20} src="/google.svg" alt="google icon" />
        Google
      </Button>
      <Button
        onClick={() => signIn("github", { redirectTo: "/dashboard/my-habits" })}
        variant="secondary"
        className="flex items-center gap-2 w-full"
      >
        <Image width={20} height={20} src="/github.svg" alt="github icon" />
        Github
      </Button>
    </div>
  );
}

export default OAuthButtons;
