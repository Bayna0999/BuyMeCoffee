"use client";
import { Login } from "@/components/loginCom/Login";
import { SignUp } from "@/components/SignUp/SignUp";
import React, { useState } from "react";

const page = () => {
  const [step, setStep] = useState(0);
  const [error, setError] = useState("");
  const [input, setInput] = useState("");
  return (
    <div className="flex h-screen w-full justify-center items-center">
      {step == 0 ? (
        <SignUp pageStep={setStep} Username={setInput} />
      ) : (
        <Login username={input} />
      )}
    </div>
  );
};

export default page;
