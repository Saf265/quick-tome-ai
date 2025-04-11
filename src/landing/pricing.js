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
import { Check } from "lucide-react";

export default function Pricing() {
  // Simple array of pricing plans
  const plans = [
    {
      name: "Basic",
      price: 9,
      features: [
        "1 user",
        "10 projects",
        "5GB storage",
        "Basic support",
        "48-hour response time",
      ],
      buttonText: "Get Started",
    },
    {
      name: "Pro",
      price: 29,
      features: [
        "5 users",
        "Unlimited projects",
        "50GB storage",
        "Priority support",
        "24-hour response time",
        "Advanced analytics",
        "Custom domain",
      ],
      buttonText: "Upgrade to Pro",
      highlighted: true,
      popular: true,
    },
  ];

  return (
    <div id="tarifs" className="container py-12 max-w-5xl mx-auto px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-4 sm:text-4xl">Tarifs</h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Choose the plan that works best for you and your team.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {plans.map((plan, index) => (
          <Card
            key={index}
            className={`${
              plan.highlighted ? "border-primary shadow-md" : ""
            } relative`}
          >
            {plan.popular && (
              <div className="absolute -top-3 right-4">
                <Badge
                  variant="default"
                  className="bg-primary hover:bg-primary px-3 py-1"
                >
                  Popular
                </Badge>
              </div>
            )}
            <CardHeader>
              <CardTitle className="text-xl">{plan.name}</CardTitle>
              <div className="mt-2">
                <span className="text-3xl font-bold">${plan.price}</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent className="h-full">
              <ul className="space-y-2 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                variant={plan.highlighted ? "default" : "outline"}
              >
                {plan.buttonText}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
