import { requireRole } from "@/lib/core/server";
import React from "react";

const TutorDashboardLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  await requireRole("tutor");
  return children;
};

export default TutorDashboardLayout;
