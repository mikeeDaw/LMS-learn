import React from "react";

interface Props {
  hex: string;
}

const CourseIcon: React.FC<Props> = ({ hex = "#FFF" }) => {
  return (
    <svg
      fill={hex}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 92 92"
      enableBackground="new 0 0 92 92"
      stroke={hex}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          id="XMLID_1705_"
          d="M89.6,31.5l-42-18.9c-1.1-0.5-2.3-0.5-3.3,0l-42,18.9C1,32.2,0,33.5,0,35.1c0,1.5,1,2.9,2.4,3.6L6,40.4v14 c0,1.4,1.1,2.5,2.5,2.5s2.5-1.1,2.5-2.5V43l6,3.2v17c0,0.7,0.2,1.3,0.6,1.9c0.4,0.6,9.5,14.2,27.9,14.2c18.9,0,27.6-13.7,28-14.2 c0.3-0.5,0.6-1.2,0.6-1.8V46.7l15.9-8.1c1.4-0.7,2.2-2.1,2.2-3.6C92,33.5,91,32.2,89.6,31.5z M67,62.1c-2,2.4-8.8,10.2-21.5,10.2 C33.1,72.3,26,64.6,24,62.1V49.7L44.2,60c0.6,0.3,1.2,0.4,1.8,0.4s1.3-0.1,1.9-0.4L67,50.3V62.1z M46,52L13.2,35.4L46,20.6 l32.8,14.8L46,52z M11,60.3c0.7,0.7,1.2,1.8,1.2,2.8c0,1-0.4,2.1-1.2,2.8c-0.7,0.7-1.8,1.2-2.8,1.2s-2.1-0.4-2.8-1.2 c-0.7-0.7-1.2-1.8-1.2-2.8c0-1,0.4-2.1,1.2-2.8c0.7-0.7,1.8-1.2,2.8-1.2S10.2,59.5,11,60.3z"
        ></path>
      </g>
    </svg>
  );
};

export default CourseIcon;
