import { findCourseByCode } from "@/app/_model/courseModel";
import { Chapters, Quizzes } from "@/app/components/course/chapters";
import { auth } from "@/auth";
import BackIcon from "@/public/assets/clientIcons/backIcon";
import { Bebas_Neue, Poppins } from "next/font/google";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import { Toaster } from "sonner";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const popp = Poppins({ weight: "400", subsets: ["latin"] });
const poppSemi = Poppins({ weight: "600", subsets: ["latin"] });

const ChapterPage = async ({
  params,
}: {
  params: { courseId: string; num: string };
}) => {
  const res = await findCourseByCode(params.courseId).then((resp) =>
    JSON.parse(JSON.stringify(resp))
  );
  if (!res || !res.published) {
    redirect("/browse");
  }

  const sesh = await auth();

  console.log(res, "Sesh", sesh);
  console.log(params);
  let enrolled = false;
  if (res.students.includes(sesh?.user!.id)) {
    enrolled = true;
  } else {
    redirect(`/course/${params.courseId}`);
  }

  return (
    <div className="bg-white min-h-screen">
      {/* <DashNavi /> w-[calc(100%-200px)] ms-[200px]*/}
      <Toaster />
      <div className=" w-full min-h-screen bg-[#0F0F0F] flex flex-col">
        {/* Profile */}
        <div className="w-full h-[60px] text-white flex flex-row px-3 items-center justify-between">
          {/* Logo */}
          <span className={"text-4xl text-white pt-3 px-4 " + bebas.className}>
            <span className="bg-[linear-gradient(90deg,_#b8ffb3,_#62e759,_#24a91c)] text-transparent bg-clip-text">
              Learn
            </span>
            flix
          </span>
          {/* Profile Stuff */}
          <div className="flex flex-row gap-3">
            <span className="bg-white rounded-full flex justify-center items-center w-[35px] h-[35px] text-black">
              B
            </span>
            <span className="bg-white rounded-full flex justify-center items-center w-[35px] h-[35px] text-black">
              N
            </span>
          </div>
        </div>

        <div className="flex flex-row relative gap-5 h-[calc(100vh-60px)] ">
          {/* Left Side */}
          <div className="w-2/12 rounded-tl-2xl flex flex-col py-4  gap-4">
            {/* Back */}
            <Link href={"/browse"} className="ps-6 pe-3">
              <div className="flex items-center relative ">
                <span
                  className={
                    "text-2xl text-[#777777] flex items-center gap-2 cursor-pointer"
                  }
                >
                  <span className="w-5 translate-y-[-2px]">
                    <BackIcon hex="#777777" />
                  </span>
                  <span className={"text-xl " + bebas.className}>
                    Back to Courses
                  </span>
                </span>
              </div>
            </Link>
            {/* Course Title */}
            <div className="flex flex-col ps-6 pe-3">
              <span
                className={
                  "text-[#555555] translate-y-[5px] text-sm " + bebas.className
                }
              >
                Course Title
              </span>
              <span
                className={"text-[#cccccc] pe-8 text-lg " + poppSemi.className}
              >
                {res.title}
              </span>
              <span className={`${bebas.className} text-[#676767] text-lg`}>
                {res.code}
              </span>
            </div>
            {/* Chapters */}
            <div className="flex flex-col mt-3 relative gap-4 ">
              <span
                className={
                  "text-[#555555] translate-y-[5px] text-base ps-6 pe-3 " +
                  bebas.className
                }
              >
                Chapters
              </span>
              <Link
                href={`/course/${res.code}`}
                className="flex gap-3 items-center ps-6 pe-3 mb-2"
              >
                <span className="text-[#777777] text-start text-xs border border-[#777777] w-6 h-6 flex items-center justify-center rounded-[50%] p-3">
                  O
                </span>
                <div
                  className={
                    "w-full text-[#777777] relative text-start " +
                    popp.className
                  }
                >
                  <span>Course Introduction</span>
                </div>
              </Link>
              <Chapters
                courseCode={res.code}
                onTab={false}
                module="Designing Keypoints"
                num={1}
                access={enrolled}
              />
              <Chapters
                courseCode={res.code}
                onTab={false}
                module="Basic Layouts Study"
                num={2}
                access={enrolled}
              />
              <Chapters
                courseCode={res.code}
                onTab={false}
                module="Isa Pang Chapter II"
                num={3}
                access={enrolled}
              />
            </div>
            {/* Quizzes */}
            <div className="flex flex-col mt-3 relative gap-4 ">
              <span
                className={
                  "text-[#555555] translate-y-[5px] text-base ps-6 pe-3 " +
                  bebas.className
                }
              >
                Quizzes
              </span>

              <Quizzes
                onTab={true}
                courseCode={res.code}
                module="Summative Quiz <3"
                num={1}
                access={enrolled}
              />
              <Quizzes
                courseCode={res.code}
                onTab={true}
                module="Midterm Assessment"
                num={2}
                access={enrolled}
              />
              <Quizzes
                courseCode={res.code}
                onTab={true}
                module="Final Exam"
                num={3}
                access={enrolled}
              />
            </div>
          </div>

          <div className="flex flex-row w-10/12 gap-5 p-8 pb-0 rounded-tl-3xl bg-[#ddf1db]">
            {/* Mid Side */}
            <div className="w-8/12 h-full flex flex-col gap-4">
              <span>*Mga Quizzes Dito*</span>
            </div>
            {/* Right Side */}
            <div className="w-4/12 h-full flex flex-col rounded-tr-2xl gap-5"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChapterPage;
