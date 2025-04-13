"use server";

import { getUser } from "@/lib/action-user";
import { stripe } from "@/lib/stripe";
import { redirect } from "next/navigation";
import { auth } from "./auth";
import { prisma } from "./db";

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

export const createPaymentSession = async (plan, priceId) => {
  const session = await auth();

  const user = await prisma.user.findUnique({
    where: {
      id: session?.user?.id ?? "",
    },
    select: {
      id: true,
      stripeCustomerId: true,
    },
  });

  const stripeCustomerId = user?.stripeCustomerId ?? undefined;

  if (!stripeCustomerId || !user?.id) {
    throw new Error("User not found");
  }

  const checkout = await stripe.checkout.sessions.create({
    customer: stripeCustomerId,
    payment_method_types: ["card", "link"],
    mode: "subscription",
    subscription_data: {
      trial_period_days: 0,
      metadata: {
        userId: user?.id,
        plan,
      },
    },

    line_items: [
      {
        quantity: 1,
        price: priceId,
      },
    ],

    cancel_url: "http://localhost:3000",
    success_url: "http://localhost:3000/success",
  });

  if (!checkout.url) {
    throw new Error("Failed to create checkout session");
  }

  redirect(checkout.url);
};
