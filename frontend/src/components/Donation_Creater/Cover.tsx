"use client";
import React, { SetStateAction, useState } from "react";
import { Button } from "../ui/button";
import { Camera } from "lucide-react";
export const Cover = () => {
  const [url, setUrl] =
    useState<SetStateAction<Event | null | undefined | string>>(null);
  const handlePreview = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setUrl(URL.createObjectURL(file));
    }
  };

  const imageUrl = url ? URL.createObjectURL(url as any) : null;
  return (
    <div className="flex w-screen h-[320px] justify-center items-center bg-amber-100">
      <img
        className="w-full h-[320px] rounded-full absolute"
        src={imageUrl as string}
      />
      <Button className="">
        <div className=" flex px-4 py-2 gap-2 h-[40px] w-fit">
          <Camera />
          <p>Add a cover image</p>
          <input
            className=" rounded-full flex justify-center items-center opacity-0 "
            type="file"
            id="files"
            onChange={(event) => {
              handlePreview(event);
            }}
          />
        </div>
      </Button>
    </div>
  );
};
