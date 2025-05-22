import React from "react";
import { SquareArrowOutUpRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
export const Creaters = () => {
  return (
    <div className="flex flex-col w-full h-fit px-6 py-6  gap-4 border-[2px] rounded-md">
      <div className="flex justify-between">
        <div className="flex flex-row justify-center items-center gap-2 w-[300px]">
          <Avatar className="size-[48px]">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex  h-fit w-[250px]">
            <p className="text-[20px] font-bold">hello</p>
          </div>
        </div>
        <div className="flex px-4 py-2 h-[40px] w-fit text-[14px] gap-2 bg-[#F4F4F5] rounded-md justify-center items-center">
          <p>View profile</p> <SquareArrowOutUpRight className="size-4" />
        </div>
      </div>
      <div className="flex gap-5">
        <div className="flex flex-col gap-2 w-[50%]">
          <p className="text-[16px] font-bold">About Space ranger</p>
          <p className="text-[12px] ">
            Thank you for being so awesome everyday! You always manage to
            brighten up my day when I’m feeling down. Although $1 isn’t that
            much money it’s all I can contribute at the moment
          </p>
        </div>
        <div className="flex flex-col gap-2 w-[50%]">
          <p className="text-[16px] font-bold">Social media URL</p>
          <p className="text-[12px] ">
            https://buymeacoffee.com/baconpancakes1
          </p>
        </div>
      </div>
    </div>
  );
};
