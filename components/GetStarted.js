import styles from "@/app/style";
import { arrowUp } from "@/public/assets";
import Image from "next/image";
const GetStarted = () => {
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full
  bg-blue-gradient p-[2px] cursor-pointer`}
    >
      <div className="bg-primary w-[100%] h-[100%] rounded-full font-poppins">
        <div className={`${styles.flexCenter} flex-col w-full h-full`}>
          <p className={`${styles.flexCenter} space-x-2 text-gradient`}>
            <span className="font-medium  text-[18px] leading-[23px]">Get</span>
            <Image
              src={arrowUp}
              width={23}
              height={23}
              className="object-contain"
              alt="arrow"
              priority
            />
          </p>
          <p className="text-gradient font-medium text-[18px] leading-[23px]">
            Started
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
