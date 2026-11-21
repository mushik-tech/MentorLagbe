import { IApplication } from "@/types/applications";

export const getApplications = async (query = ""): Promise<IApplication[]> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/applications?${query}`,
  );

  return res.json();
};

export const getApplicationsCount = async (
  email: string,
): Promise<{ count: number }> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/applications/${email}/count`,
  );

  return res.json();
};
