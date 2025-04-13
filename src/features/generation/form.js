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
import { useLoadingStore } from "@/store/loading-store";
import { useMarkdownStore } from "@/store/markdown-store";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as z from "zod";

const markdownExample =
  "# L'art du marketing digital\n" +
  "\n" +
  "<!-- pagebreak -->\n" +
  "\n" +
  "## Introduction\n" +
  "\n" +
  "Le marketing digital est devenu un pilier incontournable dans le monde actuel des affaires. Avec l'évolution constante des technologies et des comportements des consommateurs, il est essentiel pour toute entreprise de maîtriser les tenants et aboutissants de ce domaine. Cet ebook vise à vous guider à travers les fondamentaux de cette discipline en constante évolution.\n" +
  "\n" +
  "<!-- pagebreak -->\n" +
  "\n" +
  "## Chapitre 1 : Les bases du marketing digital\n" +
  "\n" +
  "Le marketing digital englobe un large éventail de stratégies et d'outils visant à promouvoir des produits ou des services en ligne. Parmi les éléments clés à maîtriser, on retrouve la création de contenu, le référencement naturel (SEO), la publicité en ligne, les réseaux sociaux, l'email marketing, etc. Chaque composante joue un rôle crucial dans la construction d'une présence en ligne efficace.\n" +
  "\n" +
  "### La création de contenu\n" +
  "La création de contenu de qualité est au cœur de toute stratégie de marketing digital. Que ce soit des articles de blog, des vidéos, des infographies ou des podcasts, le contenu doit être pertinent, informatif et engageant pour attirer et fidéliser votre audience.\n" +
  "\n" +
  "### Le référencement naturel (SEO)\n" +
  "Le SEO est un ensemble de techniques visant à améliorer le classement d'un site web dans les résultats des moteurs de recherche. En comprenant les bases du SEO, vous pourrez augmenter la visibilité de votre site et attirer un trafic qualifié.\n" +
  "\n" +
  "### La publicité en ligne\n" +
  "La publicité en ligne offre des possibilités de ciblage précis et de mesure des performances inégalées. Que ce soit à travers Google Ads, Facebook Ads ou d'autres plateformes publicitaires, il est crucial de comprendre comment créer des campagnes efficaces et rentables.\n" +
  "\n" +
  "<!-- pagebreak -->\n" +
  "\n" +
  "## Chapitre 2 : L'analyse des données et l'optimisation des performances\n" +
  "\n" +
  "Le marketing digital repose sur l'analyse des données pour prendre des décisions éclairées et optimiser les performances de vos campagnes. En utilisant des outils d'analyse web et en interprétant les données correctement, vous serez en mesure d'adapter vos stratégies en temps réel pour maximiser les résultats.\n" +
  "\n" +
  "### Outils d'analyse web\n" +
  "Google Analytics, Google Search Console, Facebook Insights, etc. : ces outils vous permettent de suivre et d'analyser le comportement de vos visiteurs, le trafic de votre site, les conversions, etc. Apprenez à les utiliser pour obtenir des insights précieux.\n" +
  "\n" +
  "### A/B testing\n" +
  "L'A/B testing consiste à comparer deux versions d'une même page ou d'une annonce pour déterminer laquelle fonctionne le mieux. En testant différents éléments (titres, images, call-to-action, etc.), vous pourrez améliorer progressivement vos taux de conversion.\n" +
  "\n" +
  "<!-- pagebreak -->\n" +
  "\n" +
  "## Conclusion\n" +
  "\n" +
  "Le marketing digital offre des opportunités infinies pour les entreprises de toutes tailles. En comprenant les bases de cette discipline et en appliquant les bonnes pratiques, vous serez en mesure de développer une présence en ligne solide et de générer des résultats tangibles. Continuez d'apprendre, de tester et d'optimiser vos stratégies pour rester compétitif dans un environnement en constante évolution.";

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
  const { markdown, setMarkdown } = useMarkdownStore();
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
      // logger.debug("Form values:", values);
      // const response = await ky.post("/api/generation", {
      //   json: values,
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   method: "POST",
      // });

      // useMarkdownStore().setMarkdown(markdownExample);
      setMarkdown(markdownExample);
      toast.success("Ebook généré avec succès !");

      // await new Promise((resolve) => setTimeout(resolve, 2000));
      // if (response.ok) {
      //   toast.success("Ebook generated successfully!");
      //   const markdown = await response.json();
      //   useMarkdownStore.setMarkdown(markdown);
      // } else {
      //   const error = await response.json();
      //   toast.error(error.message || "Failed to generate ebook");
      // }
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    } finally {
      setLoading(false);
      // form.reset();
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
