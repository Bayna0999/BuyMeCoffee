import React from 'react';
import { Button } from '../ui/button';
import { Camera } from 'lucide-react';
export const Cover = () => {
  return (
    <div className="flex w-screen h-[320px] justify-center items-center bg-amber-100">
      <Button className="flex px-4 py-2 gap-2 h-[40px] w-fit">
        <Camera />
        <p>Add a cover image</p>
      </Button>
    </div>
  );
};
