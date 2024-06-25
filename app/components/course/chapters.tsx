"use client";
import DownArrow from "@/public/assets/dashIcons/downArr";
import { CircleX } from "lucide-react";
import { Bebas_Neue, Poppins } from "next/font/google";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import { toast } from "sonner";

interface Prop {
  courseCode: string;
  module: string;
  num: number;
  access: boolean;
  onTab: boolean;
}

const popp = Poppins({ weight: "400", subsets: ["latin"] });

export const Chapters: React.FC<Prop> = ({
  courseCode,
  module,
  num,
  access,
  onTab,
}) => {
  const params = useParams();

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
    <Link
      className="flex gap-3 items-center self-start  ps-6 pe-3"
      href={access ? `/course/${courseCode}/chapter/${num}` : "#"}
      onClick={handleClick}
      data-testid={`active-module-${num}`}
    >
      <span
        className={`${
          params.num === String(num) && onTab
            ? "text-[#CCCCCC] border-[#CCCCCC]"
            : "text-[#777777] border-[#777777]"
        } text-xs border w-6 h-6 flex items-center justify-center rounded-[50%] p-3`}
      >
        {num}
      </span>
      <div
        className={
          `w-full ${
            params.num === String(num) && onTab
              ? "text-[#CCCCCC]"
              : "text-[#777777]"
          } text-sm relative text-start ` + popp.className
        }
      >
        <span>{module}</span>
      </div>
    </Link>
  );
};

export const Quizzes: React.FC<Prop> = ({
  courseCode,
  module,
  num,
  access,
  onTab,
}) => {
  const params = useParams();
  console.log("quiz", params);
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
    <Link
      className="flex gap-3 items-center self-start  ps-6 pe-3"
      href={access ? `/course/${courseCode}/quiz/${num}` : "#"}
      onClick={handleClick}
      data-testid={`active-quiz-${num}`}
    >
      <span
        className={`${
          params.id === String(num) && onTab
            ? "text-[#CCCCCC] border-[#CCCCCC]"
            : "text-[#777777] border-[#777777]"
        } text-xs border w-6 h-6 flex items-center justify-center rounded-[50%] p-3`}
      >
        {num}
      </span>
      <div
        className={
          `w-full ${
            params.id === String(num) && onTab
              ? "text-[#CCCCCC]"
              : "text-[#777777]"
          } text-sm relative text-start ` + popp.className
        }
      >
        <span>{module}</span>
      </div>
    </Link>
  );
};
