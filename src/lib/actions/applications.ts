"use server";

import { IApplicationFormData } from "@/types/applications";
import { TStatus, TuitionFormData } from "@/types/tuitions";

export const postApplication = async (data: IApplicationFormData) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/applications`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};
