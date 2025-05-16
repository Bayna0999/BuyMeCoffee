"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import { HTMLProps, useState } from "react";
import { Textarea } from "../ui/textarea";
import { Camera } from "lucide-react";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.Please enter name",
  }),
  about: z.string().min(0, {
    message: "Please enter info about yourself",
  }),

  photo: z.string({ required_error: "Must upload image" }),

  social: z.string().url({
    message: "Please enter a social link",
  }),
});

export function Profile() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });
  const [url, setUrl] = useState(null);
  const handlePreview = (event) => {
    setUrl(event.target.files[0]);
  };
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    console.log(url, "this");
  }
  console.log(url, "url");
  const imageUrl = url ? URL.createObjectURL(url as any) : null;
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="photo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Add photo</FormLabel>
              <FormControl>
                <div className="  size-[160px] border-[1px] border-dashed flex justify-center items-center relative rounded-full ">
                  <input
                    className="size-[160px]  flex justify-center border-none items-center opacity-0 absolute z-1 rounded-full"
                    type="file"
                    id="files"
                    {...field}
                    onChange={(event) => {
                      field.onChange(event);
                      handlePreview(event);
                    }}
                  />
                  {imageUrl && (
                    <img
                      className="size-[158px] rounded-full"
                      src={imageUrl as string}
                    />
                  )}
                  <Camera className="flex absolute z-[-1]" />
                </div>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  className=" "
                  placeholder="Enter your name here"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="about"
          render={({ field }) => (
            <FormItem>
              <FormLabel>About</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Write about yourself here"
                  className="resize-none h-[131px]"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="social"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Social media URL</FormLabel>
              <FormControl>
                <Input
                  className="w-[510px] h-[40px]"
                  placeholder="https://"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end">
          <Button type="submit">Continue</Button>
        </div>
      </form>
    </Form>
  );
}
