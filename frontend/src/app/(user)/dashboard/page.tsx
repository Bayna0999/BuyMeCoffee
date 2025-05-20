'use client';
import { DashProfile } from '@/components/dashboard/DashProfile';
import { Explore } from '@/components/dashboard/Explore';
import { SideBar } from '@/components/dashboard/SideBar';
import React, { useState } from 'react';

const page = () => {
  const [step, setStep] = useState(0);
  return (
    <div className="flex w-screen h-screen gap-[10px]">
      <SideBar />
      {step == 0 ? <Explore /> : <DashProfile />}
    </div>
  );
};

export default page;
