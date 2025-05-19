"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "../ui/button";
import { useState } from "react";
export const SideBar = () => {
  const [step, setStep] = useState(0);
  const handleStepChange = (newStep: string) => {
    if (newStep === "home") {
      setStep(0);
    } else if (newStep === "dashboard") {
      setStep(1);
    } else if (newStep === "explore") {
      setStep(2);
    } else if (newStep === "account-settings") {
      setStep(3);
    }
  };
  return (
    <div className="w-[400px] h-screen bg-white flex flex-col items-center py-[50px] ml-[100px]">
      <div className="flex flex-col bg-white h-[160px] w-[250px] gap-1">
        <button
          name="home"
          onClick={() => handleStepChange("home")}
          className={`"flex w-full h-[36px] rounded-md px-[16px] py-[8px] text-start text-[14px] ${
            step === 0 ? "bg-[#F4F4F5]" : ""
          }`}
        >
          Home
        </button>
        <button
          name="dashboard"
          onClick={() => handleStepChange("dashboard")}
          className={`"flex w-full h-[36px] rounded-md px-[16px] py-[8px] text-start text-[14px] ${
            step === 1 ? "bg-[#F4F4F5]" : ""
          }`}
        >
          Explore
        </button>
        <button
          name="explore"
          onClick={() => handleStepChange("explore")}
          className={`"flex w-full h-[36px] rounded-md px-[16px] py-[8px] text-start text-[14px] ${
            step === 2 ? "bg-[#F4F4F5]" : ""
          }`}
        >
          View Page
        </button>
        <button
          name="account-settings"
          onClick={() => handleStepChange("account-settings")}
          className={`"flex w-full h-[36px] rounded-md px-[16px] py-[8px] text-start text-[14px] ${
            step === 3 ? "bg-[#F4F4F5]" : ""
          }`}
        >
          Account settings
        </button>
      </div>
    </div>
  );
};
