import React from "react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export const Navigation = () => {
  const userData = {
    image: "",
    username: "Jake",
  };
  return (
    <div className="flex w-screen h-[50px] justify-between px-[32px] py-[8px] items-center">
      <Image alt="logo" src={"/Logo.png"} height={20} width={120} />
      {userData.username == "Jake" ? (
        <div className="flex w-[187px] h-[40px] px-[16px] py-[8px] ">
          <Image src="window.svg" alt="profile" width={40} height={40} />
          <DropdownMenu>
            <p>{userData.username}</p>
            <DropdownMenuTrigger>
              {" "}
              <ChevronDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : (
        <button className="w-[83px] h-[40px] flex justify-center items-center px-[16px] py-[8px] bg-[#F4F4F5] rounded-md">
          <p>log out</p>
        </button>
      )}
    </div>
  );
};
