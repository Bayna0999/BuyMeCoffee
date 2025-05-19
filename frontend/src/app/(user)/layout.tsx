import Frame from "@/components/component/Frame";
import { Navigation } from "@/components/component/Navigation";
import React from "react";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-screen h-screen bg-white relative">
      <div className="w-[50%]">
        {" "}
        <Navigation />
        {children}
      </div>
    </div>
  );
}
