import React from "react";

interface Props {
  hex?: string;
}

const DashIcon: React.FC<Props> = ({ hex = "#000" }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke={hex}
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M3 8.976C3 4.05476 4.05476 3 8.976 3H15.024C19.9452 3 21 4.05476 21 8.976V15.024C21 19.9452 19.9452 21 15.024 21H8.976C4.05476 21 3 19.9452 3 15.024V8.976Z"
          stroke={hex}
          stroke-width="2"
        ></path>{" "}
        <path
          d="M21 9L3 9"
          stroke={hex}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>{" "}
        <path
          d="M9 21L9 9"
          stroke={hex}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>{" "}
      </g>
    </svg>
  );
};

export default DashIcon;
