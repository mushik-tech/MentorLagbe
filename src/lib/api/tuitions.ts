import { ITuition } from "@/types/tuitions";

export const getTuitions = async (query = ""): Promise<ITuition[]> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/tuitions?${query}`,
  );

  return res.json();
};

export const getPublicTuitions = async (query = ""): Promise<ITuition[]> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/tuitions?${query}`,
  );

  return res.json();
};

export const getFeaturedTuitions = async (): Promise<ITuition[]> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/featured-tuitions`,
  );
  return res.json();
};

export const getTuitionsCount = async (
  email: string,
): Promise<{ count: number }> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/tuitions/${email}/count`,
  );

  return res.json();
};

export const getSingleTuition = async (id: string): Promise<ITuition> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/tuitions/${id}`,
  );

  return res.json();
};
