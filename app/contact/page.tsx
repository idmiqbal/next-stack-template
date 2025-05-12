"use client";

import { Metadata } from "next";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Mail, Phone, MapPin, Check } from "lucide-react";

// This would normally be in the layout.tsx file, but we're using "use client" here
// so we'll create a local variable instead of exporting metadata
const pageMetadata = {
  title: "Contact | Next Stack Template",
  description: "Get in touch with our team",
};

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
  reason: z.enum(["general", "support", "feedback", "other"], {
    required_error: "Please select a reason for contacting us.",
  }),
});

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      reason: "general",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  }

  return (
    <div className="space-y-12 py-12">
      <section>
        <h1 className="text-4xl font-bold tracking-tighter">Contact Us</h1>
        <p className="mt-4 text-xl text-muted-foreground">
          Get in touch with our team
        </p>
      </section>

      <div className="grid gap-10 md:grid-cols-2">
        <section>
          {isSubmitted ? (
            <div className="flex h-full flex-col items-center justify-center rounded-lg border bg-card p-8 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Check className="h-10 w-10" />
              </div>
              <h2 className="mt-6 text-2xl font-bold">Thank You!</h2>
              <p className="mt-2 text-muted-foreground">
                Your message has been received. We will get back to you soon.
              </p>
              <Button 
                className="mt-6" 
                onClick={() => {
                  setIsSubmitted(false);
                  form.reset();
                }}
              >
                Send Another Message
              </Button>
            </div>
          ) : (
            <div className="rounded-lg border bg-card p-6">
              <h2 className="text-2xl font-bold">Send Us a Message</h2>
              <p className="mt-2 text-muted-foreground">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
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
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Your email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="reason"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Reason for Contact</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="grid grid-cols-2 gap-4"
                          >
                            <FormItem className="flex items-center space-x-2 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="general" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                General Inquiry
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-2 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="support" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Technical Support
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-2 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="feedback" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Feedback
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-2 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="other" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Other
                              </FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="Message subject" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Your message"
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          )}
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Contact Information</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="mt-1 text-muted-foreground">info@nextstacktemplate.com</p>
                <p className="mt-1 text-muted-foreground">support@nextstacktemplate.com</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="mt-1 text-muted-foreground">+1 (123) 456-7890</p>
                <p className="mt-1 text-muted-foreground">+1 (987) 654-3210</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium">Address</h3>
                <p className="mt-1 text-muted-foreground">
                  123 Template Street, Suite 456
                </p>
                <p className="mt-1 text-muted-foreground">
                  San Francisco, CA 94103
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-lg border p-6">
            <h3 className="font-medium">Business Hours</h3>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Monday - Friday</span>
                <span>9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Saturday</span>
                <span>10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}