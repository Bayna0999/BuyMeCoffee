import Frame from "@/components/component/Frame";
import React from "react";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-screen h-screen bg-white relative">
      <Frame />
      <div>{children}</div>
    </div>
  );
}
