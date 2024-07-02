import Stripe from "stripe";
import { NextResponse } from "next/server";
import { stripe } from "@/app/_lib/stripe";
import { connectToDb } from "@/app/_lib/mongoose";
import { findUserbyEmail } from "@/app/_model/userModel";
import { findTierByLbl } from "@/app/_model/tierModel";
import {
  createStripeCustomer,
  findStripeCustomer,
} from "@/app/_model/stripeCustomer";

export async function POST(req: Request, res: Response) {
  const { user_email, tier } = await req.json();
  console.log("BOD:", user_email, tier);

  try {
    await connectToDb();

    const user = await findUserbyEmail(user_email);

    if (user.tier === tier) {
      return new NextResponse("You are currently on this Plan.", {
        status: 400,
      });
    }

    const subscrip = await findTierByLbl(tier);

    const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [
      {
        quantity: 1,
        price_data: {
          currency: "USD",
          product_data: {
            name: subscrip.tierLabel,
            description: `Get the ${subscrip.tierLabel} Tier on LearnFLIX now!`,
          },
          unit_amount: Math.round(subscrip.price! * 100),
        },
      },
    ];

    let stripeCus = await findStripeCustomer(user._id);

    if (!stripeCus) {
      const buyer = await stripe.customers.create({
        email: user.email,
        name: user.name,
      });

      stripeCus = await createStripeCustomer(user._id, buyer.id);
    }

    const sesh = await stripe.checkout.sessions.create({
      customer: stripeCus.customerId,
      line_items,
      mode: "payment",
      success_url: `${process.env.NEXTAUTH_URL}/upgrade?success=1`,
      cancel_url: `${process.env.NEXTAUTH_URL}/upgrade?cancelled=1`,
      metadata: {
        tierName: subscrip.tierLabel,
        userSub: user.id,
      },
    });

    if (!sesh.url) {
      return new NextResponse("No Stripe Session URL :(", { status: 500 });
    }

    return NextResponse.json({ url: sesh.url });
  } catch (error) {
    console.log("[COURSE_ID_CHECKOUT]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
