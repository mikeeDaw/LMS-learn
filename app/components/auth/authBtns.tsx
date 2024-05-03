"use client";

import React from "react";
import { Poppins } from "next/font/google";
import { useSession } from "next-auth/react";
import EmailIcon from "@/public/assets/clientIcons/emailIcon";
import { handleIn } from "@/app/_lib/authFunc";

const popp = Poppins({ weight: "400", subsets: ["latin"] });
const poppSemi = Poppins({ weight: "600", subsets: ["latin"] });

const GoogleLogInBtn = () => {
  const sesh = useSession();
  console.log(sesh);
  const handleClick = () => {
    handleIn("google", "/dashboard");
  };
  return (
    <button
      className="flex border border-[#575757] w-full justify-center items-center gap-6 py-3 rounded-lg"
      onClick={handleClick}
    >
      <span className="w-5">
        <img src="/assets/images/google.svg" alt="Google Logo" />
      </span>
      <span className={"text-[#444444] " + poppSemi.className}>
        Continue with Google
      </span>
    </button>
  );
};

const CredentialLogIn = () => {
  const handleClick = () => {
    handleIn("credentials", "/dashboard");
  };
  return (
    <div className="flex flex-col gap-4">
      {/* Email */}
      <div className="w-full relative">
        <input
          className={
            "border border-[#575757] focus:border-[#6bc85d] focus:text-[#6bc85d] py-3 w-full text-sm outline-none pe-3 rounded-lg ps-14 " +
            popp.className
          }
          type="text"
          name="Email"
          id="Email"
          placeholder="john.doe@example.com"
        />
        <label
          htmlFor="Email"
          className="w-5 absolute top-1/2 translate-y-[-50%] left-5"
        >
          <EmailIcon hex="#575757" />
        </label>
      </div>
      {/* Password */}
      <div className="w-full relative">
        <input
          className={
            "border border-[#575757] focus:border-[#6bc85d] focus:text-[#6bc85d] py-3 w-full text-sm outline-none pe-3 rounded-lg ps-14 " +
            popp.className
          }
          type="password"
          name="Email"
          id="Email"
          placeholder="************"
        />
        <label
          htmlFor="Email"
          className="w-5 absolute top-1/2 translate-y-[-50%] left-5"
        >
          <EmailIcon hex="#575757" />
        </label>
      </div>
      {/* Submit */}
      <button
        className={
          "bg-[#6bc85d] w-full py-3 rounded-lg text-white " + poppSemi.className
        }
        onClick={handleClick}
      >
        LOG IN WITH EMAIL
      </button>
    </div>
  );
};

export { GoogleLogInBtn, CredentialLogIn };
