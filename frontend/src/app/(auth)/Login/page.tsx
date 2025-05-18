import { Login } from '@/components/loginCom/Login';
import { Button } from '@/components/ui/button';
import React from 'react';

const page = () => {
  return (
    <div className="flex h-screen w-full justify-center items-center">
      <Button className="w-[70px] h-[40px] py-2 px-4 absolute top-[42px] right-20 bg-[#F4F4F5] text-black">
        Sign up
      </Button>
      <Login />
    </div>
  );
};

export default page;
