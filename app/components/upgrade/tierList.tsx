"use client";
import React, { useEffect, useState, useTransition } from "react";
import { Bebas_Neue, Poppins } from "next/font/google";
import { BadgeCheck, ChevronsDown, CircleCheck, CircleX } from "lucide-react";
import { Tier } from "./tiers";
import { motion } from "framer-motion";
import { Tier as TierType, User } from "@/app/_types";
import { useSearchParams } from "next/navigation";
import { Toaster, toast } from "sonner";
import Link from "next/link";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const popp = Poppins({ weight: "400", subsets: ["latin"] });
const poppSemi = Poppins({ weight: "600", subsets: ["latin"] });

interface Props {
  email: string;
  account: User;
  tiers: TierType[];
}

const TierList: React.FC<Props> = ({ email, account, tiers }) => {
  const [focus, setFocus] = useState(account.tier);
  const [load, startLoad] = useTransition();
  const getParam = useSearchParams();
  const [success, setSucc] = useState<string | null>(getParam.get("success"));

  useEffect(() => {
    const success = getParam.get("success");
    const cancelled = getParam.get("cancelled");

    if (success) {
      toast.success("Transaction Successful!", {
        description: "Your Plan has ben Upgraded.",
        position: "top-center",
        duration: 4000,
        icon: (
          <span className="text-white ps-2">
            <BadgeCheck size={30} />
          </span>
        ),
        classNames: {
          toast: "bg-green-500 border-none",
          description: "ms-6 text-white",
          title: "ms-6 text-white",
        },
      });
    }

    if (cancelled) {
      toast.error("Transaction Cancelled.", {
        position: "top-center",
        description: "Tier Upgrade has been cancelled.",
        duration: 3000,
        icon: (
          <span className="text-red-500 ps-2">
            <CircleX />
          </span>
        ),
        classNames: {
          toast: "bg-red-100",
          title: "ms-4 text-red-500",
          description: "ms-4 text-[#555555]",
          icon: "bg-black",
        },
      });
    }
  }, []);
  console.log(success);
  console.log(account);
  const oneWordTitle = (word: string) =>
    word[0].toUpperCase() + word.substring(1).toLowerCase();

  return (
    <>
      <div className="absolute">
        <Toaster />
      </div>
      {success && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-[#00000030] absolute inset-0 z-40"
          onClick={() => {
            setSucc(null);
          }}
        >
          <div className="w-full h-full flex items-center justify-center">
            <div className="bg-white rounded-3xl py-5 px-5 w-[30%] flex flex-col justify-center items-start z-50">
              <div className="flex justify-between w-full mb-2">
                <span className={`${poppSemi.className} text-base`}>
                  Upgrade Success.
                </span>
                <button
                  onClick={() => {
                    setSucc(null);
                  }}
                >
                  <CircleX />
                </button>
              </div>
              <span className="text-xs text-[#575757]">
                You are now in a whole new world of learning with new fields to
                explore!
              </span>
              <Link
                href={"/browse"}
                className={`self-center bg-[#64c54f] px-5 py-1.5 rounded-xl mt-5 ${poppSemi.className} text-white`}
              >
                Go to Courses
              </Link>
            </div>
          </div>
        </motion.div>
      )}
      {load && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-[#00000030] absolute inset-0 z-50"
        >
          <div className="w-full h-full flex items-center justify-center">
            <div className="bg-white rounded-3xl py-5 px-12 flex flex-col justify-center items-center gap-5">
              <img
                src={"/assets/images/loadGIF.gif"}
                alt="loading GIF"
                className="w-36 h-36"
              />
              <span
                className={`${poppSemi.className} text-base text-[#787878]`}
              >
                Please Wait...
              </span>
            </div>
          </div>
        </motion.div>
      )}
      {/* Free Tier */}
      {tiers.map((item, idx) => (
        <Tier
          current={account.tier === item.tierLabel}
          price={item.price}
          name={oneWordTitle(item.tierLabel)}
          focus={focus === item.tierLabel}
          setFocus={setFocus}
          setLoad={startLoad}
          details={item.features}
          email={email}
          userTier={account.tier}
        />
      ))}

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
