"use server";

import { TRole } from "@/types/users";

export const updateUserProfile = async (id: string, data: any) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    },
  );
  return res.json();
};

export const updateUserRole = async (email: string, role: TRole) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/${email}/role`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ role }),
    },
  );
  return res.json();
};
