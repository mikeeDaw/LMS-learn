import Stripe from "stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

import { stripe } from "@/app/_lib/stripe";
import { connectToDb } from "@/app/_lib/mongoose";
import { updateUserTier } from "@/app/_model/userModel";

export async function POST(req: Request) {
  const body = await req.text();
  const signature = headers().get("Stripe-Signature") as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (error: any) {
    return new NextResponse(`Webhook Error: ${error.message}`, { status: 400 });
  }

  const session = event.data.object as Stripe.Checkout.Session;
  const tierName = session?.metadata?.tierName;
  const userId = session?.metadata?.userSub;

  if (event.type === "checkout.session.completed") {
    if (!tierName || !userId) {
      return new NextResponse(`Webhook Error: Missing metadata`, {
        status: 400,
      });
    }

    await connectToDb();

    try {
      await updateUserTier(tierName, userId);
    } catch (error: any) {
      console.log("ERr", error.message);
    }
  } else {
    return new NextResponse(`Webhook Error: Unhandled Event type`, {
      status: 200,
    });
  }
  return new NextResponse(null, { status: 200 });
}
