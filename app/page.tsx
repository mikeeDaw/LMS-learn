import React from "react";
import { Bebas_Neue, Poppins, Montserrat } from "next/font/google";
import Navbar from "./components/navigation/navbar";
import StudyAnim from "./components/lottie/studyAnim";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const popp = Poppins({ weight: "400", subsets: ["latin"] });

const page = async () => {
  await new Promise((res) => setTimeout(res, 1000));
  return (
    <>
      <div className="h-screen bg-orange-100 flex justify-center items-center relative overflow-hidden">
        <Navbar />
        {/* Black Area  */}
        <div className="relative w-full lg:w-9/12 xl:w-4/6 h-full bg-black flex items-end ">
          {/* Circle Stuff */}
          <span className="p-[55%] lg:p-[50%] xl:p-[45%] border [border-image:linear-gradient(180deg,#FFFFFF,#000) 1] opacity-70 absolute bottom-[-20%] left-[-15%] lg:left-[-20%] lg:bottom-[-30%] z-20 rounded-full " />
          <span className="lg:w-[400px] lg:h-[400px] xl:w-[480px] xl:h-[480px] bg-[linear-gradient(160deg,_#b8ffb3,_#084304)] z-20 absolute right-0 top-1/2 translate-x-[50%] translate-y-[-35%] rounded-full bg-white">
            <div className="relative w-full h-full">
              {/* <img
                className="absolute top-[-20%] right-[-200px] "
                src="/assets/gradcap.png"
                alt="Graduation Cap"
              /> */}
              <div className="absolute bottom-[-40px] w-[600px] right-[-100px]">
                <StudyAnim />
              </div>
            </div>
          </span>
          {/* Content Area */}
          <div className="relative w-full h-4/6 mb-14 flex flex-col pe-[100px] lg:pe-[300px] ps-16 gap-5 ">
            {/* Title and subtitle */}
            <span className={"text-6xl text-white " + bebas.className}>
              Sample Title Dito Lorem Ipsum Dolomite{" "}
              <span className="bg-[linear-gradient(90deg,_#b8ffb3,_#62e759,_#24a91c)] text-transparent bg-clip-text">
                Bullshit
              </span>
            </span>
            <span
              className={
                "text-lg text-white pe-32 text-justify " + popp.className
              }
            >
              nteger ac dolor eu velit rutrum volutpat. Duis elementum, nulla
              vel imperdiet mollis, ligula enim mollis mi, a vehicula.
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
                <span className="font-bold"> for your business </span>
                <span className={"text-xs w-4/6 " + popp.className}>
                  our service are designed with the modern business in mind
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

        {/* <div
          className={
            bebas.className +
            "p-3 w-4/6 bg-lime-300 flex flex-col items-center gap-6"
          }
        >
          <span className={bebas.className + " text-6xl text-center"}>
            Next JS Sample Layout dolor sit, consectetur adipiscing elit. Aenean
          </span>
          <button className="px-3 py-2 bg-red-300 border border-red-300 rounded-lg">
            Click Me!
          </button>
        </div> */}
      </div>
    </>
  );
};

export default page;
