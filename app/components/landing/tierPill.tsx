import { Bebas_Neue, Poppins } from "next/font/google";
import Link from "next/link";
import CourseFeat from "./courseFeat";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const popp = Poppins({ weight: "400", subsets: ["latin"] });
const poppSemi = Poppins({ weight: "600", subsets: ["latin"] });

interface Props {
  label: string;
  price: number;
  subtext: string;
  features: string[];
  buttonText: string;
  bgColor: string;
  bulletCol: string;
}

const TierLanding: React.FC<Props> = ({
  label,
  price,
  subtext,
  features,
  buttonText,
  bgColor,
  bulletCol,
}) => {
  return (
    <div
      className={`w-1/3 rounded-xl flex flex-col overflow-hidden z-10 ${bgColor}`}
    >
      <div className="h-[40%] w-full flex flex-col justify-between p-5 pb-4 ">
        <span className={`${bebas.className} text-xl`}>{label}</span>
        <span className={`${poppSemi.className} text-5xl`}>${price}</span>
        <span className={`${popp.className} text-xs`}>{subtext}</span>
      </div>
      <div
        className={`h-2/3 w-full flex flex-col px-5 pb-5 pt-6 justify-between`}
      >
        <div className={`flex flex-col gap-3.5 ${poppSemi.className}`}>
          {features.map((feat, idx) => (
            <CourseFeat
              text={feat}
              bgColor={bulletCol}
              key={`labelFeat${idx + 1}`}
            />
          ))}
        </div>

        <Link href={"/login"} className="self-end">
          <button className="bg-black text-white px-4 py-2 rounded-xl text-sm">
            {buttonText}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TierLanding;
