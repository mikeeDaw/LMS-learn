"use client";
import DownArrow from "@/public/assets/dashIcons/downArr";
import { CircleX } from "lucide-react";
import { Bebas_Neue, Poppins } from "next/font/google";
import React from "react";
import { toast } from "sonner";

interface Prop {
  module: string;
  num: number;
  access: boolean;
}

const popp = Poppins({ weight: "400", subsets: ["latin"] });

const Chapters: React.FC<Prop> = ({ module, num, access }) => {
  const handleClick = () => {
    if (!access) {
      toast.error("ERROR!", {
        position: "top-center",
        description: "Enroll to the course to access its chapters.",
        duration: 3000,
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
    } else {
      console.log("Enrolled na");
    }
  };
  return (
    <button
      className="flex gap-3 items-center self-start  ps-6 pe-3"
      onClick={handleClick}
    >
      <span className="text-[#777777] text-xs border border-[#777777] w-6 h-6 flex items-center justify-center rounded-[50%] p-3">
        {num}
      </span>
      <div
        className={
          "w-full text-[#777777] text-sm relative text-start " + popp.className
        }
      >
        <span>{module}</span>
      </div>
    </button>
  );
};

export default Chapters;
