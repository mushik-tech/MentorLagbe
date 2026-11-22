"use server";

import { protectedMutation } from "@/lib/core/server";
import { IApplicationFormData } from "@/types/applications";

export const postApplication = async (data: IApplicationFormData) => {
  const api = `${process.env.NEXT_PUBLIC_API_BASE_URL}/applications`;
  const res = await protectedMutation(api, "POST", data);
  return res.json();
};

export const updateApplicationStatus = async (id: string, status: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/applications/${id}/status`,
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

export const deleteApplication = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/applications/${id}`,
    {
      method: "DELETE",
    },
  );
  return res.json();
};
