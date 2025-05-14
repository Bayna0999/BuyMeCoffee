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
//               <Label htmlFor="name">Add photo</Label>
//               <div className="size-[160px] flex relative justify-center items-center ">
//                 <Camera className="size-[40px] absolute" />
//                 <input
//                   type="file"
//                   className="size-[160px] rounded-full border-dashed border-[1px]"
//                 ></input>
//               </div>
//             </div>
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

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import * as React from "react";
import { Camera } from "lucide-react";
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

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.Please enter name",
  }),
  about: z.string().min(0, {
    message: "Please enter info about yourself",
  }),

  photo: z.string().min(0, {
    message: "Please enter image",
  }),

  social: z.string().min(0, {
    message: "Please enter a social link",
  }),
});
function onSubmit(values: z.infer<typeof formSchema>) {
  // Do something with the form values.
  // ✅ This will be type-safe and validated.
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
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
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
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
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
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
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
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
