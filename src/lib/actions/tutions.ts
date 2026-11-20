"use server";

import { TutionFormData } from "@/types/tutions";

export const postTution = async (data: TutionFormData) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/tutions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};
