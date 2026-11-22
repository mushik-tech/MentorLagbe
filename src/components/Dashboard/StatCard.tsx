import Link from "next/link";
import { ArrowRight } from "@gravity-ui/icons";
import type { ComponentType, SVGProps } from "react";
import {
  statTones,
  type TStatTone,
} from "@/components/Dashboard/stat-tones";

type StatCardProps = {
  label: string;
  value: string | number;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  tone?: TStatTone;
  hint?: string;
  badge?: string;
  progress?: { value: number; total: number; caption?: string };
  href?: string;
  hrefLabel?: string;
};

export default function StatCard({
  label,
  value,
  icon: Icon,
  tone = "emerald",
  hint,
  badge,
  progress,
  href,
  hrefLabel = "View details",
}: StatCardProps) {
  const colors = statTones[tone];
  const percentage =
    progress && progress.total > 0
      ? Math.max(
          0,
          Math.min(100, Math.round((progress.value / progress.total) * 100)),
        )
      : 0;

  const card = (
    <div className="group relative flex h-full min-h-44 flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white p-5 shadow-none transition duration-200 hover:-translate-y-0.5 hover:border-[#2c9b80]/40 hover:shadow-[0_24px_50px_-38px_rgba(4,56,47,0.7)]">
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -right-10 -top-14 h-36 w-36 rounded-full bg-gradient-to-br ${colors.glow} to-transparent opacity-80 transition-transform duration-300 group-hover:scale-110`}
      />

      <div className="relative flex items-start justify-between gap-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-neutral-500">
          {label}
        </p>
        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${colors.icon}`}
        >
          <Icon aria-hidden="true" className="h-5 w-5" />
        </span>
      </div>

      <p className="relative mt-4 text-3xl font-extrabold tracking-tight tabular-nums text-[#04382f]">
        {value}
      </p>

      <div className="relative mt-auto pt-4">
        {badge ? (
          <span
            className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] ${colors.badge}`}
          >
            {badge}
          </span>
        ) : null}

        {hint ? (
          <p className="mt-2 text-xs leading-relaxed text-neutral-500">{hint}</p>
        ) : null}

        {progress ? (
          <div className="mt-4">
            <div className="mb-1.5 flex items-center justify-between gap-2 text-[11px] font-medium text-neutral-500">
              <span>{progress.caption ?? "Share of total"}</span>
              <span className="tabular-nums">{percentage}%</span>
            </div>
            <div
              className="h-1.5 w-full overflow-hidden rounded-full bg-neutral-100"
              role="progressbar"
              aria-label={`${label} proportion`}
              aria-valuenow={percentage}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className={`h-full rounded-full ${colors.bar} transition-[width] duration-500`}
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>
        ) : null}

        {href ? (
          <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#0b5c4b] group-hover:text-[#2c9b80]">
            {hrefLabel}
            <ArrowRight
              aria-hidden="true"
              className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
            />
          </span>
        ) : null}
      </div>
    </div>
  );

  if (!href) return card;

  return (
    <Link
      href={href}
      className="block h-full rounded-2xl data-focus-visible:outline-2 data-focus-visible:outline-offset-2 data-focus-visible:outline-[#075144]"
    >
      {card}
    </Link>
  );
}
