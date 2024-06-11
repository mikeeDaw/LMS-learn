import { getCoursesOfUser } from "@/app/_actions/course";
import NavigationBar from "@/app/components/navigation/sideNav";
import CourseCard from "@/app/dashboard/components/courseCard";
import { auth } from "@/auth";
import { ChevronsRight } from "lucide-react";
import { Bebas_Neue, Poppins } from "next/font/google";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const popp = Poppins({ weight: "400", subsets: ["latin"] });
const poppSemi = Poppins({ weight: "600", subsets: ["latin"] });

const page = async () => {
  const session = await auth();
  console.log(session);
  const name = session?.user!.name!.split(" ")!;

  const courses = await getCoursesOfUser(session?.user?.id!);

  return (
    <div className="h-screen bg-white flex">
      {/* Navbar */}
      <NavigationBar name={`${name[0]} ${name.pop()![0]}.`} />
      {/* Content Area */}
      <div className="bg-slate-200 grow flex flex-col">
        <div className="h-[55%] bg-[url('/assets/images/waves.png')] bg-[length:100%_100%] bg-no-repeat relative shadow-[inset_0px_-207px_147px_-26px_#000]">
          {/* Header */}
          <div className="w-full px-6 h-[68px] text-white bg-[#000000f60] flex flex-row items-center justify-between">
            {/* Title */}
            <span className={"text-3xl translate-y-0 " + bebas.className}>
              My Courses
            </span>
            <div className="flex gap-5"></div>
          </div>
          <div className="w-full flex flex-col px-6 absolute bottom-0 translate-y-[35%] justify-end h-[80%]">
            {/* Header */}
            <span
              className={`${poppSemi.className} flex gap-2 items-center text-[#525252]`}
            >
              <span>Continue Learning</span>
              <ChevronsRight />
            </span>
            {/* Courses List */}
            <div className="flex overflow-x-scroll scrollbar-hide gap-5 grow items-end">
              <div className="w-60 h-48 bg-black rounded-2xl bg-[url('/assets/images/waves.png')] -translate-y-20 bg-cover border-4 border-[#8bff48]">
                X
              </div>
              <div className="w-60 h-48 bg-black rounded-2xl bg-[url('/assets/images/waves.png')] bg-cover border-4 border-white">
                X
              </div>
              <div className="w-60 h-48 bg-black rounded-2xl bg-[url('/assets/images/waves.png')] bg-cover border-4 border-white">
                X
              </div>

              {courses.map((cors) => {
                return (
                  <div className="w-60 h-48 bg-black rounded-2xl bg-[url('/assets/images/waves.png')] bg-cover border-4 border-white">
                    X
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
