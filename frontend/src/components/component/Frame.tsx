import Image from "next/image";
import React from "react";

const Frame = () => {
  return (
    <div className="flex flex-col justify-center items-center w-[50%] h-full bg-amber-400">
      <Image
        alt="logo"
        src={"/Logo.png"}
        height={20}
        width={120}
        className="flex absolute top-[40px] left-[80px]"
      />
      <div className="flex flex-col justify-center items-center gap-[40px]">
        <Image alt="Icon" src={"/illustration.svg"} height={240} width={240} />
        <div className="flex flex-col gap-4 justify-center items-center">
          <p className="text-[24px] font-extrabold">Fund your creative work</p>
          <p className="text-[16px] w-[455px] flex text-center">
            Accept support. Start a membership. Setup a shop. It’s easier than
            you think
          </p>
        </div>
      </div>
    </div>
  );
};

export default Frame;
