"use client";
import React from "react";
import { Bebas_Neue, Poppins } from "next/font/google";
import { motion } from "framer-motion";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const popp = Poppins({ weight: "400", subsets: ["latin"] });
const poppSemi = Poppins({ weight: "600", subsets: ["latin"] });

interface Props {
  title: string;
  author: string;
  tags: string[];
  students: number;
  diff: string;
  delayTime: number;
  tier: string;
}

const CourseCard: React.FC<Props> = ({
  title,
  author,
  tags,
  students,
  diff,
  delayTime,
  tier,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          duration: 0.8,
          delay: delayTime,
          bounce: 0.4,
        },
      }}
      className="w-1/3 px-3.5 pb-6"
    >
      <div
        className={
          "bg-[#FFFFFF] shadow-[0_1px_15px_-8px_#000] relative h-fit rounded-xl px-3 py-3 flex flex-col gap-3 w-full overflow-hidden "
        }
      >
        {tier != "Free" && (
          <div
            className={
              "absolute top-6 right-[-40px] text-center text-base rotate-45 w-[150px] " +
              (tier == "Astro"
                ? "bg-gradient-to-r from-[#1f89a9] to-[#ff59da] "
                : "bg-gradient-to-r from-[#931e1e] to-[#e0ef0f] ") +
              popp.className
            }
          >
            {tier}
          </div>
        )}
        <div className="bg-[#82ef93] w-full h-[200px] rounded-lg"></div>
        {/* Tags */}
        <div className="flex gap-2">
          {tags.map((tag) => {
            return (
              <span
                className="text-sm px-3 py-1 bg-[#787878] text-[#DADADA] rounded-full"
                key={Math.floor(Math.random() * 99999)}
              >
                {tag}
              </span>
            );
          })}
        </div>
        {/* Title and Author */}
        <div className="flex flex-col border-b border-[#DDDDDD] pb-4">
          <span className={"text-xl text-[#222222] mt-1 " + popp.className}>
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
        <button className="w-full border mt-1 border-[#7ae36a] text-[#7ae36a] hover:bg-[#7ae36a] hover:text-white transtion-all duration-300 rounded-full text-sm py-2">
          View Course
        </button>
      </div>
    </motion.div>
  );
};

export default CourseCard;
