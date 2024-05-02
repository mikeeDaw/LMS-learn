import React, { ReactNode } from "react";
import { Bebas_Neue, Poppins } from "next/font/google";
import { Presentation } from "lucide-react";

interface Props {
  title: string;
  val: string;
  icon: ReactNode;
}

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const popp = Poppins({ weight: "400", subsets: ["latin"] });
const poppSemi = Poppins({ weight: "600", subsets: ["latin"] });

const Details: React.FC<Props> = ({ title, val, icon }) => {
  return (
    <div className="flex flex-col bg-white rounded-xl px-5 py-4 grow">
      <span className={"text-xl text-[#888888] " + bebas.className}>
        {title}
      </span>
      <div className="flex items-center gap-2 mt-1">
        <span className="text-[#333333] ">{icon}</span>
        <span className={"text-base text-[#333333] " + poppSemi.className}>
          {val}
        </span>
      </div>
    </div>
  );
};

export default Details;
