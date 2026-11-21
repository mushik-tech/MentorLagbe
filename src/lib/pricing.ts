/**
 * Shared plan configuration for the payment flow.
 *
 * Prices live in one place so the checkout page and the checkout API always
 * agree. The amounts are stored in cents to avoid floating point rounding.
 */

export type BillingRole = "student" | "tutor";

export interface PricingPlan {
  role: BillingRole;
  name: string;
  description: string;
  /** Amount in the smallest currency unit (cents for USD). */
  amount: number;
  currency: string;
  features: string[];
}

export const PRICING_PLANS: Record<BillingRole, PricingPlan> = {
  student: {
    role: "student",
    name: "MentorLagbe Pro — Student",
    description:
      "Unlimited mentorship requests, priority search placement and direct messaging.",
    amount: 1000,
    currency: "usd",
    features: [
      "Unlimited mentorship requests",
      "Priority placement in search results",
      "Direct messaging with mentors",
      "Session notes and shared resources",
      "Priority support, 7 days a week",
    ],
  },
  tutor: {
    role: "tutor",
    name: "MentorLagbe Pro — Tutor",
    description:
      "Everything a student gets, plus the visibility tutors need to grow.",
    amount: 1500,
    currency: "usd",
    features: [
      "Unlimited mentorship requests",
      "Priority placement in search results",
      "Direct messaging with students",
      "Session notes and shared resources",
      "Priority support, 7 days a week",
    ],
  },
};

export function isBillingRole(value: unknown): value is BillingRole {
  return value === "student" || value === "tutor";
}

/** Resolve a plan from a user role. Returns null for roles that don't pay. */
export function getPricingPlan(role: unknown): PricingPlan | null {
  return isBillingRole(role) ? PRICING_PLANS[role] : null;
}

export function formatPrice(amount: number, currency = "usd"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency.toUpperCase(),
  }).format(amount / 100);
}
