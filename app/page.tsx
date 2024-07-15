import React from "react";
import { Bebas_Neue, Poppins, Montserrat } from "next/font/google";
import Navbar from "./components/navigation/navbar";
import StudyAnim from "./components/lottie/studyAnim";
import { CircleCheck } from "lucide-react";
import CourseFeat from "./components/landing/courseFeat";
import Link from "next/link";
import TierLanding from "./components/landing/tierPill";
import { connectToDb } from "./_lib/mongoose";
import { getAllTier } from "./_model/tierModel";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const popp = Poppins({ weight: "400", subsets: ["latin"] });
const poppSemi = Poppins({ weight: "600", subsets: ["latin"] });

const page = async () => {
  await new Promise((res) => setTimeout(res, 1000));
  await connectToDb();
  const tiers = await getAllTier();

  const additionalDet = [
    {
      subtext: "Free Plan for all users.",
      color: "bg-[#7fff4d]",
      bullCol: "#7fff4d",
      btnText: "Get Started for Free",
    },
    {
      subtext: "Ideal for eager learners.",
      color: "bg-[#edff48]",
      bullCol: "#edff48",
      btnText: "Get Premium Now",
    },
    {
      subtext: "For someone in pursuit of knowledge .",
      color: "bg-[#48ffdd]",
      bullCol: "#48ffdd",
      btnText: "Be an Astro Today",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="h-screen bg-orange-100 flex justify-center items-center relative overflow-hidden">
        {/* Black Area  */}
        <div className="relative w-full lg:w-9/12 xl:w-4/6 h-full bg-black flex items-end ">
          {/* Circle Stuff */}
          <span className="p-[55%] lg:p-[50%] xl:p-[45%] border [border-image:linear-gradient(180deg,#FFFFFF,#000) 1] opacity-70 absolute bottom-[-20%] left-[-15%] lg:left-[-20%] lg:bottom-[-30%] z-20 rounded-full " />
          <span className="lg:w-[400px] lg:h-[400px] xl:w-[480px] xl:h-[480px] bg-[linear-gradient(160deg,_#b8ffb3,_#084304)] z-20 absolute right-0 top-1/2 translate-x-[50%] translate-y-[-35%] rounded-full bg-white">
            <div className="relative w-full h-full">
              <div className="absolute bottom-[-40px] w-[600px] right-[-100px]">
                <StudyAnim />
              </div>
            </div>
          </span>
          {/* Content Area */}
          <div className="relative w-full h-4/6 mb-14 flex flex-col pe-[100px] lg:pe-[300px] ps-16 gap-5 ">
            {/* Title and subtitle */}
            <span className={"text-6xl text-white " + bebas.className}>
              Unlock your learning potential and elevate your{" "}
              <span className="bg-[linear-gradient(90deg,_#b8ffb3,_#62e759,_#24a91c)] text-transparent bg-clip-text">
                Knowledge
              </span>
            </span>
            <span
              className={
                "text-lg text-white pe-32 text-justify " + popp.className
              }
            >
              On-demand learning materials you can access anywhere in the world.
              World-class resources and High-Quality Instructors within your
              reach.
            </span>

            {/* Buttons */}
            <div className="flex mt-12 gap-9 items-center">
              <button
                className={
                  "bg-[linear-gradient(90deg,_#3bcd32,_#1d9916,_#086502)] font-bold py-3 px-7 rounded-lg text-white " +
                  popp.className
                }
              >
                Get a Course
              </button>
              <button className={"text-white " + popp.className}>
                learn more
              </button>
            </div>
            {/* Bottom Cards */}
            <div className="absolute bottom-0 z-10 flex w-[calc(100%-350px)]">
              <div
                className={
                  "relative bg-white h-full w-6/12 flex flex-col pt-4 pb-6 ps-7 pe-5 rounded-2xl gap-3 " +
                  popp.className
                }
              >
                <span className="font-bold"> for your education </span>
                <span className={"text-xs w-4/6 " + popp.className}>
                  our service are designed with the modern standards in mind
                </span>

                <div className="bg-[#62e759] w-full h-full absolute z-[-10] top-0 left-16 rounded-2xl">
                  xx
                </div>
                <div className="bg-[#24a91c] w-full h-full absolute z-[-20] top-0 left-32 rounded-2xl">
                  xx
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Green Gradient Area */}
        <div className="hidden relative lg:w-3/12 xl:w-2/6 h-full bg-[linear-gradient(180deg,_#084304,_#24a91c,_#62e759,_#b8ffb3)] lg:block">
          {/* Circles Stuff */}
          <span className="p-[55%] z-0 border [border-image:linear-gradient(180deg,#FFFFFF,#000) 1] absolute right-[-40%] top-[-20%] z-10 rounded-full " />
        </div>
        <div className="w-full h-full absolute top-0 bg-[url(/assets/grid2.svg)] opacity-10 "></div>
      </div>
      {/* Area 2 */}
      <div className="h-screen w-full bg-[#0f0f0f] relative flex flex-col justify-center items-center pt-[15vh] pb-12 gap-10">
        <div className="w-full flex flex-col items-center gap-2">
          <div className={`text-white text-4xl ${bebas.className}`}>
            Choose your ideal learning plan
          </div>
          <div className={`w-1/2 text-[#BBBBBB] text-center px-12`}>
            Start your journey with a pocket-friendly plans. Elevate your
            knowledge with rich educational materials from our intelligent
            instructors.
          </div>
        </div>
        <div className="w-3/4 grow flex justify-center gap-10">
          {tiers.map((tier, idx) => (
            <TierLanding
              label={tier.tierLabel}
              price={tier.price}
              subtext={additionalDet[idx].subtext}
              features={tier.features}
              buttonText={additionalDet[idx].btnText}
              bgColor={`${additionalDet[idx].color}`}
              bulletCol={additionalDet[idx].bullCol}
              key={`LandPlan${idx}`}
            />
          ))}
        </div>
        <div className="w-full h-full absolute top-0 bg-[url(/assets/grid2.svg)] opacity-10 "></div>
      </div>
    </>
  );
};

export default page;
