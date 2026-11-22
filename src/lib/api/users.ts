import { authFetch } from "@/lib/core/server";
import { IUser } from "@/types/users";

export const getUsers = async (): Promise<IUser[]> => {
  const api = `${process.env.NEXT_PUBLIC_API_BASE_URL}/users`;

  const res = await authFetch(api);

  return res.json();
};
