"use client";
import React, { useState } from "react";
import { Bebas_Neue, Poppins } from "next/font/google";
import { AnimatePresence, motion } from "framer-motion";
import { deleteAcc } from "@/app/_actions/settings";
import { toast } from "sonner";
import { BadgeCheck } from "lucide-react";
import { signOut } from "next-auth/react";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const popp = Poppins({ weight: "400", subsets: ["latin"] });

interface Props {
  uemail: string;
}

export const DelBtn: React.FC<Props> = ({ uemail }) => {
  const [delDia, setDelDia] = useState(false);

  const handleDeleteUser = async (email: string) => {
    const res = await deleteAcc(email);
    if (res) {
      toast.success("Your Account has been Deleted.", {
        description: "Thank you for choosing us. Come back soon!",
        position: "top-center",
        duration: 3000,
        icon: (
          <span className="text-emerald-500 ps-2">
            <BadgeCheck />
          </span>
        ),
        classNames: {
          description: "ms-4",
          title: "ms-4 text-emerald-500",
        },
      });

      setTimeout(() => {
        signOut({ callbackUrl: "/login" });
      }, 3000);
    } else {
      console.log("error happened");
    }
  };
  return (
    <>
      <button
        className={
          "bg-red-500 text-white px-5 py-1 rounded-lg " + popp.className
        }
        onClick={() => {
          setDelDia(true);
        }}
      >
        Delete
      </button>
      <AnimatePresence>
        {delDia && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.8, type: "spring" },
              }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#00000040]"
              onClick={() => {
                setDelDia(false);
              }}
            />
            <motion.div
              key={95602}
              initial={{ opacity: 0, scale: 0, x: "-60%", y: "-50%" }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 0.7,
                  type: "spring",
                  bounce: 0.4,
                },
              }}
              exit={{ opacity: 0, scale: 0 }}
              className="absolute top-1/2 left-1/2 flex flex-col w-1/2 bg-white p-4 rounded-lg justify-between gap-3"
            >
              <span className={`text-sm text-[#787878]`}>Are you sure?</span>
              <span>
                <span className="font-bold text-red-700">Warning:</span> All
                courses your enrolled to and their data will also be deleted.
              </span>
              <div className="flex justify-end items-center gap-4">
                <button
                  className="border border-red-500 px-4 py-1.5 text-sm rounded-lg text-red-500 hover:bg-red-500 hover:text-white transition-all duration-200"
                  onClick={() => setDelDia(false)}
                >
                  Cancel
                </button>
                <button
                  className="self-end bg-red-500 text-white py-1.5 px-4 rounded-lg text-sm border border-red-500"
                  onClick={() => handleDeleteUser(uemail)}
                >
                  Delete My Account
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
