"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { logger } from "@/lib/logger";
import { useLoadingStore } from "@/store/loading-store";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as z from "zod";

const formSchema = z.object({
  titre: z
    .string()
    .min(1, "Le titre est requis")
    .max(50, "Le titre ne doit pas dépasser 50 caractères"),
  description: z
    .string()
    .min(15, "La description doit comporter au moins 15 caractères"),
  theme: z.string().min(1, "Le thème est requis"),
  longueur: z.enum(["court", "medium", "long"]).default("medium"),
  cible: z
    .string()
    .min(1, "Le public cible est requis")
    .max(50, "Le public cible ne doit pas dépasser 50 caractères"),
});

const errorMessageClass = "min-h-[20px] text-sm text-red-500";

export default function GenerationForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      titre: "",
      description: "",
      theme: "",
      longueur: "medium",
      cible: "",
    },
  });
  const { setLoading, loading } = useLoadingStore();

  async function onSubmit(values) {
    try {
      setLoading(true);
      logger.debug("Form values:", values);
      // const response = await ky.post("/api/generation", {
      //   json: values,
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   method: "POST",
      // });

      await new Promise((resolve) => setTimeout(resolve, 2000));
      // if (response.ok) {
      //   toast.success("Ebook generated successfully!");
      // } else {
      //   const error = await response.json();
      //   toast.error(error.message || "Failed to generate ebook");
      // }
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    } finally {
      setLoading(false);
      form.reset();
    }
  }

  return (
    <div className="relative">
      {loading ? (
        <div className="absolute inset-0 bg-gray-100 opacity-50 z-10">
          <div className="flex flex-col gap-4 size-full items-center justify-center">
            <Loader2 className="animate-spin h-10 w-10 text-gray-500 " />
            <div className=" text-gray-500">
              <p>Chargement...</p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <Card>
        <CardHeader>
          <CardTitle className="lg:text-2xl text-xl">
            Générer un ebook
          </CardTitle>
          <CardDescription>
            Remplissez le formulaire ci-dessous pour générer votre ebook.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-5 max-w-3xl mx-auto py-4 relative"
            >
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-4 ">
                  <FormField
                    control={form.control}
                    name="titre"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Titre de l'ebook</FormLabel>
                        <FormControl>
                          <Input placeholder="" type="" {...field} />
                        </FormControl>
                        <div className={errorMessageClass}>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Description détaillée du contenu souhaité
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder=""
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>

                    <div className={errorMessageClass}>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-6">
                  <FormField
                    control={form.control}
                    name="theme"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Catégorie/thème</FormLabel>
                        <FormControl>
                          <Input placeholder="" type="" {...field} />
                        </FormControl>

                        <div className={errorMessageClass}>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                </div>

                <div className="col-span-6">
                  <FormField
                    control={form.control}
                    name="longueur"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Longueur approximative</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue="medium"
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Choisi une longueur" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Choisi une longueur</SelectLabel>
                              <SelectItem value="court">Court</SelectItem>
                              <SelectItem value="medium">Medium</SelectItem>
                              <SelectItem value="long">Long</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>

                        <div className={errorMessageClass}>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <FormField
                control={form.control}
                name="cible"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Public cible</FormLabel>
                    <FormControl>
                      <Input placeholder="" type="" {...field} />
                    </FormControl>

                    <div className={errorMessageClass}>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
