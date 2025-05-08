import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { FormInput } from "../SignUp/FormInput";

const userEmail = "test@gmail.com";
const password = "hello";
export const Login = () => {
  const [input, setInput] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [error1, setError1] = useState("");
  useEffect(() => {
    if (input.length < 5) {
      setError("Password 5 ih usegtei bn");
    } else if (input === password) {
      setError("The password is already taken");
    } else setError("");
  }, [input]);
  useEffect(() => {
    if (email.length < 8) {
      setError1("Email 5 ih usegtei bn");
    } else if (email === userEmail) {
      setError1("The email is already taken");
    } else setError1("");
  }, [email]);
  return (
    <Card className="w-[407px] border-0 shadow-none">
      <CardHeader>
        <CardTitle className="text-2xl">Welcome, baconpancakes1</CardTitle>
        <CardDescription>Connect email and set a password</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <FormInput
                placeholder="Create password here"
                label="Email"
                type="text"
                setChange={setEmail}
                error={error1}
              />
            </div>
            <div className="flex flex-col"></div>
          </div>
        </form>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <FormInput
                placeholder="Create password here"
                label="Password"
                type="Password"
                setChange={setInput}
                error={error}
              />
            </div>
            <div className="flex flex-col"></div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Continue</Button>
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
//     <p className="text-[14px] text-black font-bold w-[360px] h-[40px]">
//       Username
//     </p>
//     <input
//       type="text"
//       placeholder="Enter username here"
//       className="w-[360px] h-[40px]  border-[2px] px-[10px] py-[10px] rounded-sm border-[#71717A]"
//     />
//   </CardContent>
//   <CardFooter>
//     <button className="w-[360px] h-[40px] py-[10px] bg-[#E4E4E7] rounded-sm flex justify-center items-center font-bold text-white ">
//       Continue
//     </button>
//   </CardFooter>
// </Card>
