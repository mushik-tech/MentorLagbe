import { cache } from "react";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
export type DashboardRole = "student" | "tutor" | "admin";

export const dashboardRoles: DashboardRole[] = ["student", "tutor", "admin"];

export const getSession = cache(async () => {
  return auth.api.getSession({ headers: await headers() });
});

export async function requireSession() {
  const session = await getSession();

  if (!session) {
    redirect("/signin");
  }

  return session;
}
