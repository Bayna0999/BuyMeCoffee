'use client';
import React, { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { userProps } from '@/lib/utils';
import { useParams, useRouter } from 'next/navigation';

export const Login = () => {
  const formSchema = z.object({
    email: z.string().email({
      message: 'Please enter a valid email ',
    }),
    password: z
      .string({ required_error: 'Required' })
      .min(8, { message: 'password must be least 8 characters' }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const [userData, setUserData] = useState([]);
  const fetchUser = async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/user`
    );
    setUserData(res.data.message);
  };
  useEffect(() => {
    fetchUser();
  }, []);
  const router = useRouter();
  const [result, setResult] = useState(0);
  function onSubmit(values: z.infer<typeof formSchema>) {
    const user = {
      email: values.email,
      password: values.password,
    };
    authUser(user);
    if (result == 1) {
      console.log('success');
      router.push('/');
    } else {
      console.log('fail');
      console.log(result);
    }
  }
  const authUser = (user: userProps) => {
    userData.map((value: userProps) => {
      if (value.email == user.email && value.password == user.password) {
        console.log(
          value.email,
          ' 1 ',
          user.email,
          ' 2 ',
          value.password,
          ' 3 ',
          user.password,
          ' 4 '
        );
        return setResult(1);
      }
    });
  };
  return (
    <Card className="w-[407px] border-0 shadow-none ">
      <CardHeader>
        <CardTitle className="text-2xl">Welcome back</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="flex flex-col gap-5">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email here" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Enter your password here"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" className="w-full">
              Continue
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
