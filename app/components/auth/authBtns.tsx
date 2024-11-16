"use client";

import { regAction } from "@/app/_actions/register";
import EmailIcon from "@/public/assets/clientIcons/emailIcon";
import PassIcon from "@/public/assets/clientIcons/passIcon";
import { Poppins } from "next/font/google";

import { logAction } from "@/app/_actions/login";
import { LoginSchema, RegSchema } from "@/app/_schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { BadgeCheck, CircleX, Sparkle, Sparkles } from "lucide-react";
import { signIn } from "next-auth/react";
import { useEffect, useRef, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

const popp = Poppins({ weight: "400", subsets: ["latin"] });
const poppSemi = Poppins({ weight: "600", subsets: ["latin"] });

interface TextProp {
  text: string;
}

const GoogleLogInBtn: React.FC<TextProp> = ({ text }) => {
  const handleClick = () => {
    signIn("google", { callbackUrl: "/browse" });
  };
  return (
    <button
      className="flex border border-[#575757] w-full justify-center items-center gap-6 text-sm py-3 rounded-lg"
      onClick={handleClick}
      data-testid="google-login-button"
    >
      <span className="w-4">
        <img src="/assets/images/google.svg" alt="Google Logo" />
      </span>
      <span className={"text-[#444444] " + poppSemi.className}>{text}</span>
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

  const [pending, startTransition] = useTransition();
  const [logErr, setLogErr] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [passFocus, setPassFocus] = useState(false);
  const [emailCol, setEmailCol] = useState<string>("");
  const [passCol, setPassCol] = useState<string>("");

  const handleClick = (values: z.infer<typeof LoginSchema>) => {
    startTransition(async () => {
      await logAction(values).then((result) => {
        setLogErr(result.error);
        console.log(result.error);
        if (result.error) {
          toast.error("ERROR!", {
            description: "Invalid Credentials.",
            duration: 4000,
            icon: (
              <span className="text-red-500 ps-2">
                <CircleX />
              </span>
            ),
            classNames: {
              toast: "bg-red-100",
              title: "ms-4 text-red-500",
              description: "ms-4 text-[#555555]",
              icon: "bg-black",
            },
          });
        }
      });
    });
  };
  // For Icon Color in Input field
  const iconColor = (onFoc: boolean, errField: any) => {
    if (onFoc && !(logErr || errField != undefined)) {
      return "#76d867";
    } else if (logErr || errField) {
      return "#f25d5d";
    } else return "#777777";
  };

  useEffect(() => {
    setEmailCol(iconColor(emailFocus, errors.email));
  }, [emailFocus, errors.email, logErr]);
  useEffect(() => {
    setPassCol(iconColor(passFocus, errors.password));
  }, [passFocus, errors.password, logErr]);

  useEffect(() => {
    if (
      errors.email &&
      errors.password &&
      errors.email.message &&
      errors.password.message
    ) {
      if (
        errors.email.message.search("Required") > -1 &&
        errors.password.message.search("Required") > -1
      ) {
        toast.error("ERROR!", {
          description: "Please Fillout the Fields.",
          duration: 2000,
          icon: (
            <span className="text-red-500 ps-2">
              <CircleX />
            </span>
          ),
          classNames: {
            toast: "bg-red-100",
            title: "ms-4 text-red-500",
            description: "ms-4 text-[#555555]",
            icon: "bg-black",
          },
        });
      }
    } else if (errors.email && errors.email.message) {
      if (errors.email.message.search("Required") > -1) {
        toast.error("ERROR!", {
          description: errors.email.message,
          duration: 2000,
          icon: (
            <span className="text-red-500 ps-2">
              <CircleX />
            </span>
          ),
          classNames: {
            toast: "bg-red-100",
            title: "ms-4 text-red-500",
            description: "ms-4 text-[#555555]",
            icon: "bg-black",
          },
        });
      }
      if (errors.password && errors.password.message) {
        if (errors.password.message.search("Required") > -1) {
          toast.error("ERROR!", {
            description: errors.password.message,
            duration: 2000,
            icon: (
              <span className="text-red-500 ps-2">
                <CircleX />
              </span>
            ),
            classNames: {
              toast: "bg-red-100",
              title: "ms-4 text-red-500",
              description: "ms-4 text-[#555555]",
              icon: "bg-black",
            },
          });
        }
      }
    }
  }, [errors.email, errors.password]);

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
              "border py-3 w-full text-xs outline-none pe-3 rounded-lg ps-14 " +
              (logErr || errors.email != undefined
                ? "border-[#ec7070] "
                : "border-[#575757] focus:border-[#44a735] focus:text-[#44a735] ") +
              popp.className
            }
            type="text"
            id="Email"
            data-testid="email-login-field"
            placeholder="john.doe@example.com"
            autoComplete="off"
            {...register("email")}
            disabled={pending}
            onFocus={() => {
              setEmailFocus(true);
            }}
            onBlurCapture={() => {
              setEmailFocus(false);
            }}
          />
          <label
            htmlFor="Email"
            className="w-4 absolute top-1/2 translate-y-[-50%] left-5"
          >
            <EmailIcon hex={emailCol} />
          </label>
        </div>
        {/* Password */}
        <div className="w-full relative">
          <input
            className={
              "border py-3 w-full text-xs outline-none pe-3 rounded-lg ps-14 " +
              (logErr || errors.password != undefined
                ? "border-[#ec7070] "
                : "border-[#575757] focus:border-[#44a735] focus:text-[#44a735] ") +
              popp.className
            }
            type="password"
            data-testid="password-login-field"
            disabled={pending}
            id="Password"
            placeholder="************"
            {...register("password")}
            onFocus={() => {
              setPassFocus(true);
            }}
            onBlurCapture={() => {
              setPassFocus(false);
            }}
          />
          <label
            htmlFor="Email"
            className="w-4 absolute top-1/2 translate-y-[-50%] left-5"
          >
            <PassIcon hex={passCol} />
          </label>
        </div>
        {/* Submit */}
        <button
          className={
            "bg-[#6bc85d] w-full py-2.5 text-sm rounded-lg text-white " +
            poppSemi.className
          }
          type="submit"
          data-testid="login-button"
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
  const [fnmFoc, setFnmFoc] = useState(false);
  const [lnmFoc, setLnmFoc] = useState(false);
  const [emFoc, setEmFoc] = useState(false);
  const [passFoc, setPassFoc] = useState(false);
  const [confFoc, setConfFoc] = useState(false);
  const [fnmCol, setFnmCol] = useState<string>("575757");
  const [lnmCol, setLnmCol] = useState<string>("575757");
  const [emCol, setEmCol] = useState<string>("575757");
  const [confCol, setConfCol] = useState<string>("575757");
  const [passCol, setPassCol] = useState<string>("575757");
  const formRef = useRef<any>();
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

  const handleClick = (values: z.infer<typeof RegSchema>) => {
    const result = RegSchema.safeParse(values);

    startTransition(async () => {
      await regAction(values).then((result) => {
        console.log(result);
        setLogErr(result.error);
        if (!result.error) {
          toast.success("Creation Success!", {
            description: "Proceed to Login to start learning.",
            duration: 4000,
            icon: (
              <span className="text-emerald-500 ps-2">
                <BadgeCheck />
              </span>
            ),
            classNames: {
              description: "ms-4",
              title: "ms-4 text-emerald-500",
            },
          });
          formRef.current.reset();
        } else {
          toast.error("ERROR!", {
            description: result.msg,
            duration: 4000,
            icon: (
              <span className="text-red-500 ps-2">
                <CircleX />
              </span>
            ),
            classNames: {
              toast: "bg-red-100",
              description: "ms-4",
              title: "ms-4 text-red-500",
            },
          });
        }
      });
    });
  };

  const iconCol = (focus: boolean, errw: any) => {
    if (focus && errw == undefined) return "#6bc85d";
    else if (errw != undefined) return "#ec7070";
    else return "#575757";
  };

  // Use Effects for Input form error fx
  useEffect(() => {
    setFnmCol(iconCol(fnmFoc, errors.fName));
  }, [fnmFoc, errors.fName]);
  useEffect(() => {
    setLnmCol(iconCol(lnmFoc, errors.lName));
  }, [lnmFoc, errors.lName]);
  useEffect(() => {
    setEmCol(iconCol(emFoc, errors.email));
  }, [emFoc, errors.email]);
  useEffect(() => {
    setPassCol(iconCol(passFoc, errors.password));
  }, [passFoc, errors.password]);
  useEffect(() => {
    setConfCol(iconCol(confFoc, errors.confPass));
  }, [confFoc, errors.confPass]);

  return (
    <>
      <div className="flex ">
        <form
          ref={formRef}
          className="flex flex-col w-full gap-3"
          onSubmit={handleSubmit(handleClick)}
        >
          {/* Name */}
          <div className="flex gap-4">
            {/* First Name */}
            <div className=" w-1/2 relative">
              <input
                className={
                  "border w-full py-2.5 text-xs outline-none pe-3 rounded-lg ps-10 " +
                  (errors.fName != undefined
                    ? "border-[#ec7070] "
                    : "border-[#575757] focus:border-[#44a735] focus:text-[#44a735] ") +
                  popp.className
                }
                type="text"
                id="Fname"
                data-testid="first-name-register-field"
                onFocus={() => setFnmFoc(true)}
                onBlurCapture={() => {
                  setFnmFoc(false);
                }}
                placeholder="First Name"
                {...register("fName", {})}
                disabled={pending}
                autoComplete="off"
              />
              <label
                htmlFor="Fname"
                className="w-5 absolute top-1/2 translate-y-[-50%] left-4"
              >
                <Sparkle size={15} color={fnmCol} />
              </label>
            </div>
            {/* Last Name */}
            <div className="w-1/2 relative">
              <input
                className={
                  "border w-full py-2.5 text-xs outline-none pe-3 rounded-lg ps-10 " +
                  (errors.lName != undefined
                    ? "border-[#ec7070] "
                    : "border-[#575757] focus:border-[#44a735] focus:text-[#44a735] ") +
                  popp.className
                }
                type="text"
                data-testid="last-name-register-field"
                id="Lname"
                onFocus={() => setLnmFoc(true)}
                onBlurCapture={() => {
                  setLnmFoc(false);
                }}
                placeholder="Last Name"
                {...register("lName", {})}
                disabled={pending}
                autoComplete="off"
              />
              <label
                htmlFor="Lname"
                className="w-5 absolute top-1/2 translate-y-[-50%] left-4"
              >
                <Sparkles size={15} color={lnmCol} />
              </label>
            </div>
          </div>
          {/* Email */}
          <div className="w-full relative">
            <input
              className={
                "border py-3 w-full text-xs outline-none pe-3 rounded-lg ps-10 " +
                (errors.email != undefined
                  ? "border-[#ec7070] "
                  : "border-[#575757] focus:border-[#44a735] focus:text-[#44a735] ") +
                popp.className
              }
              type="text"
              id="Email"
              data-testid="email-register-field"
              placeholder="Email"
              onFocus={() => setEmFoc(true)}
              onBlurCapture={() => {
                setEmFoc(false);
              }}
              {...register("email", {})}
              disabled={pending}
              autoComplete="off"
            />
            <label
              htmlFor="Email"
              className="w-4 absolute top-1/2 translate-y-[-50%] left-4"
            >
              <EmailIcon hex={emCol} />
            </label>
          </div>
          {/* Password */}
          <div className="w-full relative">
            <input
              className={
                "border py-3 w-full text-xs outline-none pe-3 rounded-lg ps-10 " +
                (errors.password != undefined
                  ? "border-[#ec7070] "
                  : "border-[#575757] focus:border-[#44a735] focus:text-[#44a735] ") +
                popp.className
              }
              type="password"
              data-testid="password-register-field"
              id="passy"
              placeholder="Password"
              onFocus={() => setPassFoc(true)}
              onBlurCapture={() => {
                setPassFoc(false);
              }}
              {...register("password", {})}
              disabled={pending}
              autoComplete="off"
            />
            <label
              htmlFor="passy"
              className="w-4 absolute top-1/2 translate-y-[-50%] left-4"
            >
              <PassIcon hex={passCol} />
            </label>
          </div>
          {/* Conf Password */}
          <div className="w-full relative">
            <input
              className={
                "border py-3 w-full text-xs outline-none pe-3 rounded-lg ps-10 " +
                (errors.confPass != undefined
                  ? "border-[#ec7070] "
                  : "border-[#575757] focus:border-[#44a735] focus:text-[#44a735] ") +
                popp.className
              }
              type="password"
              data-testid="confirm-password-register-field"
              placeholder="Confirm Password"
              onFocus={() => setConfFoc(true)}
              onBlurCapture={() => {
                setConfFoc(false);
              }}
              {...register("confPass", {})}
              disabled={pending}
              autoComplete="off"
            />
            <label
              htmlFor="ConfPass"
              className="w-4 absolute top-1/2 translate-y-[-50%] left-4"
            >
              <PassIcon hex={confCol} />
            </label>
          </div>
          {/* Terms and Conditions */}
          {/* <div className="flex gap-3 items-center h-fit mt-4">
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
          </div> */}
          {/* Submit */}
          <button
            className={
              "bg-[#6bc85d] w-full py-2.5 rounded-lg text-sm text-white " +
              poppSemi.className
            }
            type="submit"
            data-testid="register-button"
          >
            SIGN UP
          </button>
        </form>
      </div>
    </>
  );
};

export { CredentialLogIn, GoogleLogInBtn, RegisterUser };
