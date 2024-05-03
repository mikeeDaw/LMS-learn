import React from "react";

interface Props {
  hex: string;
  style: string;
}

const RightArr: React.FC<Props> = ({ hex = "#FFF", style }) => {
  return (
    <svg
      fill={hex}
      version="1.1"
      id="Layer_1"
      viewBox="0 0 330 330"
      className={style}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          id="XMLID_308_"
          d="M37.728,328.12c2.266,1.256,4.77,1.88,7.272,1.88c2.763,0,5.522-0.763,7.95-2.28l240-149.999 c4.386-2.741,7.05-7.548,7.05-12.72c0-5.172-2.664-9.979-7.05-12.72L52.95,2.28c-4.625-2.891-10.453-3.043-15.222-0.4 C32.959,4.524,30,9.547,30,15v300C30,320.453,32.959,325.476,37.728,328.12z"
        ></path>{" "}
      </g>
    </svg>
  );
};

export default RightArr;
