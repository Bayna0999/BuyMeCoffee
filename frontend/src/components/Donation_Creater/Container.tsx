'use client';
import React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu';
import { Heart } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { useState } from 'react';
import { Comment } from '../dashboard/Comment';
import { Amount } from './Amount';
import { Input } from '../ui/input';
import { Textarea } from '@/components/ui/textarea';

const userData = {
  username: 'Bayna',
  profileLink: 'hello.com',
};
const frameworks = [
  {
    value: 'Last 30 days',
    label: 'Last 30 days',
  },
  {
    value: 'Last 90 days',
    label: 'Last 90 days',
  },
  {
    value: 'all time',
    label: 'all time',
  },
];
export const Container = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const [position, setPosition] = useState('');
  const [comment, setComment] = useState<[] | null>(null);
  return (
    <div className="flex w-screen gap-6 px-20">
      <div className="flex flex-col gap-5 w-screen py-[50px] ">
        <div className="flex flex-col w-full h-[300px] bg-white gap-2   border-[2px] rounded-md border-[#E4E4E7]">
          <div className="flex justify-between w-full h-[100px] bg-white px-[24px] py-[24px] rounded-md">
            <div className="flex flex-row items-center gap-2 w-[300px] ">
              <Avatar className="size-[48px]">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-1 h-[48px] w-[250px]">
                <p className="text-[14px] font-bold">{userData.username}</p>
                <p className="text-[14px]">{userData.profileLink}</p>
              </div>
            </div>
            <div className="flex justify-end  gap-2 w-[160px] h-[48px] ">
              <div className="flex justify-center items-center w-[160px] h-[40px] bg-black rounded-md text-white  px-4 py-2 gap-2">
                <p className="text-[14px]">Edit page</p>
              </div>
            </div>
          </div>
          <div className="w-full h-[1px] flex justify-center items-center py-[16px] px-[24px]">
            <div className="w-full h-[1px] bg-[#E4E4E7]"></div>
          </div>
          <div className="py-[24px] px-[24px]">
            <div className="w-full h-9">
              <p className="text-4 font-bold">About {userData.username}</p>
            </div>
            <div className="w-full h-fit">
              <p className="text-[14px]">
                I’m a typical person who enjoys exploring different things. I
                also make music art as a hobby. Follow me along.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full h-fit bg-white gap-2  ">
          <div className="flex flex-col w-full h-fit bg-white gap-2 border-[2px] rounded-md border-[#E4E4E7] px-[24px] py-[24px]">
            <div className="w-full ">
              <p className="text-4 font-bold">Social media URL</p>
            </div>
            <div className="w-full ">
              <p className="text-[14px]">
                https://buymeacoffee.com/spacerulz44
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full h-fit bg-white gap-2  ">
          <div className="flex flex-col w-full h-fit bg-white  border-[2px] rounded-md border-[#E4E4E7] px-[24px] py-[24px] gap-3">
            <p className="text-4 font-bold">Recent Supporters</p>
            {comment ? (
              <Comment />
            ) : (
              <div className="flex flex-col justify-center items-center w-full h-fit px-6 py-6  gap-5 border-[1px] rounded-md">
                <div className="flex justify-center items-center size-[64px] rounded-full bg-[#F4F4F5]">
                  <Heart className="fill-black" />
                </div>
                <div className="flex flex-col">
                  <p className="text-[16px] text-center font-bold">
                    Be the first one to support Jake
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col  w-screen py-[50px] ">
        <div className="flex flex-col w-full h-fit bg-white  border-[2px] rounded-md border-[#E4E4E7] px-[24px] py-[24px] gap-8">
          <div className="flex flex-col gap-6">
            <p className="text-[24px] font-bold">
              Buy {userData.username} a Coffee
            </p>
            <div className="flex flex-col">
              <p className="text-start">Select amount:</p>
              <Amount />
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-[5px]">
              <div className="flex flex-col">
                <p className="text-[16px] font-bold">
                  Enter BuyMeCoffee or social acount URL:
                </p>
              </div>
              <div className="flex flex-col justify-center  w-full h-fit px-2 py-2  gap-5 border-[1px] rounded-md">
                <input type="text" placeholder="buymeacoffee.com/" />
              </div>
            </div>

            <div className="flex flex-col">
              <p className="text-[16px] font-bold">Special message:</p>
              <Textarea className="h-[131px]" />
            </div>
          </div>

          <button className="flex justify-center items-center w-full h-10 bg-[#D1D1D1] rounded-md text-white">
            {' '}
            Support
          </button>
        </div>
      </div>
    </div>
  );
};
