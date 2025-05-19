import { DashProfile } from "@/components/dashboard/DashProfile";
import { SideBar } from "@/components/dashboard/SideBar";
import React from "react";

const page = () => {
  return (
    <div className="flex w-screen h-screen gap-[10px]">
      <SideBar />
      <DashProfile />
    </div>
  );
};

export default page;
