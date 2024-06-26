import React from "react";
import { Bebas_Neue, Poppins } from "next/font/google";
import EmailIcon from "@/public/assets/clientIcons/emailIcon";
import BackIcon from "@/public/assets/clientIcons/backIcon";
import PassIcon from "@/public/assets/clientIcons/passIcon";
import { GoogleLogInBtn, RegisterUser } from "../components/auth/authBtns";
import { Toaster } from "sonner";
import BackBtn from "../components/navigation/backBtn";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const popp = Poppins({ weight: "400", subsets: ["latin"] });
const poppSemi = Poppins({ weight: "600", subsets: ["latin"] });

const Register = () => {
  return (
    <>
      <div className="bg-white w-screen h-screen flex">
        {/* Lofi Girl Background */}
        <div className="w-4/6 h-full absolute top-0 right-0 p-5 py-8">
          <img
            className="w-full h-full rounded-2xl rounded-tl-[150px]"
            src={"/assets/images/lofi.gif"}
            alt="Lofi Girl"
          />
        </div>
        {/* Login Area */}
        <div className="w-2/6 z-10 flex relative justify-center items-center flex-col">
          {/* Logo */}
          <span
            className={
              "text-2xl text-[#333333] pt-8 px-4 absolute top-0 left-5 " +
              bebas.className
            }
          >
            <span className="bg-[linear-gradient(90deg,_#b8ffb3,_#62e759,_#24a91c)] text-transparent bg-clip-text">
              Learn
            </span>
            flix
          </span>
          {/* Back Button */}
          <BackBtn />
          {/* Content Area */}
          <div className="flex flex-col w-5/6 items-center gap-4 px-1 xl:px-4 relative">
            {/* Text Intro */}
            <div className="flex flex-col gap-2 mt-10">
              <span
                className={
                  "text-3xl text-center text-[#509d44] w-full " +
                  bebas.className
                }
              >
                Start Learning!
              </span>
              <span
                className={
                  "text-sm text-center text-[#575757] w-full " + popp.className
                }
              >
                We&apos;re thrilled that you&apos;re taking a first step towards
                growth! Fill out the form join our community.
              </span>
            </div>

            {/* Create Account */}
            <div className="flex flex-col w-full mt-4 gap-5">
              <GoogleLogInBtn text="Sign Up with Google" />
              {/* "Create" partition */}
              <div className="flex w-full gap-3 items-center">
                <span className="bg-[#888888] grow h-[1px]" />
                <span className={"text-xl text-[#888888] " + bebas.className}>
                  Create an Account
                </span>
                <span className="bg-[#888888] grow h-[1px]" />
              </div>

              <RegisterUser />
            </div>
          </div>
          <Toaster
            position="bottom-left"
            toastOptions={{ className: "w-3/4" }}
          />
        </div>
      </div>
    </>
  );
};

export default Register;
