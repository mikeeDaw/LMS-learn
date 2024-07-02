import { connectToDb } from "@/app/_lib/mongoose";
import { getAllTier } from "@/app/_model/tierModel";
import { findUserbyEmail } from "@/app/_model/userModel";
import NavigationBar from "@/app/components/navigation/sideNav";
import TierList from "@/app/components/upgrade/tierList";
import { auth } from "@/auth";
import { Apple, Check, ChevronsDown, CircleCheck } from "lucide-react";
import { Bebas_Neue, Poppins } from "next/font/google";
import { Toaster } from "sonner";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const popp = Poppins({ weight: "400", subsets: ["latin"] });
const poppSemi = Poppins({ weight: "600", subsets: ["latin"] });

const UpgradePage = async () => {
  const session = await auth();
  const name = session?.user!.name!.split(" ")!;

  await connectToDb();
  const user = await findUserbyEmail(session?.user?.email!);
  const tiers = await getAllTier();
  return (
    <div className=" h-screen flex">
      {/* Nav */}
      <NavigationBar name={`${name[0]} ${name.pop()![0]}.`} />
      {/* Content */}
      <div className="grow h-screen flex flex-col bg-green-200 relative overflow-hidden ">
        {/* Header */}
        <div className="w-full px-6 h-[60px] text-black flex flex-row items-center justify-between">
          {/* Title */}
          <span className={"text-3xl translate-y-1 " + bebas.className}>
            Learnflix Tear
          </span>
        </div>
        <div className="grow w-full flex">
          {/* Text sa Left side */}
          <div className="w-1/2 flex flex-col justify-center ps-12 gap-5">
            <span className="">
              <Apple size={45} />
            </span>
            <span
              className={`${poppSemi.className} text-5xl pe-24 text-[#2d2d2d]`}
            >
              Choose your ideal learning plan.
            </span>
            <span
              className={`${popp.className} text-base pe-28 text-[#545454]`}
            >
              Start your journey with a pocket-friendly plans. Elevate your
              knowledge with rich educational materials from our intelligent
              instructors.
            </span>
          </div>
          {/* Tiers */}
          <div className="flex flex-col w-1/2 pe-16 pb-8 gap-5">
            <TierList
              email={session?.user?.email ?? "none"}
              account={JSON.parse(JSON.stringify(user))}
              tiers={tiers}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpgradePage;
