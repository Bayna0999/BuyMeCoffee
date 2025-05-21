import React, { useState } from "react";
import { Coffee } from "lucide-react";

const Data = [1, 2, 5, 10];
export const Amount = () => {
  const [step, setStep] = useState(0);
  const handleStepChange = (newStep: number) => {
    if (newStep === 0) {
      setStep(0);
    } else if (newStep === 1) {
      setStep(1);
    } else if (newStep === 2) {
      setStep(2);
    } else if (newStep === 3) {
      setStep(3);
    }
  };
  return (
    <div className="flex gap-2">
      {Data.map((value, index) => {
        return (
          <div
            key={index}
            onClick={() => handleStepChange(index)}
            className={`flex justify-center items-center gap-2 h-10 px-4 py-2 ${
              step == index ? "border-[2px] rounded-md " : ""
            }"`}
          >
            <Coffee className="size-4" />
            <p className="text-[14px]">${value}</p>
          </div>
        );
      })}
      {/* <div
        onClick={() => handleStepChange("1")}
        className={`flex gap-2 h-10  ${
          step == 0 ? "border-[2px] rounded-md border-black" : ""
        }"`}
      >
        <Coffee className="size-4" />
        <p className="text-[14px]">$1</p>
      </div>
      <div
        onClick={() => handleStepChange("2")}
        className={`"flex gap-2 h-10 w-fit py-2 px-4 ${
          step == 1 ? "border-[2px] rounded-md border-black" : ""
        }"`}
      >
        <Coffee className="size-4" />
        <p className="text-[14px]">$2</p>
      </div>
      <div
        onClick={() => handleStepChange("3")}
        className={`"flex gap-2 h-10 w-fit py-2 px-4 ${
          step == 2 ? "border-[2px] rounded-md border-black" : ""
        }"`}
      >
        <Coffee className="size-4" />
        <p className="text-[14px]">$5</p>
      </div>
      <div
        onClick={() => handleStepChange("4")}
        className={`"flex flex-row  h-[40px] w-fit py-[8px] px-[16px] gap-2 ${
          step == 3 ? "border-[2px] rounded-md border-black" : ""
        }"`}
      >
        <Coffee className="size-4" />
        <p className="text-[14px]">$10</p>
      </div> */}
    </div>
  );
};
