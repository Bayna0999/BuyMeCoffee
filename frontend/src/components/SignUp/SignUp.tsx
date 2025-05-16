import React, { Dispatch, SetStateAction, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FormInput } from "./FormInput";

export const SignUp = ({
  pageStep,
  Username,
}: {
  pageStep: Dispatch<SetStateAction<number>>;
  Username: Dispatch<SetStateAction<string>>;
}) => {
  const [step1, setStep1] = useState(0);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleOnClick = (setStep: any) => {
    setStep(step1 + 1);
  };

  return (
    <Card className="w-[407px] border-0 shadow-none">
      <CardHeader>
        <CardTitle className="text-2xl">Create Your Account</CardTitle>
        <CardDescription>Choose a username for your page</CardDescription>
      </CardHeader>
      <CardContent>
        {/* <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label>Username</Label>
              <Input placeholder="Name of your project" />
            </div>
            <div className="flex flex-col"></div>
          </div>
        </form> */}
        <FormInput
          placeholder="Name of your project"
          label="Username"
          type="text"
          setChange={setInput}
          error={error}
        />
      </CardContent>
      <CardFooter>
        <Button
          onClick={() => {
            handleOnClick(pageStep);
            Username(input);
          }}
          className="w-full"
        >
          Continue
        </Button>
      </CardFooter>
    </Card>
  );
};
// <Card className="flex flex-col gap-6 w-[360px] h-fit border-0 shadow-none">
//   <CardHeader>
//     <p className="text-[24px] text-black font-extrabold">
//       Create Your Account
//     </p>
//     <p className="text-[14px] text-[#71717A]">
//       Choose a username for your page
//     </p>
//   </CardHeader>
//   <CardContent className="flex flex-col gap-[20px] w-[360px] h-[40px]">
//     <p className="text-[14px] text-black font-bold w-[360px] h-[40px]">
//       Username
//     </p>
//     <input
//       type="text"
//       placeholder="Enter username here"
//       className="w-[360px] h-[40px]  border-[2px] px-[10px] py-[10px] rounded-sm border-[#71717A]"
//     />
//     <button className="w-[360px] h-[40px] py-[10px] bg-[#E4E4E7] rounded-sm flex justify-center items-center font-bold text-white ">
//       Continue
//     </button>
//   </CardContent>
//   <CardFooter></CardFooter>
// </Card>
