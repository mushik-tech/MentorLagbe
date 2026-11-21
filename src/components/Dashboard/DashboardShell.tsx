"use client";

import { useState, type ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  Avatar,
  Button,
  Chip,
  Drawer,
  Dropdown,
  Tooltip,
  useOverlayState,
} from "@heroui/react";
import {
  ArrowRightFromSquare,
  ArrowUpRight,
  Bars,
  ChevronDown,
  Gear,
  House,
  LayoutSideContentLeft,
} from "@gravity-ui/icons";
import DashboardSidebar from "@/components/Dashboard/DashboardSidebar";
import { getNavItem, roleMeta } from "@/components/Dashboard/dashboard-nav";
import { signOut } from "@/lib/auth-client";
import { getInitials } from "@/utilies/user";
import { TRole, TSubscriptionPlan } from "@/types/users";

export type DashboardUser = {
  name: string;
  email: string;
  image?: string | null;
  plan: TSubscriptionPlan;
};

type DashboardShellProps = {
  role: TRole;
  user: DashboardUser;
  children: ReactNode;
};

export default function DashboardShell({
  role,
  user,
  children,
}: DashboardShellProps) {
  const pathname = usePathname();
  const router = useRouter();
  const drawer = useOverlayState();
  const [collapsed, setCollapsed] = useState(false);

  const meta = roleMeta[role];
  const currentPage = getNavItem(role, pathname);
  const initials = getInitials(user.name);

  const handleSignOut = async () => {
    try {
      await signOut();
    } finally {
      router.push("/signin");
      router.refresh();
    }
  };

  const handleAccountAction = (key: string | number) => {
    switch (String(key)) {
      case "overview":
        router.push(`/dashboard/${role}`);
        break;
      case "update-profile":
        router.push("/dashboard/update-profile");
        break;
      case "site":
        router.push("/");
        break;
      case "signout":
        void handleSignOut();
        break;
    }
  };

  return (
    <div className="flex min-h-screen bg-[#f6f8f6]">
      {/* Desktop sidebar */}
      <aside
        className={`sticky top-0 hidden h-screen shrink-0 self-start bg-[#04382f] text-white transition-[width] duration-300 ease-out lg:flex lg:flex-col ${
          collapsed ? "w-22" : "w-72"
        }`}
      >
        <DashboardSidebar
          role={role}
          collapsed={collapsed}
          pathname={pathname}
          plan={user.plan}
          user={user}
          onSignOut={() => void handleSignOut()}
        />
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        {/* Top bar */}
        <header className="sticky top-0 z-30 border-b border-black/5 bg-white/85 backdrop-blur-md">
          <div className="flex h-16 items-center gap-2 px-4 sm:gap-3 sm:px-6 lg:px-8">
            <Drawer state={drawer}>
              <Drawer.Trigger
                aria-label="Open navigation"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-neutral-600 transition hover:bg-neutral-100 hover:text-[#04382f] lg:hidden"
              >
                <Bars aria-hidden="true" className="h-5 w-5" />
              </Drawer.Trigger>

              <Drawer.Backdrop variant="blur">
                <Drawer.Content placement="left">
                  <Drawer.Dialog
                    aria-label="Dashboard navigation"
                    className="w-72 max-w-[85vw] bg-[#04382f] p-0 text-white"
                  >
                    <Drawer.CloseTrigger className="bg-transparent text-white/70 hover:bg-white/10 hover:text-white" />
                    <DashboardSidebar
                      role={role}
                      pathname={pathname}
                      plan={user.plan}
                      user={user}
                      onNavigate={drawer.close}
                      onSignOut={() => {
                        drawer.close();
                        void handleSignOut();
                      }}
                    />
                  </Drawer.Dialog>
                </Drawer.Content>
              </Drawer.Backdrop>
            </Drawer>

            <Tooltip delay={150}>
              <Tooltip.Trigger className="hidden lg:block">
                <Button
                  isIconOnly
                  size="sm"
                  variant="ghost"
                  aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
                  aria-pressed={collapsed}
                  onPress={() => setCollapsed((value) => !value)}
                  className="text-neutral-500 hover:text-[#04382f]"
                >
                  <LayoutSideContentLeft
                    aria-hidden="true"
                    className="h-5 w-5"
                  />
                </Button>
              </Tooltip.Trigger>
              <Tooltip.Content placement="bottom">
                {collapsed ? "Expand sidebar" : "Collapse sidebar"}
              </Tooltip.Content>
            </Tooltip>

            <div className="min-w-0">
              <p className="text-[10px] font-semibold tracking-[0.16em] text-neutral-400 uppercase">
                Dashboard
              </p>
              <p className="truncate text-sm font-semibold text-[#04382f]">
                {currentPage.label}
              </p>
            </div>

            <div className="ml-auto flex items-center gap-2 sm:gap-3">
              <Chip
                size="lg"
                variant="soft"
                color={user.plan === "pro" ? "success" : "default"}
                className="hidden sm:inline-flex"
              >
                {user.plan === "pro" ? "Pro plan" : "Free plan"}
              </Chip>

              <Dropdown>
                <Dropdown.Trigger className="flex items-center gap-2 rounded-full p-1 transition hover:bg-neutral-100 data-focus-visible:outline-2 data-focus-visible:outline-offset-2 data-focus-visible:outline-[#075144]">
                  <Avatar size="sm" color="accent">

                      <Avatar.Image alt={user.name} src={user.image || "https://github.com/shadcn.png"} />
                    
                    <Avatar.Fallback>{initials}</Avatar.Fallback>
                  </Avatar>
                  <span className="hidden text-left md:block">
                    <span className="block max-w-40 truncate text-sm font-semibold text-[#04382f]">
                      {user.name}
                    </span>
                    <span className="block text-[11px] text-neutral-500">
                      {meta.label}
                    </span>
                  </span>
                  <ChevronDown
                    aria-hidden="true"
                    className="hidden h-4 w-4 text-neutral-400 md:block"
                  />
                </Dropdown.Trigger>

                <Dropdown.Popover placement="bottom end" className="w-60">
                  <Dropdown.Menu
                    aria-label="Account menu"
                    onAction={handleAccountAction}
                  >
                    <Dropdown.Item id="overview" textValue="Dashboard overview">
                      <House
                        aria-hidden="true"
                        className="h-4 w-4 text-neutral-500"
                      />
                      Dashboard overview
                    </Dropdown.Item>
                    <Dropdown.Item
                      id="update-profile"
                      textValue="update-profile"
                    >
                      <Gear
                        aria-hidden="true"
                        className="h-4 w-4 text-neutral-500"
                      />
                      Update Profile
                    </Dropdown.Item>
                    <Dropdown.Item id="site" textValue="Homepage">
                      <ArrowUpRight
                        aria-hidden="true"
                        className="h-4 w-4 text-neutral-500"
                      />
                      Homepage
                    </Dropdown.Item>
                    <Dropdown.Item
                      id="signout"
                      textValue="Sign out"
                      variant="danger"
                    >
                      <ArrowRightFromSquare
                        aria-hidden="true"
                        className="h-4 w-4"
                      />
                      Sign out
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown.Popover>
              </Dropdown>
            </div>
          </div>
        </header>

        <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          <div className="mx-auto w-full max-w-375">{children}</div>
        </main>
      </div>
    </div>
  );
}
