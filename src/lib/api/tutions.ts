import { ITution } from "@/types/tutions";

export const getTutions = async (): Promise<ITution[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/tutions`);
  return res.json();
};
