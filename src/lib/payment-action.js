"use server";

import { getUser } from "@/lib/action-user";
import { stripe } from "@/lib/stripe";
import { redirect } from "next/navigation";
import { auth } from "./auth";

export const handleUserPayment = async () => {
  const session = await auth();
  const user = await getUser(session?.user?.id);

  const stripeCustomerId = user?.stripeCustomerId ?? undefined;

  if (!stripeCustomerId) {
    throw new Error("Stripe customer ID is missing");
  }

  const stripeSession = await stripe.billingPortal.sessions.create({
    customer: user?.stripeCustomerId ?? "",
    return_url: "http://localhost:3000/", // ! edit this
  });

  if (!stripeSession.url) {
    throw new Error("Failed to create checkout session");
  }

  redirect(stripeSession.url);
};
