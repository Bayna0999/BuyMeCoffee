'use client';
import { Register } from '@/components/loginCom/Register';
import { SignUp } from '@/components/SignUp/SignUp';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';

const page = () => {
  const [step, setStep] = useState(0);
  const [error, setError] = useState('');
  const [input, setInput] = useState('');
  return (
    <div className="flex h-screen w-full justify-center items-center">
      <Button className="w-[70px] h-[40px] py-2 px-4 absolute top-[42px] right-20 bg-[#F4F4F5] text-black">
        Log in
      </Button>
      {step == 0 ? (
        <SignUp pageStep={setStep} Username={setInput} />
      ) : (
        <Register username={input} />
      )}
    </div>
  );
};

export default page;
