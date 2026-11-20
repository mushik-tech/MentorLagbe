"use server";

import { TStatus, TuitionFormData } from "@/types/tuitions";

export const postTuition = async (data: TuitionFormData) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/tuitions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const updateTuitionStatus = async (id: string, status: TStatus) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/tuitions/${id}/status`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status }),
    },
  );
  return res.json();
};
