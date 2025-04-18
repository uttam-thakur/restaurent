'use client';

import React from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

// Define the form schema with Zod
const formSchema = z.object({
  eventName: z.string().min(1, { message: "Event name is required" }),
  persons: z.string().min(1, { message: "Number of persons is required" }),
  date: z.string().min(1, { message: "Date is required" }),
  time: z.string().min(1, { message: "Time is required" }),
  name: z.string().min(1, { message: "Your name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  note: z.string().optional(),
});

export default function ReservationsPage() {
  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      eventName: "",
      persons: "",
      date: "",
      time: "",
      name: "",
      email: "",
      note: "",
    },
  });

  // Form submission handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, this would send the data to a server
    console.log(values);
    alert('Reservation request submitted successfully!');
    form.reset();
  }

  return (
    <div className="flex flex-col">
      {/* Hero Banner */}
      <div className="relative h-[60vh]">
        <Image
          src="/images/food3.jpg"
          alt="Reservations"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="elegant-heading text-white text-5xl">Reservations</h1>
        </div>
      </div>

      {/* Reservation Form Section */}
      <section className="py-16 bg-[#fbf5f5]">
        <div className="container max-w-4xl">
          <h2 className="elegant-heading text-4xl mb-12 text-center">Reservations</h2>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FormField
                  control={form.control}
                  name="eventName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Event Name"
                          className="h-14 bg-transparent border-gray-300 focus:border-black rounded-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="persons"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Number of Persons"
                          className="h-14 bg-transparent border-gray-300 focus:border-black rounded-none"
                          type="number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Date"
                          className="h-14 bg-transparent border-gray-300 focus:border-black rounded-none"
                          type="date"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="time"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Time"
                          className="h-14 bg-transparent border-gray-300 focus:border-black rounded-none"
                          type="time"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Your Name"
                          className="h-14 bg-transparent border-gray-300 focus:border-black rounded-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Your Email"
                          className="h-14 bg-transparent border-gray-300 focus:border-black rounded-none"
                          type="email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="note"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="Note"
                        className="h-40 bg-transparent border-gray-300 focus:border-black rounded-none resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="text-center">
                <Button
                  type="submit"
                  className="bg-black hover:bg-black/80 text-white px-12 py-6 uppercase text-sm tracking-wider h-auto"
                >
                  Book Now
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-black grid grid-cols-2 md:grid-cols-5">
        <Image src="/images/gallery1.jpg" alt="Gallery" width={300} height={300} className="w-full h-60 object-cover" />
        <Image src="/images/gallery2.jpg" alt="Gallery" width={300} height={300} className="w-full h-60 object-cover" />
        <Image src="/images/gallery3.jpg" alt="Gallery" width={300} height={300} className="w-full h-60 object-cover" />
        <Image src="/images/gallery4.jpg" alt="Gallery" width={300} height={300} className="w-full h-60 object-cover" />
        <Image src="/images/gallery5.jpg" alt="Gallery" width={300} height={300} className="w-full h-60 object-cover" />
      </section>
    </div>
  );
}
