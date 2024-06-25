import NavigationBar from "@/app/components/navigation/sideNav";
import { DelBtn } from "@/app/components/settings/delete";
import { auth } from "@/auth";
import { Bebas_Neue, Poppins } from "next/font/google";
import { Toaster } from "sonner";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const popp = Poppins({ weight: "400", subsets: ["latin"] });

const SettingsPage = async () => {
  const session = await auth();
  const name = session?.user!.name!.split(" ")!;

  return (
    <div className={`bg-white h-screen flex ${popp.className}`}>
      {/* Nav */}
      <NavigationBar name={`${name[0]} ${name.pop()![0]}.`} />
      {/* Content */}
      <div className="grow h-screen flex flex-col bg-slate-200 relative">
        <Toaster />
        {/* Header */}
        <div className="w-full px-6 h-[70px]  text-black flex flex-row items-center justify-between">
          {/* Title */}
          <span className={"text-3xl translate-y-1 " + bebas.className}>
            Settings
          </span>
        </div>
        {/* Yung Laman */}
        <div className="w-full grow  px-5 py-3 flex flex-col">
          <div className="w-full bg-white rounded-lg py-3 px-4 flex justify-between items-center">
            <span className={``}>Delete your Account</span>
            <DelBtn uemail={session!.user?.email!} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
