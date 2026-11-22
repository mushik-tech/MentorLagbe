'use server'

import { authFetch } from "@/lib/core/server";
import { IPayment } from "@/types/payments";

export const getTransactions = async (): Promise<IPayment[]> => {
  const api = `${process.env.NEXT_PUBLIC_API_BASE_URL}/payments`;
  const res = await authFetch(api);

  return res.json();
};
