import React from "react";
import { Bebas_Neue, Poppins } from "next/font/google";

const popp = Poppins({ weight: "400", subsets: ["latin"] });

interface Props {
  text: string;
}

const CourseTab: React.FC<Props> = ({ text }) => {
  return (
    <span
      className={
        "text-[#878787] text-sm border-b border-transparent pb-1 px-1 no wrap " +
        popp.className
      }
    >
      {text}
    </span>
  );
};

export default CourseTab;
