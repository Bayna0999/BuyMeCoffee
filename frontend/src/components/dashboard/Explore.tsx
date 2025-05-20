import React from 'react';
import { Input } from '../ui/input';
import { Search } from 'lucide-react';
import { Creaters } from './Creaters';

export const Explore = () => {
  return (
    <div className="flex flex-col gap-6 w-screen py-[50px] mr-[100px]">
      <div className="flex flex-col w-full h-[88px] gap-[24px]">
        <p className="flex font-bold">Explore creators</p>
        <div className="flex w-[243px] h-[36px] px-3 gap-[10px] justify-center items-center border-[2px] rounded-md">
          <Search className="size-4" />
          <input type="text" placeholder="Search name" />
        </div>

        <Creaters />
      </div>
    </div>
  );
};
