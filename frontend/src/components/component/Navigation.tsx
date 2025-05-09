import React from "react";
import Image from "next/image";
export const Navigation = () => {
  return (
    <div className="flex w-screen h-[50px] justify-between px-[32px] py-[8px] items-center">
      <Image alt="logo" src={"/Logo.png"} height={20} width={120} />
      <button className="w-[83px] h-[40px] flex justify-center items-center px-[16px] py-[8px] bg-[#F4F4F5] rounded-md">
        <p>log out</p>
      </button>
    </div>
  );
};
