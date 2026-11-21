export type TPaymentRole = "student" | "tutor";

export interface IPayment {
  _id: string;
  userEmail: string;
  userName: string;
  userRole: TPaymentRole;
  planName: string;
  /** Amount in the major currency unit (Stripe's `amount_total / 100`). */
  amount: number;
  currency: string;
  transactionId: string;
  stripeSessionId: string;
  paymentStatus: string;
  paidAt: string;
}
