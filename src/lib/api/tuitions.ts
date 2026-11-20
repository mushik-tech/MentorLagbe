import { ITuition } from "@/types/tuitions";

export const getTuitions = async (query = ""): Promise<ITuition[]> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/tuitions?${query}`,
  );

  return res.json();
};

export const getTuitionsCount = async (email: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/tuitions/${email}/count`,
  );

  return res.json();
};
