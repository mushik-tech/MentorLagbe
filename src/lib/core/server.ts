import { auth } from "@/lib/auth";
import { TRole } from "@/types/users";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

type TMethods = "POST" | "PATCH" | "DELETE";

export const getSession = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return session;
};

export const getToken = async () => {
  const jwtToken = await auth.api.getToken({
    headers: await headers(),
  });

  const token = jwtToken?.token;

  return token;
};

export const authFetch = async (api: string) => {
  const token = await getToken();

  const res = await fetch(api, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  if (res.status === 401 || res.status === 403) {
    redirect("/unauthorized");
  }

  return res;
};

export const protectedMutation = async <T>(
  api: string,
  method: TMethods,
  data?: T,
) => {
  const token = await getToken();

  const res = await fetch(api, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: data ? JSON.stringify(data) : null,
  });

  if (res.status === 401 || res.status === 403) {
    redirect("/unauthorized");
  }

  return res;
};

export const requireRole = async (role: TRole) => {
  const session = await getSession();
  if (!session || session?.user.role !== role) {
    redirect("/unauthorized");
  }
  return session;
};
