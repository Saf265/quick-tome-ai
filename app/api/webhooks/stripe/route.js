import { prisma } from "@/lib/db";
import { logger } from "@/lib/logger";
import { stripe } from "@/lib/stripe";
import { plansItems } from "@/utils/plan";
import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req) {
  const body = await req.text();
  const signature = req.headers.get("Stripe-Signature");

  let event;
  let data;

  try {
    event = Stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (error) {
    return new NextResponse(`Webhook Error: ${error}`, { status: 400 });
  }

  data = event.data;
  logger.info("Started processing Stripe webhook event");

  switch (event.type) {
    case "checkout.session.completed":
      const session = await stripe.checkout.sessions.retrieve(data.object.id, {
        expand: ["line_items"],
      });
      logger.info("session", session ? "session exist" : "session not exist");
      const customerId = session.customer;
      logger.info("customerId", customerId);
      const customer = await stripe.customers.retrieve(customerId);

      const priceId = session.line_items.data[0].price.id;
      logger.info("priceId", priceId);
      logger.debug("plansItems", JSON.stringify(plansItems));
      const plan = plansItems.find((plan) => plan.priceId === priceId);
      logger.info("plan", plan ? "plan exist" : "plan not exist");

      if (!plan) break;

      await prisma.user.update({
        where: {
          email: customer.email,
        },
        data: {
          role: plan.role.toUpperCase(),
          hasAccess: true,
        },
        select: null,
      });

      break;
    case "customer.subscription.deleted":
      const subscription = await stripe.subscriptions.retrieve(data.object.id);

      await prisma.user.update({
        where: {
          stripeCustomerId: subscription.customer,
        },
        data: {
          role: "USER",
          hasAccess: false,
        },
        select: null,
      });

      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  return new NextResponse(null, { status: 200 });
}
