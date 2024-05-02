import React from "react";
import Link from "next/link";

interface Props {
  text: string;
  linkTo: string;
  styling?: string;
}

const NavItem: React.FC<Props> = ({ text, linkTo, styling }) => {
  return (
    <Link href={"#"} className={"text-sm text-white " + styling}>
      {text}
    </Link>
  );
};

export default NavItem;
