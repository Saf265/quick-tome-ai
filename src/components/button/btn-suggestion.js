"use client";

import { sendFeedback } from "@/lib/action-user";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { z } from "zod";
import { Button } from "../../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { Textarea } from "../../components/ui/textarea";

const formSchema = z.object({
  feedback: z.string().min(10, "Feedback must be at least 10 characters"),
});

export default function BtnSuggestion() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      feedback: "",
    },
  });

  async function onSubmit(data) {
    const response = await sendFeedback(data.feedback);
    form.reset();

    if (response) {
      toast.success("Feedback sent");
    } else {
      toast.error("Feedback not sent");
    }
  }
  return (
    <div className="">
      <Dialog>
        <DialogTrigger
          className="fixed -right-8 bottom-20 z-50 -rotate-90"
          asChild
        >
          <Button variant="outline">feedback</Button>
        </DialogTrigger>
        <DialogContent className="max-w-xl">
          <DialogHeader>
            <DialogTitle>Feedback</DialogTitle>
            <DialogDescription>Give us a feedback</DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="feedback"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Feedback</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="The feature is not in the app"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                disabled={form.formState.isSubmitting}
                type="submit"
                variant="default"
                className="w-full"
              >
                {form.formState.isSubmitting ? "Sending..." : "Send"}
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
