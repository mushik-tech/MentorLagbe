import type { ReactNode } from "react";

/** Responsive grid shared by every role's dashboard home. */
export default function StatsGrid({ children }: { children: ReactNode }) {
  return <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{children}</div>;
}
