import Link from "next/link";
import React, { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  textStr: string;
  expand: boolean;
  to: string;
}

const NavItem: React.FC<Props> = ({ icon, textStr, expand, to }) => {
  return (
    <Link href={to}>
      <button
        className={
          "flex items-center gap-3 px-4 py-2 relative overflow-hidden pill w-full " +
          (expand ? "" : "justify-center")
        }
      >
        <span className="absolute z-0 w-[80px] h-[80px] flex grow bg-[#3fc754] rounded-full right-[100%] pointer-events-none transition-all duration-300 pillCir2 " />
        <span className="z-10">{icon}</span>
        <span
          className={
            "overflow-hidden text-nowrap z-10 text-sm " +
            (expand ? "" : "hidden w-0")
          }
        >
          {textStr}
        </span>
      </button>
    </Link>
  );
};

export default NavItem;
