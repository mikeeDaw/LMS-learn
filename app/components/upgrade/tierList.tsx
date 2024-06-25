"use client";
import React, { useState } from "react";
import { Bebas_Neue, Poppins } from "next/font/google";
import { ChevronsDown, CircleCheck } from "lucide-react";
import { Tier } from "./tiers";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const popp = Poppins({ weight: "400", subsets: ["latin"] });
const poppSemi = Poppins({ weight: "600", subsets: ["latin"] });

const TierList = () => {
  const [focus, setFocus] = useState("PREMIUM");

  return (
    <>
      {/* Free Tier */}
      <Tier
        current={false}
        price={0.0}
        name={"Free"}
        focus={focus === "FREE"}
        setFocus={setFocus}
        details={[
          "Everything Included in the Free plan",
          "Everything Included in the Free plan",
          "Everything Included in the Free plan",
        ]}
      />
      {/* Premium */}
      <Tier
        current={true}
        price={29.99}
        name={"Premium"}
        focus={focus === "PREMIUM"}
        setFocus={setFocus}
        details={[
          "Everything Included in the Free plan",
          "Everything Included in the Free plan",
          "Everything Included in the Free plan",
        ]}
      />

      {/* Astro */}
      <Tier
        current={false}
        price={54.99}
        name={"ASTRO"}
        focus={focus === "ASTRO"}
        setFocus={setFocus}
        details={[
          "Everything Included in the Free plan",
          "Everything Included in the Free plan",
          "Everything Included in the Free plan",
        ]}
      />
      {/* <div className="w-full h-[25%] bg-[#7cf262] rounded-3xl p-6">
        <div className=" w-full h-full flex flex-col justify-between">
          <div className="flex w-full items-center justify-between">
            <div className="flex flex-col">
              <span className={`${poppSemi.className} text-2xl`}>Astro</span>
              <span className={`${popp.className} text-xs`}>
                Curious learners and quick guides
              </span>
            </div>
            <div className="flex items-center gap-1">
              <span className={`${poppSemi.className} text-3xl`}>$54.99</span>
              <span className={`${popp.className} text-xs`}>/month</span>
            </div>
          </div>
          <span className="h-[1px] bg-[#00000052] w-full" />
          <div className="flex justify-between">
            <span className={`${poppSemi.className} text-sm`}>
              View plan details
            </span>
            <span>
              <ChevronsDown size={20} />
            </span>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default TierList;
