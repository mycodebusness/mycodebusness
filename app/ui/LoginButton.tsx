"use client";
import { signIn } from "next-auth/react";
import React from "react";
import { FcGoogle } from "react-icons/fc";

export default function LoginButton() {
  return (
    <button
      onClick={async () => {
        await signIn("google");
      }}
      className="flex items-center justify-center gap-3 px-8 py-2 bg-blue-700/10 hover:bg-blue-700/20 transition duration-200 rounded-lg text-white  "
    >
      Se connecter
      <FcGoogle className="w-8 h-8" />
    </button>
  );
}
