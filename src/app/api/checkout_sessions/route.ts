import { headers } from "next/headers";
import { NextResponse } from "next/server";
import type Stripe from "stripe";
import { getSession } from "@/lib/core/server";
import { getPricingPlan, isBillingRole, type BillingRole } from "@/lib/pricing";
import { stripe } from "@/lib/stripe";
import { redirect } from "next/navigation";

const PRICE_IDS: Record<BillingRole, string | undefined> = {
  student: process.env.STRIPE_STUDENT_PRICE_ID,
  tutor: process.env.STRIPE_TUTOR_PRICE_ID,
};

export async function POST(request: Request) {
  try {
    const session = await getSession();

    if (!session) {
      redirect("/signin");
    }

    const plan = getPricingPlan(session.user.role);

    if (!plan) {
      return NextResponse.json(
        { error: "Your account role is not eligible for a paid plan." },
        { status: 403 },
      );
    }

    const headersList = await headers();
    const origin = headersList.get("origin");

    const priceId = PRICE_IDS[plan.role];

    const checkoutSession = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "payment",
      customer_email: session?.user.email,
      metadata: {
        userRole: plan.role,
        planName: plan.name,
        userName: session?.user.name,
      },
      success_url: `${origin}/payments/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/payments/canceled`,
    });

    if (!checkoutSession.url) {
      throw new Error("Checkout session URL is missing");
    }

    return NextResponse.redirect(checkoutSession.url, 303);
  } catch (err) {
    const error = err instanceof Error ? err : new Error(String(err));

    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
