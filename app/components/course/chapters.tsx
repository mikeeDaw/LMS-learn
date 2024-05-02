import DownArrow from "@/public/assets/dashIcons/downArr";
import { Bebas_Neue, Poppins } from "next/font/google";
import React from "react";

interface Prop {
  module: string;
}

const popp = Poppins({ weight: "400", subsets: ["latin"] });

const Chapters: React.FC<Prop> = ({ module }) => {
  return (
    <div className={"w-full text-[#777777] relative " + popp.className}>
      <span>{module}</span>
      <span className="absolute right-0 top-1/2 translate-y-[-55%] w-5">
        <DownArrow hex="#BBBBBB" />
      </span>
    </div>
  );
};

export default Chapters;
