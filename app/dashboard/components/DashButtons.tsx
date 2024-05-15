"use server";
import { signOut } from "@/auth";
import React from "react";

const SignOutBtn = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signOut({ redirectTo: "/login" });
      }}
    >
      <button
        className="border-white border px-4 py-2 rounded-2xl"
        type="submit"
      >
        Temp SignOut
      </button>
    </form>
  );
};

export { SignOutBtn };
