"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";

import axios from "axios";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

type CountryType = {
  name: {
    common: string;
  };
};

const Months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

const formSchema = z.object({
  country: z.string({
    message: "Select country to continue",
  }),
  firstname: z.string().min(2, {
    message: "First name must match",
  }),
  lastname: z.string().min(2, {
    message: "Last name must match",
  }),
  cardnumber: z.string().length(16, {
    message: "Invalid card number",
  }),
  expired: z.string({ message: "Select expired month to continue" }),
  year: z.string({ message: "select " }),
  CVC: z.string().length(3, {
    message: "Invalid number",
  }),
});

export function Card() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  const [data, setData] = useState<CountryType[]>([]);

  const fetchData = async () => {
    const res = await axios.get(
      `https://restcountries.com/v3.1/all?fields=name`
    );
    setData(res.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const checkLuhn = function (cardNo: string) {
    let s = 0;
    let doubleDigit = false;
    for (let i = cardNo.length - 1; i >= 0; i--) {
      let digit = +cardNo[i];
      if (doubleDigit) {
        digit *= 2;
        if (digit > 9) digit -= 9;
      }
      s += digit;
      doubleDigit = !doubleDigit;
    }
    return s % 10 == 0;
  };
  const [input, setInput] = useState("");
  const hadnleInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const cardNumber = event.target.value;
    setInput(cardNumber);

    if (!checkLuhn(cardNumber)) {
      form.setError("cardnumber", {
        type: "manual",
        message: "Invalid card number",
      });
    } else {
      form.clearErrors("cardnumber");
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem {...field}>
              <FormLabel>Country</FormLabel>
              <FormControl>
                <Select>
                  <SelectTrigger className="w-[510px] h-[40px]">
                    <SelectValue placeholder="Select a country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Country</SelectLabel>
                      {data?.map((val, index: number) => {
                        return (
                          <SelectItem key={index} value={val.name.common}>
                            {val.name.common}
                          </SelectItem>
                        );
                      })}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-[10px] w-[510px]">
          {" "}
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Firstname</FormLabel>
                <FormControl>
                  <Input
                    className="w-[250px]"
                    {...field}
                    placeholder="Enter your firstname here"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Lastname</FormLabel>
                <FormControl>
                  <Input
                    className="w-[250px]"
                    {...field}
                    placeholder="Enter your lastname here"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="cardnumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Enter card number</FormLabel>
              <FormControl>
                <Input
                  placeholder="XXXX-XXXX-XXXX-XXXX"
                  {...field}
                  onChange={hadnleInputValue}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-[16px]">
          <FormField
            control={form.control}
            name="expired"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Month</FormLabel>
                <FormControl>
                  <Select>
                    <SelectTrigger className="w-[160px] h-[40px]">
                      <SelectValue placeholder="Select a fruit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Country</SelectLabel>
                        {Months.map((val: string, index: number) => {
                          return (
                            <SelectItem key={index} value={val}>
                              {val}
                            </SelectItem>
                          );
                        })}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="year"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Year</FormLabel>
                <FormControl>
                  <Select>
                    <SelectTrigger className="w-[160px] h-[40px]">
                      <SelectValue placeholder="Select a fruit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Country</SelectLabel>
                        <SelectItem value={"2001"}>2020</SelectItem>
                        <SelectItem value={"2002"}>2021</SelectItem>
                        <SelectItem value={"2003"}>2022</SelectItem>
                        <SelectItem value={"2004"}>2023</SelectItem>
                        <SelectItem value={"2005"}>2024</SelectItem>
                        <SelectItem value={"2006"}>2025</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="CVC"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enter card number</FormLabel>
                <FormControl>
                  <Input placeholder="CVC" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
