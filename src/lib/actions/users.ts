"use server";

import { protectedMutation } from "@/lib/core/server";
import { TRole } from "@/types/users";

export const updateUserRole = async (email: string, role: TRole) => {
  const api = `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/${email}/role`;
  const res = await protectedMutation(api, "PATCH", { role });
  return res.json();
};
