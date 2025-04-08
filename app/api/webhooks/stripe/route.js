import Stripe from "stripe";

export async function POST(req) {
  const body = await req.text();
  const signature = req.headers.get("Stripe-Signature");

  let event;

  try {
    event = Stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (error) {
    return new NextResponse(`Webhook Error: ${error}`, { status: 400 });
  }

  const session = event.data.object;
  const userId = session?.metadata?.userId;

  if (event.type === "checkout.session.completed") {
    if (!userId) {
      return new NextResponse("Webhook Error: Missing metadata", {
        status: 400,
      });
    }

    //! edit this
  } else {
    console.log(`Unhandled event type ${event.type}`);
    return new NextResponse(
      `Webhook Error: Unsupported event type ${event.type}`,
      { status: 200 }
    );
  }

  return new NextResponse(null, { status: 200 });
}
