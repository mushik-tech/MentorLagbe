"use server";

import { protectedMutation } from "@/lib/core/server";
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
  const api = `${process.env.NEXT_PUBLIC_API_BASE_URL}/tuitions/${id}/status`;
  const res = await protectedMutation(api, "PATCH", { status });
  return res.json();
};

export const updateActiveStatus = async (id: string, isActive: boolean) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/tuitions/${id}/active`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isActive }),
    },
  );
  return res.json();
};

export const deleteTuition = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/tuitions/${id}`,
    {
      method: "DELETE",
    },
  );
  return res.json();
};
