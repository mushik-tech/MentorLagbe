import { IPayment } from "@/types/payments";

export const getTransactions = async (): Promise<IPayment[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/payments`);

  return res.json();
};
