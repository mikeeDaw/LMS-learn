import React from "react";
import NavItem from "./navitem";
import { Bebas_Neue, Poppins } from "next/font/google";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const popp = Poppins({ weight: "400", subsets: ["latin"] });

const Navbar = () => {
  return (
    <>
      <div className="fixed top-5 w-full py-3 px-10 flex flex-row justify-between items-center z-40">
        <div className={"text-white text-3xl " + bebas.className}>
          <span className="bg-[linear-gradient(90deg,_#b8ffb3,_#62e759,_#24a91c)] text-transparent bg-clip-text text-4xl">
            Learn
          </span>
          flix
        </div>
        <div className="flex gap-1">
          <NavItem
            text="Link1"
            linkTo="#"
            styling={"px-3 text-lg " + popp.className}
          />
          <NavItem
            text="Link2"
            linkTo="#"
            styling={"px-3 text-lg " + popp.className}
          />
          <NavItem
            text="Link3"
            linkTo="#"
            styling={"px-3 text-lg " + popp.className}
          />
          <NavItem
            text="Link4"
            linkTo="#"
            styling={"px-3 text-lg " + popp.className}
          />
        </div>
        <div className="flex gap-5 items-center">
          <NavItem
            text="Log In"
            linkTo="/login"
            data-testid="login-signup-button"
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
