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
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@radix-ui/react-select";
import axios from "axios";
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
  cardnumber: z.string().min(2, {
    message: "Invalid card number",
  }),
  expired: z.string().min(2, {
    message: "Invalid month",
  }),
  year: z.string().min(2, {
    message: "Invalid year",
  }),
  CVC: z.string().min(2, {
    message: "Invalid number",
  }),
});
export function Card() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      country: "",
    },
  });
  const [url, setUrl] = useState(null);
  const handlePreview = (files) => {
    console.log(files);
    setUrl(files.target.files[0]);
  };
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    console.log(url, "this");
  }
  const [data, setData] = useState();

  const fetchData = async () => {
    const res = await axios.get(
      `https://restcountries.com/v3.1/all?fields=name`
    );
    setData(res.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(data, "dataa");

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem {...field}>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a fruit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Country</SelectLabel>
                      {data?.map((val: string, index: number) => {
                        return (
                          <SelectItem key={index} value={val.name.common}>
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
        <div className="flex gap-[10px] w-[510px]">
          {" "}
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    className="w-[250px]"
                    {...field}
                    placeholder="Enter your name here"
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
                    placeholder="Enter your name here"
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
                <Input placeholder="XXXX-XXXX-XXXX-XXXX" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-[16px]">
          <FormField
            control={form.control}
            name="cardnumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enter card number</FormLabel>
                <FormControl>
                  <Input
                    type="date"
                    placeholder="XXXX-XXXX-XXXX-XXXX"
                    {...field}
                    className="w-[160px] h-[36px]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cardnumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enter card number</FormLabel>
                <FormControl>
                  <Input
                    type="date"
                    placeholder="XXXX-XXXX-XXXX-XXXX"
                    {...field}
                    className="w-[160px] h-[36px]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cardnumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enter card number</FormLabel>
                <FormControl>
                  <Input
                    type="date"
                    placeholder="XXXX-XXXX-XXXX-XXXX"
                    {...field}
                    className="w-[160px] h-[36px]"
                  />
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
