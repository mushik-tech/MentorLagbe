import {
  Books,
  Calendar,
  CreditCard,
  Gear,
  House,
  Layers,
  ListCheck,
  Persons,
} from "@gravity-ui/icons";
import type { ComponentType, SVGProps } from "react";
import type { DashboardRole } from "@/lib/session";

export type DashboardNavItem = {
  label: string;
  href: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export const roleMeta: Record<DashboardRole, { label: string; blurb: string }> =
  {
    student: {
      label: "Student",
      blurb: "Find tutors, book sessions, and keep your learning on track.",
    },
    tutor: {
      label: "Tutor",
      blurb: "Manage your batches, requests, and earnings in one place.",
    },
    admin: {
      label: "Admin",
      blurb: "Keep the marketplace verified, healthy, and running smoothly.",
    },
  };

export const roleNav: Record<DashboardRole, DashboardNavItem[]> = {
  student: [
    {
      label: "Overview",
      href: "/dashboard/student",
      description: "Your sessions, tutors, and learning activity at a glance.",
      icon: House,
    },
    {
      label: "My Applications",
      href: "/my-applications",
      description:
        "Review upcoming sessions and revisit your past applications.",
      icon: Calendar,
    },
  ],
  tutor: [
    {
      label: "Overview",
      href: "/dashboard/tutor",
      description: "Your batches, requests, and earnings at a glance.",
      icon: House,
    },
    {
      label: "Post a Tuition",
      href: " /dashboard/tutor/post-tuition",
      description: "Create and manage the batches you are currently teaching.",
      icon: Layers,
    },
    {
      label: "Manage Applicants",
      href: "/dashboard/tutor/applicants",
      description: "Review new requests and confirm the students you accept.",
      icon: ListCheck,
    },
    {
      label: "My Created Tuitions",
      href: "/dashboard/tutor/my-tuitions",
      description: "Keep track of everyone enrolled in your batches.",
      icon: Persons,
    },
  ],
  admin: [
    {
      label: "Overview",
      href: "/dashboard/admin",
      description:
        "Marketplace health, activity, and items that need attention.",
      icon: House,
    },
    {
      label: "User Management",
      href: "/dashboard/admin/users",
      description: "Browse students, tutors, and their account status.",
      icon: Persons,
    },
    {
      label: "Manage Tuitions",
      href: "/dashboard/admin/tuitions",
      description:
        "Moderate tuition listings, batches, and subject categories.",
      icon: Books,
    },
    {
      label: "Transaction Management",
      href: "/dashboard/admin/transactions",
      description: "Track subscriptions, payouts, and failed transactions.",
      icon: CreditCard,
    },
  ],
};

export const accountNav: DashboardNavItem[] = [
  {
    label: "Settings",
    href: "/dashboard/settings",
    description: "Update your profile, password, and notification preferences.",
    icon: Gear,
  },
];

export function isNavItemActive(href: string, pathname: string): boolean {
  if (pathname === href) {
    return true;
  }

  const depth = href.split("/").filter(Boolean).length;

  return depth > 2 && pathname.startsWith(`${href}/`);
}

export function getNavItem(
  role: DashboardRole,
  pathname: string,
): DashboardNavItem {
  const items = [...roleNav[role], ...accountNav];

  return (
    items.find((item) => isNavItemActive(item.href, pathname)) ??
    roleNav[role][0]
  );
}
