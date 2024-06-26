"use client";
import React from "react";
import { Bebas_Neue, Poppins } from "next/font/google";
import { motion } from "framer-motion";
import Link from "next/link";

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
  code: string;
}

const CourseCard: React.FC<Props> = ({
  title,
  author,
  tags,
  students,
  diff,
  delayTime,
  tier,
  code,
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
      whileHover={{ scale: 1.04, transition: { duration: 0.4 } }}
      className="w-1/3 px-3.5 pb-6 h-fit"
    >
      <div
        className={
          "bg-[#FFFFFF] shadow-[0_1px_15px_-8px_#000] relative h-fit rounded-xl px-3 py-3 flex flex-col gap-2 w-full overflow-hidden " +
          popp.className
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
        <div className="bg-[url('/assets/images/waves.png')] bg-cover bg-no-repeat w-full h-[200px] rounded-lg flex items-end px-2 py-2">
          {/* Tags */}

          <div className="flex gap-2 flex-wrap">
            {tags.map((tag) => {
              return (
                <span
                  className="text-xs px-3 py-1 bg-[#DDDDDD] text-[#343434] rounded-full text-nowrap"
                  key={Math.floor(Math.random() * 99999)}
                >
                  {tag}
                </span>
              );
            })}
          </div>
        </div>

        {/* Title and Author */}
        <div className="flex flex-col border-b border-[#DDDDDD] pb-3">
          <span className={"text-base text-[#222222] " + popp.className}>
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
        <Link href={`/course/${code}`} data-testid={`active-course-${code}`}>
          <button className="w-full border mt-1 border-[#7ae36a] text-[#7ae36a] hover:bg-[#7ae36a] hover:text-white transtion-all duration-300 rounded-full text-sm py-2">
            View Course
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default CourseCard;
