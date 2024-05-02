import React from "react";
import { Bebas_Neue, Poppins } from "next/font/google";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const popp = Poppins({ weight: "400", subsets: ["latin"] });
const poppSemi = Poppins({ weight: "600", subsets: ["latin"] });

interface Props {
  cardWidth: string;
  title: string;
  author: string;
  tags: string[];
  students: number;
  diff: string;
}

const CourseCard: React.FC<Props> = ({
  cardWidth,
  title,
  author,
  tags,
  students,
  diff,
}) => {
  return (
    <div
      className={
        "bg-[#212121] h-fit rounded-xl px-3 py-3 flex flex-col gap-3 " +
        cardWidth
      }
    >
      <div className="bg-[#787878] w-full h-[200px] rounded-lg"></div>
      {/* Tags */}
      <div className="flex gap-2">
        {tags.map((tag) => {
          return (
            <span className="text-sm px-3 py-1 bg-[#424242] text-[#DADADA] rounded-full">
              {tag}
            </span>
          );
        })}
      </div>
      {/* Title and Author */}
      <div className="flex flex-col border-b border-[#474747] pb-4">
        <span className={"text-xl text-[#D3D3D3] mt-1 " + popp.className}>
          {title}
        </span>

        <span className={"text-sm text-[#969696] " + popp.className}>
          by {author}
        </span>
      </div>
      {/* # of Students and Difficulty */}
      <div className="flex flex-row gap-3">
        <span className={"text-xs text-[#969696] " + popp.className}>
          {students} Students
        </span>
        <span className={"text-xs text-[#969696] " + popp.className}>•</span>
        <span className={"text-xs text-[#969696] " + popp.className}>
          {diff}
        </span>
      </div>
      {/* Get Course Button */}
      <button className="w-full border mt-1 border-[#7ae36a] text-[#7ae36a] rounded-full text-sm py-2">
        View Course
      </button>
    </div>
  );
};

export default CourseCard;
