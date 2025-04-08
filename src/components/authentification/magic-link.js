"use client";

import { signInResend } from "@/lib/action-user";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

const formSchema = z.object({
  email: z.string().email().min(3, "Invalid email"),
});

function MagicLinkForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  return (
    <Form {...form}>
      <form
        className="space-y-4 w-full text-start"
        onSubmit={form.handleSubmit(signInResend)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your email address"
                  type="email"
                  id="email-resend"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={form.formState.isSubmitting ? true : false}
          variant="default"
          value="Signin with Resend"
          className="w-full"
        >
          {form.formState.isSubmitting ? "Sending..." : "Send email"}
        </Button>
      </form>
    </Form>
  );
}

export default MagicLinkForm;
