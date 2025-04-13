"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { plansItems } from "@/utils/plan";
import { Check } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Pricing() {
  const { data: session } = useSession();
  const [isYearly, setIsYearly] = useState(false);

  const monthlyPlans = [plansItems[0], plansItems[2]];
  const yearlyPlans = [plansItems[1], plansItems[3]];

  const plans = isYearly ? yearlyPlans : monthlyPlans;

  return (
    <div id="tarifs" className="container py-12 max-w-5xl mx-auto px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-4 sm:text-4xl">Tarifs</h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Choisissez le forfait qui convient le mieux à vos besoins.
        </p>
      </div>

      <div className="flex justify-center items-center gap-4 mb-10">
        <span
          className={`text-sm ${
            !isYearly ? "font-medium" : "text-muted-foreground"
          }`}
        >
          Mensuel
        </span>
        <Switch
          checked={isYearly}
          onCheckedChange={() => setIsYearly(!isYearly)}
          className="data-[state=checked]:bg-primary"
        />
        <div className="flex items-center gap-2">
          <span
            className={`text-sm ${
              isYearly ? "font-medium" : "text-muted-foreground"
            }`}
          >
            Annuel
          </span>
          <Badge
            variant="outline"
            className="bg-green-50 text-green-700 border-green-200 hover:bg-green-50"
          >
            Économisez 16%
          </Badge>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {plans.map((plan, index) => (
          <Card
            key={index}
            className={`${
              plan.highlighted ? "border-primary shadow-md" : ""
            } relative flex flex-col h-full`}
          >
            {plan.highlighted && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge
                  variant="default"
                  className="bg-primary hover:bg-primary px-3 py-1"
                >
                  Populaire
                </Badge>
              </div>
            )}
            <CardHeader>
              <CardTitle className="text-xl">{plan.name}</CardTitle>
              <div className="mt-2 flex items-baseline">
                <span className="text-3xl font-bold">{plan.price}€</span>
                <span className="text-muted-foreground ml-1">
                  {plan.duration}
                </span>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              {session?.user?.email && session?.user?.id ? (
                <Button
                  className="w-full"
                  variant={plan.highlighted ? "default" : "outline"}
                  asChild
                >
                  <Link
                    target="_blank"
                    href={
                      plan.link + "?prefilled_email=" + session?.user?.email
                    }
                  >
                    S'abonner
                  </Link>
                </Button>
              ) : (
                <Button
                  className="w-full"
                  variant={plan.highlighted ? "default" : "outline"}
                  onClick={() =>
                    toast.error("Veuillez vous connecter pour vous abonner.")
                  }
                >
                  S'abonner
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
