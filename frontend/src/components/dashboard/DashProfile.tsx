"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Checked = DropdownMenuCheckboxItemProps["checked"];

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const userData = {
  username: "Bayna",
  profileLink: "hello.com",
};
const frameworks = [
  {
    value: "Last 30 days",
    label: "Last 30 days",
  },
  {
    value: "Last week",
    label: "Last week",
  },
  {
    value: "Last 3 days",
    label: "Last 3 days",
  },
  {
    value: "Yesterdey",
    label: "Yesterdey",
  },
];
export const DashProfile = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [position, setPosition] = React.useState("$1");
  return (
    <div className="flex flex-col gap-6 w-screen py-[50px] mr-[100px]">
      <div className="flex flex-col w-full h-[300px] bg-white gap-2   border-[2px] rounded-md border-[#E4E4E7]">
        <div className="flex justify-between w-full h-[100px] bg-white px-[24px] py-[24px]">
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
          <div className="flex justify-end items-center gap-2 w-[100px] h-[48px]">
            <button className="w-[160px] h-[40px] bg-black rounded-md text-white text-[14px] font-semibold">
              Share page link
            </button>
          </div>
        </div>
        <div className="w-full h-[1px] flex justify-center items-center py-[16px] px-[24px]">
          <div className="w-full h-[1px] bg-[#E4E4E7]"></div>
        </div>
        <div className="py-[24px] px-[24px]">
          <div className="flex gap-3">
            <p className="text-[20px] font-bold">Earning</p>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className="w-[200px] justify-between"
                >
                  {value
                    ? frameworks.find((framework) => framework.value === value)
                        ?.label
                    : "Select framework..."}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandList>
                    <CommandGroup>
                      {frameworks.map((framework) => (
                        <CommandItem
                          key={framework.value}
                          value={framework.value}
                          onSelect={(currentValue) => {
                            setValue(
                              currentValue === value ? "" : currentValue
                            );
                            setOpen(false);
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              value === framework.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {framework.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
          <div>
            <p className="text-[36px] font-bold">$450</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full h-[300px] bg-white gap-2  ">
        <div className="flex justify-between">
          <p className="text-[16px] font-bold">Recent transactions</p>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex w-fit h-[36px] px-4 gap-2">
                <Button className="w-full h-full" variant="outline">
                  <ChevronDown /> Amount
                  <div className="w-[1px] h-[20px] border-[1px] border-[#E4E4E7]"></div>
                  <p>{position}</p>
                </Button>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={position}
                onValueChange={setPosition}
              >
                <DropdownMenuRadioItem value="top">$1</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="bottom">$2</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="right">$5</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="right">$10</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex flex-col w-full h-[300px] bg-white gap-2 border-[2px] rounded-md border-[#E4E4E7]"></div>
      </div>
    </div>
  );
};
