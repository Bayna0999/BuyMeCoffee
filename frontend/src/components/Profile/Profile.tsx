// "use client";

// import { z } from "zod"

// const formSchema = z.object({
//   username: z.string().min(2).max(50),
// })

// export function Profile() {
//   return (
//     <Card className="w-[550px]">
//       <CardHeader>
//         <CardTitle>Complete your profile page</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <form>
//           <div className="grid w-full items-center gap-4">

//             <div className="flex flex-col space-y-1.5">
//               <Label htmlFor="framework">Name</Label>
//               <Input
//                 className="w-[510px] h-[40px]"
//                 placeholder="Enter your name here"
//               ></Input>
//             </div>
//             <div className="flex flex-col space-y-1.5">
//               <Label htmlFor="framework">Framework</Label>
//               <textarea
//                 className="h-[131px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex  w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
//                 placeholder="Write about yourself here"
//               ></textarea>
//             </div>
//             <div className="flex flex-col space-y-1.5">
//               <Label htmlFor="framework">Framework</Label>
//               <Input
//                 className="w-[510px] h-[40px]"
//                 placeholder="http//:"
//               ></Input>
//             </div>
//           </div>
//         </form>
//       </CardContent>
//       <CardFooter className="flex justify-end">
//         <Button variant="outline">Continue</Button>
//       </CardFooter>
//     </Card>
//   );
// }
"use client";
import ReactFileReader from "react-file-reader";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Camera } from "lucide-react";
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
import { useState } from "react";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.Please enter name",
  }),
  about: z.string().min(0, {
    message: "Please enter info about yourself",
  }),

  photo: z.string({ required_error: "Must upload image" }),

  social: z.string().min(0, {
    message: "Please enter a social link",
  }),
});
function onSubmit(values: z.infer<typeof formSchema>) {
  console.log(values);
}

export function Profile() {
  // ...
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  const [url, setUrl] = useState("");

  const handleFiles = (files) => {
    console.log(files);
    setUrl(files.base64);
  };
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
                <div className=" size-[160px] border-[1px] border-dashed rounded-full flex justify-center items-center relative">
                  <input
                    hidden
                    className="size-[160px] rounded-full flex justify-center items-center"
                    type="file"
                    id="files"
                    {...field}
                  />
                  <Camera className="flex absolute size-[30px]" />
                  {/* <ReactFileReader
                    as={Button}
                    fileTypes={[".png", ".jpg"]}
                    base64={true}
                    handleFiles={handleFiles}
                  >
                    <Avatar className="size-[160px]">
                      <AvatarImage src={url} alt="Avatar Placeholder" />
                      <AvatarFallback>
                        <Camera className="size-[30px]" />
                      </AvatarFallback>
                    </Avatar>
                  </ReactFileReader> */}
                </div>

                {/* <div className="flex flex-col space-y-1.5">
                  <div className="size-[160px] flex relative justify-center items-center ">
                    <Camera className="size-[40px] absolute" />
                    <input
                      type="file"
                      className="size-[160px] rounded-full border-dashed border-[1px]"
                    ></input>
                  </div>
                </div> */}
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
                  className="w-[510px] h-[40px]"
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
          name="social"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Social media URL</FormLabel>
              <FormControl>
                <Input
                  className="w-[510px] h-[131px] "
                  placeholder="Write about yourself here"
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
