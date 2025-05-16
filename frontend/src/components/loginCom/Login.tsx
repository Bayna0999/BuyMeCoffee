import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
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
export const Login = ({ username }: { username: string }) => {
  const [input, setInput] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [error1, setError1] = useState("");

  return (
    <Card className="w-[407px] border-0 shadow-none">
      <CardHeader>
        <CardTitle className="text-2xl">Welcome,{username}</CardTitle>
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
