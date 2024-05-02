import React from "react";
import { Bebas_Neue, Poppins } from "next/font/google";
import DashNavi from "../components/navigation/dashNav";
import SearchIcon from "@/public/assets/navIcons/SearchIcon";
import ListIcon from "@/public/assets/dashIcons/listIcon";
import GridIcon from "@/public/assets/dashIcons/gridIcon";
import DownArrow from "@/public/assets/dashIcons/downArr";
import SortIcon from "@/public/assets/navIcons/SortIcon";
import CourseCard from "./components/courseCard";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const popp = Poppins({ weight: "400", subsets: ["latin"] });
const poppSemi = Poppins({ weight: "600", subsets: ["latin"] });

const Dashboard = () => {
  return (
    <>
      <div className="bg-white min-h-screen">
        {/* Dashboard */}
        <DashNavi />
        {/* Content */}
        <div className="ms-[200px] w-[calc(100%-200px)] min-h-screen bg-black flex flex-col px-6">
          {/* Search & Icons */}
          <div className="w-full h-[60px] text-white flex flex-row items-center justify-between">
            {/* Search Bar */}
            <div className="h-2/4 w-1/4 flex items-center relative">
              <input
                className={
                  "bg-[#272727] w-full h-full rounded-full outline-none ps-14 pe-4 py-5 text-sm relative " +
                  popp.className
                }
                type="text"
                name="searchTerm"
                id="searchTerm"
                placeholder="Search"
              />
              <label htmlFor="searchTerm" className="absolute w-6 left-4">
                <SearchIcon hex="#CACACA" />
              </label>
            </div>
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
          {/* Section Header */}
          <div className="w-full h-[70px] flex items-center justify-between text-white">
            {/* Section Name */}
            <span className={"text-4xl " + bebas.className}> Courses </span>

            <div className="flex gap-5">
              {/* Display View */}
              <div className="flex flex-row">
                <div className="bg-[#272727] h-full rounded-full flex flex-row gap-1 items-center">
                  <span className="w-9 p-2 rounded-full">
                    <ListIcon hex="#FFF" />
                  </span>
                  <span className="w-9 p-2  bg-[#7ae36a] rounded-full">
                    <GridIcon hex="#000" />
                  </span>
                </div>
              </div>
              {/* Add Course Btn */}
              <button
                className={
                  "bg-[#7ae36a] rounded-full px-5 py-2 text-black text-sm " +
                  poppSemi.className
                }
              >
                Create A Course
              </button>
            </div>
          </div>
          {/* Course Tabs */}
          <div className="w-full h-[30px] text-white flex items-end border-b border-[#474747] mb-2 gap-4 ">
            <span
              className={
                "text-[#7ae36a] border-b border-[#7ae36a] pb-1 px-1 " +
                popp.className
              }
            >
              All Courses
            </span>
            <span
              className={
                "text-[#878787] border-b border-transparent pb-1 px-1 " +
                popp.className
              }
            >
              Programming
            </span>
            <span
              className={
                "text-[#878787] border-b border-transparent pb-1 px-1 " +
                popp.className
              }
            >
              Databases
            </span>
            <span
              className={
                "text-[#878787] border-b border-transparent pb-1 px-1 " +
                popp.className
              }
            >
              Cloud
            </span>
          </div>

          {/* Search & Filter */}
          <div className="w-full h-[60px] text-white flex flex-row items-center justify-between ">
            {/* Search Bar */}
            <div className="h-2/4 w-1/4 flex items-center relative">
              <input
                className={
                  "bg-[#272727] w-full h-full rounded-full outline-none ps-14 pe-4 py-5 text-sm relative " +
                  popp.className
                }
                type="text"
                name="searchCourse"
                id="searchCourse"
                placeholder="Find courses here..."
              />
              <label htmlFor="searchCourse" className="absolute w-6 left-4">
                <SearchIcon hex="#CACACA" />
              </label>
            </div>
            {/* Filter Area */}
            <button
              className={
                "bg-[#272727] text-[#b7b7b7] h-2/4 py-5 rounded-full flex items-center px-4 gap-1 " +
                popp.className
              }
            >
              <span className="w-6">
                <SortIcon hex="#b7b7b7" />
              </span>
              <span>Sort By</span>
              <span className="w-6">
                <DownArrow hex="#b7b7b7" />
              </span>
            </button>
          </div>
          {/* Courses */}
          <div className="w-full grow text-white rounded-xl flex flex-wrap justify-start mt-3 text-2xl gap-5 pb-5 overflow-hidden">
            <CourseCard
              cardWidth="w-[32%]"
              title="Foundations of UI/UX Design"
              author="Michael Daw"
              tags={["UI/UX Design", "Published"]}
              students={1938}
              diff="Beginner"
            />
            <CourseCard
              cardWidth="w-[32%]"
              title="MongoDB Basic Course"
              author="Anthony De la Cruz"
              tags={["Database", "CRUD Operations"]}
              students={3568}
              diff="Beginner"
            />
            <CourseCard
              cardWidth="w-[32%]"
              title="MongoDB Basic Course"
              author="Anthony De la Cruz"
              tags={["Database", "CRUD Operations"]}
              students={3568}
              diff="Beginner"
            />
            <CourseCard
              cardWidth="w-[32%]"
              title="MongoDB Basic Course"
              author="Anthony De la Cruz"
              tags={["Database", "CRUD Operations"]}
              students={3568}
              diff="Beginner"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
