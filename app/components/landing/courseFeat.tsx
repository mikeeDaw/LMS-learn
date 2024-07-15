import { CircleCheck } from "lucide-react";
import React from "react";

interface Props {
  text: string;
  bgColor: string;
}

const CourseFeat: React.FC<Props> = ({ text, bgColor }) => {
  return (
    <div className="flex items-center gap-2">
      <CircleCheck size={22} fill="#000" color={bgColor} />
      <span className="text-sm">{text}</span>
    </div>
  );
};

export default CourseFeat;
