"use client";
import { handleOut } from "@/app/_lib/authFunc";
import { signOut, useSession } from "next-auth/react";
import React from "react";

const SignOutBtn = () => {
  const handleClick = () => {
    handleOut("/login");
  };
  //   const sesh = useSession();
  //   console.log("XX");
  return (
    <button
      className="border-white border px-4 py-2 rounded-2xl"
      onClick={handleClick}
    >
      Temp SignOut
    </button>
  );
};

export { SignOutBtn };
