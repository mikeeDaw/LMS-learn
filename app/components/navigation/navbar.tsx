"use client";
import React, { useEffect, useState } from "react";
import NavItem from "./navitem";
import { Bebas_Neue, Poppins } from "next/font/google";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const popp = Poppins({ weight: "400", subsets: ["latin"] });

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = (e: any) => {
      if (window.scrollY < 100) setScroll(false);
      else setScroll(true);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className={`fixed top-0 w-full pb-4 px-10 flex flex-row justify-between items-center z-40 pt-5 transition-all duration-300 ${
          scroll ? "bg-[#000000CC]" : "bg-transparent"
        }`}
      >
        <div className={"text-white text-3xl " + bebas.className}>
          <span className="bg-[linear-gradient(90deg,_#b8ffb3,_#62e759,_#24a91c)] text-transparent bg-clip-text text-4xl">
            Learn
          </span>
          flix
        </div>
        <div className="flex gap-3">
          <NavItem
            text="Home"
            linkTo="#"
            styling={"px-3 text-lg " + popp.className}
          />
          <NavItem
            text="About"
            linkTo="#"
            styling={"px-3 text-lg " + popp.className}
          />
          <NavItem
            text="Plans"
            linkTo="#"
            styling={"px-3 text-lg " + popp.className}
          />
          <NavItem
            text="Contact Us"
            linkTo="#"
            styling={"px-3 text-lg " + popp.className}
          />
        </div>
        <div className="flex gap-5 items-center">
          <NavItem
            text="Log In"
            linkTo="/login"
            styling={"text-lg me-4 " + popp.className}
          />
          <NavItem
            text="Get a Course"
            linkTo="#"
            styling={
              "bg-[#171717] text-[#b8ffb3] px-4 me-4 py-2 text-lg rounded " +
              popp.className
            }
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
