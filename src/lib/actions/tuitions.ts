"use server";

import { protectedMutation } from "@/lib/core/server";
import { TStatus, TuitionFormData } from "@/types/tuitions";

export const postTuition = async (data: TuitionFormData) => {
  const api = `${process.env.NEXT_PUBLIC_API_BASE_URL}/tuitions`;
  const res = await protectedMutation(api, "POST", data);
  return res.json();
};

export const updateTuitionStatus = async (id: string, status: TStatus) => {
  const api = `${process.env.NEXT_PUBLIC_API_BASE_URL}/tuitions/${id}/status`;
  const res = await protectedMutation(api, "PATCH", { status });
  return res.json();
};

export const updateActiveStatus = async (id: string, isActive: boolean) => {
  const api = `${process.env.NEXT_PUBLIC_API_BASE_URL}/tuitions/${id}/active`;
  const res = await protectedMutation(api, "PATCH", { isActive });
  return res.json();
};

export const updateTuition = async (id: string, data: any) => {
  const api = `${process.env.NEXT_PUBLIC_API_BASE_URL}/tuitions/${id}`;
  const res = await protectedMutation(api, "PATCH", data);
  return res.json();
};

export const deleteTuition = async (id: string) => {
  const api = `${process.env.NEXT_PUBLIC_API_BASE_URL}/tuitions/${id}`;
  const res = await protectedMutation(api, "DELETE");
  return res.json();
};
