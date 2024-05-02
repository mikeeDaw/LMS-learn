import RightArr from "@/public/assets/dashIcons/rightArr";
import { Bebas_Neue, Poppins } from "next/font/google";

import React, { ReactNode } from "react";

const popp = Poppins({ weight: "400", subsets: ["latin"] });

interface Props {
  icon: ReactNode;
  desc: string;
}

const CourseInclude: React.FC<Props> = ({ icon, desc }) => {
  return (
    <span className="flex items-center gap-3 ps-1 mt-1">
      <span className="text-[#777777]">{icon}</span>
      <span className={"text-[#777777] " + popp.className}>{desc}</span>
    </span>
  );
};

export default CourseInclude;
