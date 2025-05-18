'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { FormInput } from '../SignUp/FormInput';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import axios from 'axios';
import { userProps } from '@/lib/utils';

const userEmail = 'test@gmail.com';
const password = 'hello';
export const Register = ({ username }: { username: string }) => {
  const [input, setInput] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [error1, setError1] = useState('');

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
  const createUser = async (user: userProps) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/user`,
        {
          email: user.email,
          password: password,
          name: username,
        }
      );
      return res.data;
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    const value = {
      email: values.email,
      password: values.password,
    };
    createUser(value);
  }
  return (
    <Card className="w-[407px] border-0 shadow-none ">
      <CardHeader>
        <CardTitle className="text-2xl">Welcome, {username}</CardTitle>
        <CardDescription>Connect email and set a password</CardDescription>
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
                    <FormLabel>Email</FormLabel>
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
                    <FormLabel>Password</FormLabel>
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
