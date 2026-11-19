"use client";

import Link from "next/link";
import { Avatar, Button, Tooltip } from "@heroui/react";
import {
  ArrowRightFromSquare,
  ArrowUpRight,
  GraduationCap,
  Sparkles,
} from "@gravity-ui/icons";
import Logo from "@/components/shared/Logo/Logo";
import {
  accountNav,
  isNavItemActive,
  roleMeta,
  roleNav,
  type DashboardNavItem,
} from "@/components/Dashboard/dashboard-nav";
import { DashboardRole } from "@/lib/session";
import { getInitials } from "@/utilies/user";

export type DashboardPlan = "pro" | "free";

type DashboardSidebarProps = {
  role: DashboardRole;
  collapsed?: boolean;
  pathname: string;
  plan: DashboardPlan;
  user: {
    name: string;
    email: string;
    image?: string | null;
  };
  onNavigate?: () => void;
  onSignOut: () => void;
};

type SidebarLinkProps = {
  item: DashboardNavItem;
  collapsed: boolean;
  active: boolean;
  onNavigate?: () => void;
};

function SidebarLink({
  item,
  collapsed,
  active,
  onNavigate,
}: SidebarLinkProps) {
  const Icon = item.icon;

  const link = (
    <Link
      href={item.href}
      onClick={onNavigate}
      aria-current={active ? "page" : undefined}
      className={`group flex items-center gap-3 rounded-xl text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f4d21f] ${
        collapsed ? "h-11 justify-center" : "px-3 py-2.5"
      } ${
        active
          ? "bg-[#f4d21f] text-[#04382f] shadow-[0_14px_30px_-22px_rgba(244,210,31,0.9)]"
          : "text-white/65 hover:bg-white/10 hover:text-white"
      }`}
    >
      <Icon aria-hidden="true" className="h-5 w-5 shrink-0" />
      {!collapsed && <span className="truncate">{item.label}</span>}
    </Link>
  );

  if (!collapsed) {
    return link;
  }

  return (
    <Tooltip delay={120}>
      <Tooltip.Trigger className="block">{link}</Tooltip.Trigger>
      <Tooltip.Content placement="right">{item.label}</Tooltip.Content>
    </Tooltip>
  );
}

export default function DashboardSidebar({
  role,
  collapsed = false,
  pathname,
  plan,
  user,
  onNavigate,
  onSignOut,
}: DashboardSidebarProps) {
  const meta = roleMeta[role];
  const initials = getInitials(user.name);
  const planName = plan === "pro" ? "Pro plan" : "Free plan";
  const upgradePrice = role === "tutor" ? "$15" : "$10";

  return (
    <div className="flex h-full min-h-0 flex-col">
      {/* Brand */}
      <div
        className={`flex h-16 shrink-0 items-center border-b border-white/10 ${
          collapsed ? "justify-center px-3" : "px-5"
        }`}
      >
        {collapsed ? (
          <Link
            href="/"
            aria-label="MentorLagbe home"
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#5b21b6] transition hover:-translate-y-0.5"
          >
            <GraduationCap aria-hidden="true" className="h-6 w-6" />
          </Link>
        ) : (
          <div className="inline-flex rounded-xl bg-white px-3 py-1.5 shadow-[0_16px_32px_-24px_rgba(0,0,0,0.9)] transition hover:-translate-y-0.5 [&_img]:h-7 [&_img]:w-auto">
            <Logo />
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav
        aria-label={`${meta.label} dashboard`}
        className="flex-1 overflow-y-auto px-3 py-5"
      >
        {!collapsed && (
          <p className="mb-2 px-3 text-[10px] font-semibold tracking-[0.18em] text-white/40 uppercase">
            {meta.label} workspace
          </p>
        )}

        <ul className="space-y-1">
          {roleNav[role].map((item) => (
            <li key={item.href}>
              <SidebarLink
                item={item}
                collapsed={collapsed}
                active={isNavItemActive(item.href, pathname)}
                onNavigate={onNavigate}
              />
            </li>
          ))}
        </ul>

        <div className="my-4 border-t border-white/10" />

        {!collapsed && (
          <p className="mb-2 px-3 text-[10px] font-semibold tracking-[0.18em] text-white/40 uppercase">
            Account
          </p>
        )}

        <ul className="space-y-1">
          {accountNav.map((item) => (
            <li key={item.href}>
              <SidebarLink
                item={item}
                collapsed={collapsed}
                active={isNavItemActive(item.href, pathname)}
                onNavigate={onNavigate}
              />
            </li>
          ))}
        </ul>
      </nav>

      {/* Plan + profile summary */}
      <div className="shrink-0 space-y-3 border-t border-white/10 p-3">
        {role !== "admin" &&
          (collapsed ? (
            <Tooltip delay={120}>
              <Tooltip.Trigger className="block">
                <Link
                  href="/#pricing"
                  onClick={onNavigate}
                  aria-label={plan === "pro" ? "Pro plan" : "Upgrade to Pro"}
                  className="flex h-11 items-center justify-center rounded-xl bg-amber-300/10 text-[#f4d21f] ring-1 ring-white/10 transition hover:bg-amber-300/20"
                >
                  <Sparkles aria-hidden="true" className="h-5 w-5" />
                </Link>
              </Tooltip.Trigger>
              <Tooltip.Content placement="right">
                {plan === "pro" ? "Pro plan" : "Upgrade to Pro"}
              </Tooltip.Content>
            </Tooltip>
          ) : (
            <div className="rounded-2xl bg-white/5 p-3 ring-1 ring-white/10">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] font-semibold tracking-[0.14em] text-white/40 uppercase">
                  Current plan
                </span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${
                    plan === "pro"
                      ? "bg-[#f4d21f] text-[#04382f]"
                      : "bg-white/10 text-white/70"
                  }`}
                >
                  {planName.replace(" plan", "")}
                </span>
              </div>
              <p className="mt-2 text-sm font-semibold text-white">
                {plan === "pro" ? "MentorLagbe Pro" : "Unlock more with Pro"}
              </p>
              <p className="mt-0.5 text-[11px] leading-relaxed text-white/45">
                {plan === "pro"
                  ? "Unlimited tutor contacts and priority support."
                  : role === "tutor"
                    ? `Priority listing and unlimited batch slots for ${upgradePrice}/month.`
                    : `Unlimited tutor contacts and session notes for ${upgradePrice}/month.`}
              </p>
              {plan === "free" && (
                <Link
                  href="/#pricing"
                  onClick={onNavigate}
                  className="mt-2.5 inline-flex items-center gap-1 text-[11px] font-semibold text-[#f4d21f] transition hover:text-[#ffe45c]"
                >
                  Upgrade plan
                  <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
                </Link>
              )}
            </div>
          ))}

        <div
          className={`flex items-center gap-3 rounded-2xl bg-white/5 p-2 ring-1 ring-white/10 ${
            collapsed ? "flex-col" : ""
          }`}
        >
          <Avatar size="sm" color="accent" className="shrink-0">
            {user.image ? (
              <Avatar.Image alt={user.name} src={user.image} />
            ) : null}
            <Avatar.Fallback>{initials}</Avatar.Fallback>
          </Avatar>

          {!collapsed && (
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-white">
                {user.name}
              </p>
              <p className="truncate text-[11px] text-white/45">{user.email}</p>
            </div>
          )}

          <Button
            isIconOnly
            size="sm"
            variant="ghost"
            aria-label="Sign out"
            onPress={onSignOut}
            className="shrink-0 text-white/55 hover:bg-white/10 hover:text-white"
          >
            <ArrowRightFromSquare aria-hidden="true" className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
