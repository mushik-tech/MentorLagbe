import { ITuition } from "@/types/tuitions";

export const getTuitions = async (): Promise<ITuition[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/tuitions`);
  return res.json();
};
