import React from "react";
import { useRouter } from "next/navigation";
import { Bebas_Neue, Poppins } from "next/font/google";
import BackIcon from "@/public/assets/clientIcons/backIcon";
import { CredentialLogIn, GoogleLogInBtn } from "../components/auth/authBtns";
import Link from "next/link";
import { Toaster, toast } from "sonner";
import BackBtn from "../components/navigation/backBtn";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const popp = Poppins({ weight: "400", subsets: ["latin"] });
const poppSemi = Poppins({ weight: "600", subsets: ["latin"] });

const LoginPage = async () => {
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
          <div className="flex flex-col w-5/6 items-center gap-2 mt-14 px-4 xl:px-6">
            {/* Text Intro */}
            <span
              className={
                "text-4xl text-center text-[#509d44] " + bebas.className
              }
            >
              Welcome Back Learner!
            </span>
            <span
              className={"text-sm text-center text-[#575757] " + popp.className}
            >
              Welcome to our learning community! Whether you're here to learn or
              explore, you're in the right place.
            </span>

            {/* Login Options */}
            <div className="flex flex-col w-full mt-6 gap-4">
              <GoogleLogInBtn text="Continue with Google" />
              {/* "OR" partition */}
              <div className="flex w-full gap-3 items-center">
                <span className="bg-[#888888] grow h-[1px]" />
                <span className={"text-xl text-[#888888] " + bebas.className}>
                  or
                </span>
                <span className="bg-[#888888] grow h-[1px]" />
              </div>
              {/* By Email */}
              <CredentialLogIn />
            </div>
            {/* Sign In */}
            <div className="flex gap-2 items-center mt-3 ">
              <span className={"text-xs " + popp.className}>
                Don't Have an Account?
              </span>
              <Link href={"/register"}>
                <span
                  className={
                    "text-sm underline text-[#6bc85d] cursor-pointer " +
                    poppSemi.className
                  }
                >
                  Register Now
                </span>
              </Link>
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

export default LoginPage;
