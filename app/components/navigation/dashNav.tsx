import React from "react";
import DashNavItem from "./dashNavItem";
import DashIcon from "@/public/assets/navIcons/DashIcon";
import CourseIcon from "@/public/assets/navIcons/CourseIcon";
import LearnIcon from "@/public/assets/navIcons/LearnIcon";
import { Bebas_Neue, Poppins } from "next/font/google";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const popp = Poppins({ weight: "400", subsets: ["latin"] });

const DashNavi = () => {
  return (
    <div className="fixed flex flex-col h-screen w-[200px] bg-[#0C0C0C]">
      {/* Logo Area */}
      <span className={"text-4xl text-white pt-8 px-4 " + bebas.className}>
        <span className="bg-[linear-gradient(90deg,_#b8ffb3,_#62e759,_#24a91c)] text-transparent bg-clip-text">
          Learn
        </span>
        flix
      </span>
      {/* Menus */}
      <div className="flex flex-col mt-8 gap-1">
        <DashNavItem label="Dashboard" icon={<DashIcon hex="#FFF" />} />
        <DashNavItem label="Courses" icon={<CourseIcon hex="#FFF" />} />
        <DashNavItem label="My Learning" icon={<LearnIcon hex="#FFF" />} />
      </div>
    </div>
  );
};

export default DashNavi;
