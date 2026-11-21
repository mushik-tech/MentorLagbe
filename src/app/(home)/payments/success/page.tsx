import Link from "next/link";
import { Button, Card } from "@heroui/react";
import { redirect } from "next/navigation";
import { stripe } from "@/lib/stripe";
import { verifyPayment } from "@/lib/actions/payments";
import { getSession } from "@/lib/core/server";

export default async function PaymentSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id: string }>;
}) {
  const { session_id } = await searchParams;

  if (!session_id)
    throw new Error("Please provide a valid session_id (`cs_test_...`)");

  await verifyPayment(session_id);

  const session = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ["line_items", "payment_intent"],
  });

  if (session.status === "open") {
    return redirect("/");
  }

  if (session.status !== "complete" || session.payment_status !== "paid") {
    return redirect("/checkout/canceled");
  }

  const authSession = await getSession();

  if (session.status === "complete") {
    return (
      <div className="mx-auto flex w-full max-w-xl flex-col items-center px-6 py-20 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#e7f4ef] text-[#0b5c4b]">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-8 w-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
          >
            <path
              d="m5 13 4 4L19 7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-[#04382f]">
          Payment successful
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-neutral-600 lg:text-base">
          Thank you for upgrading to Pro. Your account now has access to all the
          benefits of your plan. A receipt has been sent to your email.
        </p>

        <Card className="mt-8 w-full gap-0 rounded-3xl border border-neutral-200 bg-white p-6 shadow-none">
          <p className="text-sm text-neutral-500">What happens next?</p>
          <p className="mt-2 text-sm leading-relaxed text-neutral-700">
            Head to your dashboard to start connecting with mentors or students.
            Your Pro status is active right away.
          </p>
          <Link
            href={`/dashboard/${authSession?.user.role}`}
            className="mt-6 block"
          >
            <Button className="w-full bg-[#04382f] text-white hover:bg-[#075144]">
              Go to dashboard
            </Button>
          </Link>
        </Card>
      </div>
    );
  }
}
