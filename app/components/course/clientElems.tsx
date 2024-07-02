"use client";
import { Bebas_Neue, Poppins } from "next/font/google";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Course } from "@/app/_types";
import { BadgeCheck, CircleX, Scroll } from "lucide-react";
import { connectToDb } from "@/app/_lib/mongoose";
import { enrollStudent } from "@/app/_model/courseModel";
import { enrollToCourse, unenrollStudent } from "@/app/_actions/course";
import { findUserbyId } from "@/app/_model/userModel";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { getTierNum } from "@/app/_lib/helpers";
import Link from "next/link";

const popp = Poppins({ weight: "400", subsets: ["latin"] });

interface DialogProp {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  course: Course;
  userId: string;
  userTier: string;
}

interface BtnProp {
  course: Course;
  userId: string;
  userTier: string;
}

export const EnrollBtn: React.FC<BtnProp> = ({ course, userId, userTier }) => {
  const [openConf, setOpenConf] = useState(false);
  const [openUn, setOpenUn] = useState(false);
  const enrolled = course.students.includes(userId);
  console.log(enrolled);
  return (
    <>
      <button
        className={
          "rounded  text-white py-2 mt-6  " +
          (enrolled
            ? "bg-[#f34949] hover:bg-[#fd6c6c] "
            : "bg-[#50c350] hover:bg-[#30972f] ") +
          popp.className
        }
        onClick={
          enrolled
            ? () => {
                setOpenUn(true);
                console.log(openUn);
              }
            : () => setOpenConf(true)
        }
      >
        {enrolled ? "Unenroll" : "Enroll Now"}
      </button>
      <AnimatePresence>
        {openConf && (
          <EnrollDialog
            setOpen={setOpenConf}
            course={course}
            userId={userId}
            userTier={userTier}
          />
        )}
        {openUn && (
          <UnenrollDia
            setOpen={setOpenUn}
            course={course}
            userId={userId}
            userTier={userTier}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export const EnrollDialog: React.FC<DialogProp> = ({
  setOpen,
  course,
  userId,
  userTier,
}) => {
  const router = useRouter();
  const handleEnroll = async () => {
    if (getTierNum(userTier) >= getTierNum(course.tier)) {
      try {
        const res = await enrollToCourse(course.code, userId).then((resp) =>
          JSON.parse(JSON.stringify(resp))
        );

        toast.success("Enrollment Success!", {
          description: "You can now access this course.",
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
        console.log(res);
        setOpen(false);
        router.refresh();
      } catch (error) {
        console.log(error);
      }
    } else {
      toast.error("Upgrade Required!", {
        position: "top-center",
        description: `Your current plan does not cover this course. Upgrade to get '${course.title}'`,
        duration: 3500,
        icon: (
          <span className="text-red-500 ps-2">
            <CircleX size={30} />
          </span>
        ),
        classNames: {
          toast: "bg-red-100",
          title: "ms-7 text-red-500",
          description: "ms-7 text-[#555555]",
          icon: "bg-black",
        },
      });
    }
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 0.4,
          transition: {
            duration: 0.7,
            type: "spring",
            bounce: 0.4,
          },
        }}
        exit={{ opacity: 0 }}
        className={"absolute inset-0 bg-black z-40 " + popp.className}
        onClick={() => setOpen(false)}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
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
        className={
          "absolute top-1/2 z-50 left-1/2 bg-white translate-x-[-50%] translate-y-[-50%] w-3/4 lg:w-1/2 xl:w-1/3 h-[40%] p-3 rounded-xl flex " +
          popp.className
        }
      >
        <div className="h-full w-1/2 border-2 overflow-hidden border-[#3cff3c] rounded-xl flex flex-col items-center pt-5 justify-between">
          <div className="flex flex-col items-center">
            <span className="text-xs font-bold text-[#676767] translate-y-1.5">
              Current Tier
            </span>
            <span className="text-3xl">{userTier}</span>
          </div>
          <div className="flex flex-col w-3/4 items-start">
            <div className="flex items-center gap-3 text-[#444444]">
              <Scroll size={25} />
              <span className="text-xs block">Access to resources</span>
            </div>
            <div className="flex items-center gap-3 mt-3 justify-between text-[#444444]">
              <Scroll size={25} />
              <span className="text-xs block">On-demand learning</span>
            </div>
          </div>
          <Link
            href="/upgrade"
            className="bg-[#3cff3c] w-full py-1.5 text-white text-center hover:bg-black hover:text-white transition-all duration-300"
          >
            Upgrade
          </Link>
        </div>
        <div className="flex flex-col w-1/2 justify-between ps-5 pt-3">
          <span>Enroll to this Course?</span>
          <span className="text-2xl pe-10">{course.title}</span>
          <div className="flex justify-end w-full gap-4">
            <button
              className="px-7 py-1.5 bg-[#50c350] text-white rounded-full text-sm transition-all duration-300 hover:bg-[#000]"
              onClick={handleEnroll}
            >
              Get Now
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

const UnenrollDia: React.FC<DialogProp> = ({ setOpen, course, userId }) => {
  const router = useRouter();
  const handleUnenroll = async () => {
    const res = await unenrollStudent(course.code, userId);
    if (!res.error) {
      toast.success("Unenrollment Resolved.", {
        description: "Your unenrollment to this course is successful.",
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
      setOpen(false);
      router.refresh();
    } else {
      console.log("Errored", res);
    }
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 0.4,
          transition: {
            duration: 0.7,
            type: "spring",
            bounce: 0.4,
          },
        }}
        exit={{ opacity: 0 }}
        className={"absolute inset-0 bg-black z-40 " + popp.className}
        onClick={() => {
          setOpen(false);
        }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
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
        className={
          "absolute top-1/2 z-50 left-1/2 bg-white translate-x-[-50%] translate-y-[-50%] w-1/3 py-4 px-5 rounded-xl flex gap-5 flex-col justify-between " +
          popp.className
        }
      >
        <span className={`text-sm text-[#878787]`}>Continue Action </span>
        <span className="text-lg pe-6">
          Unenroll from <span className="font-bold">{course.title}</span> ?
        </span>
        <button
          className=" self-end bg-[#f34949] px-4 py-1 text-white rounded-lg"
          onClick={handleUnenroll}
        >
          Unenroll
        </button>
      </motion.div>
    </>
  );
};
