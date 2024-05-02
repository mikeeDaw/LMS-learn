import React from "react";
import { Bebas_Neue, Poppins } from "next/font/google";
import EmailIcon from "@/public/assets/clientIcons/emailIcon";
import BackIcon from "@/public/assets/clientIcons/backIcon";
import PassIcon from "@/public/assets/clientIcons/passIcon";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const popp = Poppins({ weight: "400", subsets: ["latin"] });
const poppSemi = Poppins({ weight: "600", subsets: ["latin"] });

const Register = () => {
  return (
    <>
      <div className="bg-white w-screen h-screen flex">
        {/* Lofi Girl Background */}
        <div className="w-4/6 h-full absolute top-0 right-0 p-5">
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
              "text-4xl text-[#333333] pt-8 px-4 absolute top-0 left-5 " +
              bebas.className
            }
          >
            <span className="bg-[linear-gradient(90deg,_#b8ffb3,_#62e759,_#24a91c)] text-transparent bg-clip-text">
              Learn
            </span>
            flix
          </span>
          {/* Back Button */}
          <span
            className={
              "text-2xl text-[#333333] pt-8 px-4 absolute top-0 right-3 flex items-center gap-3 cursor-pointer"
            }
          >
            <span className="w-5 translate-y-[-2px]">
              <BackIcon hex="#333333" />
            </span>
            <span className={"" + bebas.className}> Back </span>
          </span>
          {/* Content Area */}
          <div className="flex flex-col w-5/6 items-center gap-4 px-8 xl:px-6">
            {/* Text Intro */}
            <div className="flex flex-col gap-2 mt-10">
              <span
                className={
                  "text-5xl text-[#509d44] text-start w-full " + bebas.className
                }
              >
                Register
              </span>
              <span
                className={
                  "text-base text-start text-[#575757] w-full " + popp.className
                }
              >
                We're thrilled that you're taking a first step towards growth!
                Fill out the form join our community.
              </span>
            </div>

            {/* Login Options */}
            <div className="flex flex-col w-full mt-3 gap-7">
              {/* "Create" partition */}
              <div className="flex w-full gap-3 items-center">
                <span className="bg-[#888888] grow h-[1px]" />
                <span className={"text-xl text-[#888888] " + bebas.className}>
                  Create an Account
                </span>
                <span className="bg-[#888888] grow h-[1px]" />
              </div>

              <div className="flex flex-col gap-4">
                {/* Name */}
                <div className="flex gap-4">
                  {/* First Name */}
                  <div className=" w-1/2 relative">
                    <input
                      className={
                        "border w-full border-[#575757] focus:border-[#6bc85d] focus:text-[#6bc85d] py-3 text-sm outline-none pe-3 rounded-lg ps-14 " +
                        popp.className
                      }
                      type="text"
                      name="Fname"
                      id="Fname"
                      placeholder="First Name"
                    />
                    <label
                      htmlFor="Fname"
                      className="w-5 absolute top-1/2 translate-y-[-50%] left-5"
                    >
                      <EmailIcon hex="#575757" />
                    </label>
                  </div>
                  {/* Last Name */}
                  <div className="w-1/2 relative">
                    <input
                      className={
                        "border w-full border-[#575757] focus:border-[#6bc85d] focus:text-[#6bc85d] py-3 text-sm outline-none pe-3 rounded-lg ps-14 " +
                        popp.className
                      }
                      type="text"
                      name="Lname"
                      id="Lname"
                      placeholder="Last Name"
                    />
                    <label
                      htmlFor="Lname"
                      className="w-5 absolute top-1/2 translate-y-[-50%] left-5"
                    >
                      <EmailIcon hex="#575757" />
                    </label>
                  </div>
                </div>
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
                    placeholder="Email"
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
                    name="passy"
                    id="passy"
                    placeholder="Password"
                  />
                  <label
                    htmlFor="passy"
                    className="w-5 absolute top-1/2 translate-y-[-50%] left-5"
                  >
                    <PassIcon hex="#575757" />
                  </label>
                </div>
                {/* Conf Password */}
                <div className="w-full relative">
                  <input
                    className={
                      "border border-[#575757] focus:border-[#6bc85d] focus:text-[#6bc85d] py-3 w-full text-sm outline-none pe-3 rounded-lg ps-14 " +
                      popp.className
                    }
                    type="password"
                    name="ConfPass"
                    id="ConfPass"
                    placeholder="Confirm Password"
                  />
                  <label
                    htmlFor="ConfPass"
                    className="w-5 absolute top-1/2 translate-y-[-50%] left-5"
                  >
                    <PassIcon hex="#575757" />
                  </label>
                </div>
                {/* Terms and Conditions */}
                <div className="flex gap-3 items-center h-fit mt-4">
                  <input
                    className="w-4 h-4 accent-[#3e9e30] "
                    type="checkbox"
                    name="Accept"
                    id="Accept"
                  />
                  <span className={"text-sm " + popp.className}>
                    I Accept the{" "}
                    <span className="cursor-pointer text-[#509d44]">
                      Terms and Conditions
                    </span>
                  </span>
                </div>
                {/* Submit */}
                <button
                  className={
                    "bg-[#6bc85d] w-full py-3 rounded-lg text-white " +
                    poppSemi.className
                  }
                >
                  SIGN UP
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
