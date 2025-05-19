import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
const userData = {
  username: 'Bayna',
  profileLink: 'hello.com',
};
export const Comment = () => {
  return (
    <div className="flex flex-col w-full h-fit px-2 py-2  gap-4 ">
      <div className="flex justify-between">
        <div className="flex flex-row items-center gap-2 w-[300px]">
          <Avatar className="size-[48px]">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1 h-[48px] w-[250px]">
            <p className="text-[14px] font-bold">{userData.username}</p>
            <p className="text-[14px]">{userData.profileLink}</p>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-end text-[16px] font-bold ">+ $1</p>
          <p className="text-end text-[12px] text-[#71717A] ">10 hours ago</p>
        </div>
      </div>

      <p className="text-[12px] ">
        Thank you for being so awesome everyday! You always manage to brighten
        up my day when I’m feeling down. Although $1 isn’t that much money it’s
        all I can contribute at the moment
      </p>
    </div>
  );
};
