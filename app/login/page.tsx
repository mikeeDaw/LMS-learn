import React from "react";
import { useRouter } from "next/navigation";
import { Bebas_Neue, Poppins } from "next/font/google";
import BackIcon from "@/public/assets/clientIcons/backIcon";
import { CredentialLogIn, GoogleLogInBtn } from "../components/auth/authBtns";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const popp = Poppins({ weight: "400", subsets: ["latin"] });
const poppSemi = Poppins({ weight: "600", subsets: ["latin"] });

const LoginPage = () => {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [errorMessage, setErrorMessage] = useState<String | null>(null);
  // const [successMessage, setSuccessMessage] = useState<String | null>(null);

  // const router = useRouter();

  // const handleSubmit = async (event: { preventDefault: () => void }) => {
  //   event.preventDefault();

  //   if (username === "user" && password === "password") {
  //     // Login successful
  //     setSuccessMessage("Tama eyyy! Lezzgooo");
  //     alert("Nays wan");
  //     setErrorMessage(null);
  //     router.push("/dashboard");
  //   } else {
  //     setErrorMessage("Bobo amputa! Mali yung username o password mo!!");
  //     alert("Tangina! BOBO mo naman, Mali! Galit ako sayo!");
  //     setSuccessMessage(null);
  //   }
  // };

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
          <div className="flex flex-col w-5/6 items-center gap-4 mt-14 px-8 xl:px-6">
            {/* Text Intro */}
            <span className={"text-5xl text-[#509d44] " + bebas.className}>
              Welcome Back Learner!
            </span>
            <span
              className={
                "text-base text-center text-[#575757] " + popp.className
              }
            >
              Welcome to our learning community! Whether you're here to learn or
              explore, you're in the right place. Dive into your courses and
              latest resources!
            </span>

            {/* Login Options */}
            <div className="flex flex-col w-full mt-6 gap-7">
              <GoogleLogInBtn />
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
              <span className={"text-sm " + popp.className}>
                Don't Have an Account?
              </span>
              <span
                className={
                  "text-base underline text-[#6bc85d] cursor-pointer " +
                  poppSemi.className
                }
              >
                Register Now
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
