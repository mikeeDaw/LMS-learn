"use client";
import { ChevronsDown, CircleCheck, Sparkle } from "lucide-react";
import React from "react";
import { Bebas_Neue, Poppins } from "next/font/google";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { getTierNum } from "@/app/_lib/helpers";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const popp = Poppins({ weight: "400", subsets: ["latin"] });
const poppSemi = Poppins({ weight: "600", subsets: ["latin"] });

interface TierProps {
  current: boolean;
  price: number;
  name: string;
  details: string[];
  focus: boolean;
  setFocus: React.Dispatch<React.SetStateAction<string>>;
  setLoad: React.TransitionStartFunction;
  email: string;
  userTier: string;
}

export const Tier: React.FC<TierProps> = ({
  current,
  price,
  name,
  details,
  focus,
  setFocus,
  setLoad,
  email,
  userTier,
}) => {
  const router = useRouter();
  const handleClick = async () => {
    setLoad(async () => {
      const resp = await fetch("/api/stripe", {
        method: "POST",
        body: JSON.stringify({ user_email: email, tier: name.toUpperCase() }),
      });

      const url = await resp.json();
      console.log(url.url);
      router.push(url.url);
    });
  };

  const canUpgrade = getTierNum(userTier) < getTierNum(name);
  console.log(canUpgrade, getTierNum(userTier), getTierNum(name));
  return (
    <div
      className={`w-full ${
        focus
          ? "h-[50%] bg-white border-black shadow-[5px_5px_0_0_#000] border-2 py-7"
          : "h-[25%] bg-[#7cf262]"
      } rounded-3xl px-6 cursor-pointer flex items-center transition-all duration-300`}
      onClick={() => {
        setFocus(name.toUpperCase());
      }}
    >
      <div className="flex flex-col w-full gap-3">
        <div className={`w-full flex justify-start`}>
          {current && focus && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.3, delay: 0.2 },
              }}
              className={`bg-black text-white px-4 py-1.5 rounded-full self-start ${popp.className} text-sm`}
            >
              Current Plan
            </motion.span>
          )}
          {focus && !current && canUpgrade && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 0.2, duration: 0.3 },
              }}
              className={`${bebas.className} text-lg flex items-center gap-2 border border-black ps-4 pe-2.5 py-0.5 rounded-full hover:bg-black hover:text-white transition-all getBtn duration-300`}
              onClick={handleClick}
            >
              <span className="translate-y-[1.5px]"> Get Now</span>
              <span className="getBtn-hover:b">
                <Sparkle size={20} />
              </span>
            </motion.span>
          )}
        </div>
        <div className="flex flex-col w-full grow gap-4">
          <div className="flex w-full items-center justify-between">
            <div className="flex flex-col">
              <span className={`${poppSemi.className} text-2xl`}>{name}</span>
              <span className={`${popp.className} text-xs`}>
                Curious learners and quick guides
              </span>
            </div>
            <div className="flex items-center gap-1">
              <span
                className={`${poppSemi.className} text-3xl`}
              >{`$${price}`}</span>
              <span className={`${popp.className} text-xs`}> /forever</span>
            </div>
          </div>
          <span className="h-[1px] bg-[#00000052] w-full" />
          <div className="flex flex-col w-full">
            {/* View Plan Details */}
            <div className="flex justify-between mb-3">
              <span className={`${poppSemi.className} text-sm`}>
                View plan details
              </span>
              <span
                className={`${
                  focus ? "rotate-180" : ""
                } transition-all duration-300`}
              >
                <ChevronsDown size={20} />
              </span>
            </div>

            {focus &&
              details.map((feature, idx) => (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.5, delay: 0.1 },
                  }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2 mb-1"
                  key={`lms_tier${idx}`}
                >
                  <span className=" text-white rounded-full">
                    <CircleCheck size={25} fill="#000" />
                  </span>
                  <span className={`text-sm ${popp.className}`}>{feature}</span>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
