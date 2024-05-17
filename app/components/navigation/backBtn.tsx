"use client";
import React from "react";
import { Poppins, Bebas_Neue } from "next/font/google";
import BackIcon from "@/public/assets/clientIcons/backIcon";
import { useRouter } from "next/navigation";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const popp = Poppins({ weight: "400", subsets: ["latin"] });
const poppSemi = Poppins({ weight: "600", subsets: ["latin"] });

const BackBtn = () => {
  const rout = useRouter();
  return (
    <button
      className={
        "text-2xl text-[#333333] pt-8 px-4 absolute top-0 right-3 flex items-center gap-3 cursor-pointer"
      }
      onClick={() => {
        rout.back();
      }}
    >
      <span className="w-5 translate-y-[-2px]">
        <BackIcon hex="#333333" />
      </span>
      <span className={"" + bebas.className}> Back </span>
    </button>
  );
};

export default BackBtn;
