"use client";

import { Poppins } from "next/font/google";
import EmailIcon from "@/public/assets/clientIcons/emailIcon";
import { regAction } from "@/app/_actions/register";
import PassIcon from "@/public/assets/clientIcons/passIcon";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, RegSchema } from "@/app/_schema";
import * as z from "zod";
import FormErr from "./form-error";
import { googleAction, logAction } from "@/app/_actions/login";
import { useState, useTransition } from "react";
import { Sparkle, Sparkles } from "lucide-react";

const popp = Poppins({ weight: "400", subsets: ["latin"] });
const poppSemi = Poppins({ weight: "600", subsets: ["latin"] });

const GoogleLogInBtn = () => {
  const handleClick = () => {
    googleAction();
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

// Login by Email form for Users.
const CredentialLogIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const xxx = () => {
    console.log(errors);
  };
  const [pending, startTransition] = useTransition();
  const [logErr, setLogErr] = useState(false);
  const handleClick = (values: z.infer<typeof LoginSchema>) => {
    startTransition(async () => {
      await logAction(values).then((result) => {
        setLogErr(result.error);
      });
    });
  };
  return (
    <div className="flex flex-col">
      <form
        className="flex flex-col gap-5"
        onSubmit={handleSubmit(handleClick)}
      >
        {/* Email */}
        <div className="w-full relative">
          <input
            className={
              "border py-3 w-full text-sm outline-none pe-3 rounded-lg ps-14 " +
              (logErr || errors.email != undefined
                ? "border-[#ec7070] "
                : "border-[#575757] focus:border-[#6bc85d] focus:text-[#6bc85d] ") +
              popp.className
            }
            type="text"
            id="Email"
            placeholder="john.doe@example.com"
            autoComplete="off"
            {...register("email", {})}
            disabled={pending}
          />
          <label
            htmlFor="Email"
            className="w-5 absolute top-1/2 translate-y-[-50%] left-5"
          >
            <EmailIcon
              hex={logErr || errors.email != undefined ? "#ec7070" : "#575757"}
            />
          </label>
        </div>
        {/* Password */}
        <div className="w-full relative">
          <input
            className={
              "border py-3 w-full text-sm outline-none pe-3 rounded-lg ps-14 " +
              (logErr || errors.password != undefined
                ? "border-[#ec7070] "
                : "border-[#575757] focus:border-[#6bc85d] focus:text-[#6bc85d] ") +
              popp.className
            }
            type="password"
            disabled={pending}
            id="Password"
            placeholder="************"
            {...register("password", {})}
          />
          <label
            htmlFor="Email"
            className="w-5 absolute top-1/2 translate-y-[-50%] left-5"
          >
            <PassIcon
              hex={
                logErr || errors.password != undefined ? "#ec7070" : "#575757"
              }
            />
          </label>
        </div>
        {/* Submit */}
        <button
          className={
            "bg-[#6bc85d] w-full py-3 rounded-lg text-white " +
            poppSemi.className
          }
          onClick={xxx}
          type="submit"
          disabled={pending}
        >
          LOG IN WITH EMAIL
        </button>
      </form>
    </div>
  );
};

// Create a User account form.
const RegisterUser = () => {
  const [pending, startTransition] = useTransition();
  const [logErr, setLogErr] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof RegSchema>>({
    resolver: zodResolver(RegSchema),
    defaultValues: {
      email: "",
      password: "",
      fName: "",
      lName: "",
      confPass: "",
    },
  });
  const xxx = () => {
    console.log(errors);
  };
  const handleClick = (values: z.infer<typeof RegSchema>) => {
    const result = RegSchema.safeParse(values);
    startTransition(() => {
      regAction(values).then((result) => {
        console.log(result);
        setLogErr(result.error);
      });
    });
  };
  return (
    <>
      <div className="flex ">
        <form
          className="flex flex-col gap-5"
          onSubmit={handleSubmit(handleClick)}
        >
          {/* Name */}
          <div className="flex gap-4">
            {/* First Name */}
            <div className=" w-1/2 relative">
              <input
                className={
                  "border w-full py-3 text-sm outline-none pe-3 rounded-lg ps-14 " +
                  (errors.fName != undefined
                    ? "border-[#ec7070] "
                    : "border-[#575757] focus:border-[#6bc85d] focus:text-[#6bc85d] ") +
                  popp.className
                }
                type="text"
                id="Fname"
                placeholder="First Name"
                {...register("fName", {})}
                disabled={pending}
                autoComplete="off"
              />
              <label
                htmlFor="Fname"
                className="w-5 absolute top-1/2 translate-y-[-50%] left-5"
              >
                <Sparkle
                  size={20}
                  className={
                    errors.fName != undefined
                      ? "text-[#ec7070]"
                      : "text-[#575757]"
                  }
                />
              </label>
            </div>
            {/* Last Name */}
            <div className="w-1/2 relative">
              <input
                className={
                  "border w-full py-3 text-sm outline-none pe-3 rounded-lg ps-14 " +
                  (errors.lName != undefined
                    ? "border-[#ec7070] "
                    : "border-[#575757] focus:border-[#6bc85d] focus:text-[#6bc85d] ") +
                  popp.className
                }
                type="text"
                id="Lname"
                placeholder="Last Name"
                {...register("lName", {})}
                disabled={pending}
                autoComplete="off"
              />
              <label
                htmlFor="Lname"
                className="w-5 absolute top-1/2 translate-y-[-50%] left-5"
              >
                <Sparkles
                  size={20}
                  className={
                    errors.lName != undefined
                      ? "text-[#ec7070]"
                      : "text-[#575757]"
                  }
                />
              </label>
            </div>
          </div>
          {/* Email */}
          <div className="w-full relative">
            <input
              className={
                "border py-3 w-full text-sm outline-none pe-3 rounded-lg ps-14 " +
                (errors.email != undefined
                  ? "border-[#ec7070] "
                  : "border-[#575757] focus:border-[#6bc85d] focus:text-[#6bc85d] ") +
                popp.className
              }
              type="text"
              id="Email"
              placeholder="Email"
              {...register("email", {})}
              disabled={pending}
              autoComplete="off"
            />
            <label
              htmlFor="Email"
              className="w-5 absolute top-1/2 translate-y-[-50%] left-5"
            >
              <EmailIcon
                hex={errors.email != undefined ? "#ec7070" : "#575757"}
              />
            </label>
          </div>
          {/* Password */}
          <div className="w-full relative">
            <input
              className={
                "border py-3 w-full text-sm outline-none pe-3 rounded-lg ps-14 " +
                (errors.password != undefined || errors.confPass != undefined
                  ? "border-[#ec7070] "
                  : "border-[#575757] focus:border-[#6bc85d] focus:text-[#6bc85d] ") +
                popp.className
              }
              type="password"
              id="passy"
              placeholder="Password"
              {...register("password", {})}
              disabled={pending}
              autoComplete="off"
            />
            <label
              htmlFor="passy"
              className="w-5 absolute top-1/2 translate-y-[-50%] left-5"
            >
              <PassIcon
                hex={errors.password != undefined ? "#ec7070" : "#575757"}
              />
            </label>
          </div>
          {/* Conf Password */}
          <div className="w-full relative">
            <input
              className={
                "border py-3 w-full text-sm outline-none pe-3 rounded-lg ps-14 " +
                (errors.confPass != undefined
                  ? "border-[#ec7070] "
                  : "border-[#575757] focus:border-[#6bc85d] focus:text-[#6bc85d] ") +
                popp.className
              }
              type="password"
              placeholder="Confirm Password"
              {...register("confPass", {})}
              disabled={pending}
              autoComplete="off"
            />
            <label
              htmlFor="ConfPass"
              className="w-5 absolute top-1/2 translate-y-[-50%] left-5"
            >
              <PassIcon
                hex={errors.password != undefined ? "#ec7070" : "#575757"}
              />
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
            onClick={xxx}
            type="submit"
          >
            SIGN UP
          </button>
        </form>
      </div>
    </>
  );
};

export { GoogleLogInBtn, CredentialLogIn, RegisterUser };
