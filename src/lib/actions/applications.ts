"use server";

import { protectedMutation } from "@/lib/core/server";
import { IApplicationFormData } from "@/types/applications";

export const postApplication = async (data: IApplicationFormData) => {
  const api = `${process.env.NEXT_PUBLIC_API_BASE_URL}/applications`;
  const res = await protectedMutation(api, "POST", data);
  return res.json();
};

export const updateApplicationStatus = async (id: string, status: string) => {
  const api = `${process.env.NEXT_PUBLIC_API_BASE_URL}/applications/${id}/status`;
  const res = await protectedMutation(api, "PATCH", { status });
  return res.json();
};

export const deleteApplication = async (id: string) => {
  const api = `${process.env.NEXT_PUBLIC_API_BASE_URL}/applications/${id}`;
  const res = await protectedMutation(api, "DELETE");
  return res.json();
};
