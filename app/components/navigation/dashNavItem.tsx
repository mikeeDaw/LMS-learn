import React from "react";
import { Bebas_Neue, Poppins, Montserrat } from "next/font/google";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const popp = Poppins({ weight: "400", subsets: ["latin"] });

interface Props {
  label: string;
  children: React.ReactNode;
}

const DashNavItem: React.FC<Props> = ({ label, children }) => {
  return (
    <button className="flex text-white gap-3 items-center hover:bg-[#24a91c] py-3 px-4 transition-all duration-300">
      <span className={"w-5 " + popp.className}> {children}</span>
      <span className={"" + popp.className}> {label}</span>
    </button>
  );
};

export default DashNavItem;
