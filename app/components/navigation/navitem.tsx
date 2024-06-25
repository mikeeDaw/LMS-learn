import React from "react";
import Link from "next/link";

interface Props {
  text: string;
  linkTo: string;
  styling?: string;
}

const NavItem: React.FC<Props> = ({ text, linkTo, styling }) => {
  return (
    <Link
      href={linkTo}
      className={"text-sm text-white " + styling}
      data-testid={text === "Log In" ? "login-signup-button" : ""}
    >
      {text}
    </Link>
  );
};

export default NavItem;
