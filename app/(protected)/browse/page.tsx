import { Bebas_Neue, Poppins } from "next/font/google";
import DashNavi from "../../components/navigation/dashNav";
import SearchIcon from "@/public/assets/navIcons/SearchIcon";
import ListIcon from "@/public/assets/dashIcons/listIcon";
import GridIcon from "@/public/assets/dashIcons/gridIcon";
import DownArrow from "@/public/assets/dashIcons/downArr";
import SortIcon from "@/public/assets/navIcons/SortIcon";
import CourseCard from "../../dashboard/components/courseCard";
import { SignOutBtn } from "../../dashboard/components/DashButtons";
import { auth } from "@/auth";
import NavigationBar from "@/app/components/navigation/sideNav";
import CourseTab from "@/app/dashboard/components/courseTab";
import { connectToDb } from "@/app/_lib/mongoose";
import { getAllCourses, getPublished } from "@/app/_model/courseModel";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const popp = Poppins({ weight: "400", subsets: ["latin"] });
const poppSemi = Poppins({ weight: "600", subsets: ["latin"] });

const Dashboard = async () => {
  const session = await auth();
  const name = session?.user!.name!.split(" ")!;

  await connectToDb();
  const courses = await getPublished();

  let delayTime = 0;
  return (
    <>
      <div className="bg-white min-h-screen flex">
        {/* Dashboard */}
        <NavigationBar name={`${name[0]} ${name.pop()![0]}.`} />
        {/* Content */}
        <div className="grow h-screen bg-[#fafafa] flex flex-col">
          {/* Header */}
          <div className="w-full px-6 h-[84px]  text-black flex flex-row items-center justify-between">
            {/* Title */}
            <span className={"text-3xl translate-y-1 " + bebas.className}>
              Browse Materials
            </span>
            {/* Profile Stuff */}
            {/* <div className="flex flex-row gap-3  items-center">
              <span className="bg-black rounded-full flex justify-center items-center w-[35px] h-[35px] text-white">
                B
              </span>
              <span className="bg-black rounded-full flex justify-center items-center w-[35px] h-[35px] text-white">
                N
              </span>
              <SignOutBtn />
            </div> */}
            <div className="flex gap-5">
              {/* Display View */}
              <div className="flex flex-row">
                <div className="bg-[#888888] h-full rounded-full flex flex-row gap-1 items-center">
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
                  "bg-[#7ae36a] rounded-full px-5 py-1 text-black text-sm " +
                  poppSemi.className
                }
              >
                Create A Course
              </button>
            </div>
          </div>
          {/* Section Header */}
          {/* <div className="w-full h-[70px] flex items-center mt-2 justify-between px-6 text-black">
            // Section Name 
            <span className={"text-4xl " + bebas.className}> X </span>

            <div className="flex gap-5">
              // Display View 
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
              // Add Course Btn 
              <button
                className={
                  "bg-[#7ae36a] rounded-full px-5 py-2 text-black text-sm " +
                  poppSemi.className
                }
              >
                Create A Course
              </button>
            </div>
          </div> */}

          {/* Course Tabs */}
          <div className="w-auto h-[30px] mt-1 mx-6 text-white flex items-end border-b z-0 border-[#e6e5e5] mb-2 gap-4 ">
            <span
              className={
                "text-[#71d662] border-b border-[#71d562] pb-1 px-1 z-30 text-sm " +
                popp.className
              }
            >
              All Courses
            </span>
            <CourseTab text={"Programming"} />
            <CourseTab text={"Databases"} />
            <CourseTab text={"Cloud"} />
          </div>

          {/* Search & Filter */}
          <div className="w-full px-6 h-[60px] text-[#222222] flex flex-row items-center justify-between ">
            {/* Search Bar */}
            <div className="h-2/4 w-1/4 flex items-center relative">
              <input
                className={
                  "bg-[#dcdcdc] w-full h-full rounded-full outline-none ps-14 pe-4 py-5 text-sm relative " +
                  popp.className
                }
                type="text"
                name="searchCourse"
                id="searchCourse"
                placeholder="Find courses here..."
              />
              <label htmlFor="searchCourse" className="absolute w-6 left-4">
                <SearchIcon hex="#333333" />
              </label>
            </div>
            {/* Filter Area */}
            <button
              className={
                "bg-[#FFFFFF] border border-[#888888] text-[#7b7b7b] h-2/4 py-5 rounded-full flex items-center px-4 gap-1 " +
                popp.className
              }
            >
              <span className="w-6">
                <SortIcon hex="#666666" />
              </span>
              <span className="text-sm">Sort By</span>
              <span className="w-6">
                <DownArrow hex="#666666" />
              </span>
            </button>
          </div>
          {/* Courses */}
          <div className="w-full overflow-y-scroll py-4 px-6 grow text-white rounded-xl flex flex-wrap justify-start text-2xl overflow-hidden">
            {courses.map((course) => {
              delayTime += 0.1;
              return (
                <CourseCard
                  title={course.title}
                  author={course.publisherName}
                  tags={course.tags}
                  diff={course.diff}
                  students={course.students.length}
                  key={course.code}
                  tier={course.tier}
                  delayTime={delayTime}
                  code={course.code}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
