import React from "react";
import DashNavi from "@/app/components/navigation/dashNav";
import { Bebas_Neue, Poppins } from "next/font/google";
import BackIcon from "@/public/assets/clientIcons/backIcon";
import RightArr from "@/public/assets/dashIcons/rightArr";
import Chapters from "@/app/components/course/chapters";
import CourseInclude from "@/app/components/course/courseInclude";
import {
  Apple,
  CirclePlay,
  Clock4,
  Heart,
  MessageSquare,
  Presentation,
  Scroll,
  Share,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import Details from "@/app/components/course/details";
import { findCourseByCode } from "@/app/_model/courseModel";
import { redirect } from "next/navigation";
import Link from "next/link";
import { EnrollBtn } from "@/app/components/course/clientElems";
import { auth } from "@/auth";
import { Toaster } from "sonner";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const popp = Poppins({ weight: "400", subsets: ["latin"] });
const poppSemi = Poppins({ weight: "600", subsets: ["latin"] });

const CoursePage = async ({ params }: { params: { courseId: string } }) => {
  const res = await findCourseByCode(params.courseId).then((resp) =>
    JSON.parse(JSON.stringify(resp))
  );
  if (!res || !res.published) {
    redirect("/browse");
  }

  const sesh = await auth();
  console.log("sa course sesh", sesh);

  console.log(res, "Sesh", sesh);
  let enrolled = false;
  if (res.students.includes(sesh?.user!.id)) {
    enrolled = true;
  }

  // if (!isPublisher) {
  //   return redirect("/browse");
  // }

  return (
    <>
      <div className="bg-white min-h-screen">
        {/* <DashNavi /> w-[calc(100%-200px)] ms-[200px]*/}
        <Toaster />
        <div className=" w-full min-h-screen bg-[#0F0F0F] flex flex-col">
          {/* Profile */}
          <div className="w-full h-[60px] text-white flex flex-row px-3 items-center justify-between">
            {/* Logo */}
            <span
              className={"text-4xl text-white pt-3 px-4 " + bebas.className}
            >
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
                    "text-[#555555] translate-y-[5px] text-sm " +
                    bebas.className
                  }
                >
                  Course Title
                </span>
                <span
                  className={
                    "text-[#cccccc] pe-8 text-lg " + poppSemi.className
                  }
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
                <button className="flex gap-3 items-center ps-6 pe-3 mb-2">
                  <span className="text-[#CCCCCC] text-start text-xs border border-[#CCCCCC] w-6 h-6 flex items-center justify-center rounded-[50%] p-3">
                    O
                  </span>
                  <div
                    className={
                      "w-full text-[#CCCCCC] relative text-start " +
                      popp.className
                    }
                  >
                    <span>Course Introduction</span>
                  </div>
                </button>
                <Chapters
                  module="Designing Keypoints"
                  num={1}
                  access={enrolled}
                />
                <Chapters
                  module="Basic Layouts Study"
                  num={2}
                  access={enrolled}
                />
                <Chapters
                  module="Isa Pang Chapter II"
                  num={3}
                  access={enrolled}
                />
              </div>
            </div>

            <div className="flex flex-row w-10/12 gap-5 p-8 pb-0 rounded-tl-3xl bg-[#ddf1db]">
              {/* Mid Side */}
              <div className="w-8/12 h-full flex flex-col gap-4">
                {/* Video Kuno */}
                <div className="h-[500px] bg-[linear-gradient(50deg,#000,#088508,transparent)] relative rounded-3xl">
                  {/* <img
                    src="https://media1.tenor.com/m/TmbNLu_okcUAAAAC/grey-matter-ben10.gif"
                    className="w-full h-full rounded-3xl"
                    alt=""
                  /> */}
                  <span className="w-16 left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] absolute bg-[#b9b9b999] p-5 rounded-full">
                    <RightArr hex="#fff" style={"translate-x-[2px]"} />
                  </span>
                </div>
                {/* Publisher & Share */}
                <div className="flex justify-between">
                  <div className="flex gap-3">
                    <span className="p-6 bg-emerald-500 rounded-full"></span>
                    <div className="flex flex-col">
                      <span className={"text-lg " + popp.className}>
                        {res.publisherName}
                      </span>
                      <span className={"text-[#555555] " + bebas.className}>
                        Publisher
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-4 pe-5">
                    <div className="flex gap-1 ">
                      <span className="text-[#333333]">
                        <Heart size={25} />
                      </span>
                      <span className={"" + popp.className}>385</span>
                    </div>
                    <div className="flex gap-1 ">
                      <span className="text-[#333333]">
                        <Share size={25} />
                      </span>
                      <span className={"" + popp.className}>Share</span>
                    </div>
                  </div>
                </div>
                {/* Description */}
                <div className="flex flex-col mt-5 gap-2">
                  <span className={"text-xl text-[#222222] " + bebas.className}>
                    Description
                  </span>
                  <span className={"text-sm text-[#222222] " + popp.className}>
                    {res.desc}
                  </span>
                </div>
                {/* Course Details */}
                <div className="flex flex-col mt-2 gap-4 pb-6">
                  <span className={"text-xl text-[#333333] " + bebas.className}>
                    Course Details
                  </span>
                  <div className="flex w-full gap-5">
                    <Details
                      title="Lessons"
                      val="28"
                      icon={<Presentation size={17} />}
                    />
                    <Details
                      title="Duration"
                      val="1hr 37min"
                      icon={<Clock4 size={17} />}
                    />
                    <Details
                      title="Skill Level"
                      val={res.diff}
                      icon={<Apple size={17} />}
                    />
                    <Details
                      title="LearnFlix Tier"
                      val={res.tier}
                      icon={<Sparkles size={17} />}
                    />
                  </div>
                </div>
              </div>
              {/* Right Side */}
              <div className="w-4/12 h-full flex flex-col rounded-tr-2xl gap-5">
                {/* Payment mo */}
                <div className="bg-white py-4 px-5 rounded-2xl flex flex-col">
                  <span className={"text-[#999999] " + bebas.className}>
                    Full Course
                  </span>
                  {/* Price */}
                  <div className="flex gap-4 w-full items-center relative">
                    <span
                      className={"text-2xl text-[#333333] " + popp.className}
                    >
                      {res.tier + " Tier"}
                    </span>
                    <span
                      className={
                        "text-base text-[#BBBBBB] line-through " +
                        popp.className
                      }
                    >
                      ₱ 2,500
                    </span>
                    {/* Sale */}
                    <span
                      className={
                        "bg-[#cfe0f2] text-[#4f8ed0] text-lg pb-1 rounded-xl py-1.5 px-3 absolute right-0 " +
                        bebas.className
                      }
                    >
                      40%
                    </span>
                  </div>
                  {/* Course Inclusion */}
                  <div className="flex flex-col mt-5">
                    <span
                      className={
                        "text-sm text-[#555555] mb-1 " + poppSemi.className
                      }
                    >
                      Course Inculdes:
                    </span>
                    <CourseInclude
                      icon={<CirclePlay size={17} />}
                      desc="32 Hours on-demand video"
                    />
                    <CourseInclude
                      icon={<Scroll size={17} />}
                      desc="Mobile Version"
                    />
                  </div>
                  {/* Button */}
                  <EnrollBtn course={res} userId={sesh?.user?.id!} />
                  {/* text */}
                  <span
                    className={
                      "text-xs text-[#bcbcbc] w-full text-center mt-3 " +
                      popp.className
                    }
                  >
                    30-Day money back guarantee
                  </span>
                </div>
                {/* Publisher */}
                <div className="flex flex-col bg-white py-4 px-5 rounded-2xl gap-3">
                  <span className={"text-xl text-[#333333] " + bebas.className}>
                    Publisher
                  </span>
                  <div className="flex flex-row gap-3">
                    <span className="bg-black rounded-full text-white px-4 py-2 flex items-center">
                      {res.publisherName[0]}
                    </span>
                    <div className="flex flex-col">
                      <span className={"" + popp.className}>
                        {res.publisherName}
                      </span>
                      <span
                        className={"text-sm  text-[#888888] " + bebas.className}
                      >
                        Publisher
                      </span>
                    </div>
                  </div>
                  <span className={"text-sm text-[#666666] " + popp.className}>
                    Hi! I am George, I'm 29, a freelance Graphic Designer and 3D
                    Artist with around 5 years of experience in animation,
                    entertainment, and gaming industry.
                  </span>
                  <div className="flex flex-col gap-1.5">
                    {/* */}
                    <span className="flex items-center gap-3">
                      <span className="text-[#444444]">
                        <Star size={15} />
                      </span>
                      <span className={"text-sm " + popp.className}>
                        4.8 Instructor Rating
                      </span>
                    </span>
                    <span className="flex items-center gap-3">
                      <span className="text-[#444444]">
                        <MessageSquare size={15} />
                      </span>
                      <span className={"text-sm " + popp.className}>
                        637 Reviews
                      </span>
                    </span>
                    <span className="flex items-center gap-3">
                      <span className="text-[#444444]">
                        <Users size={15} />
                      </span>
                      <span className={"text-sm " + popp.className}>
                        3,345 Students
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursePage;
