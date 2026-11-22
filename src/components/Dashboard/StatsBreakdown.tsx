import {
  statTones,
  type TStatTone,
} from "@/components/Dashboard/stat-tones";

export type StatsBreakdownSegment = {
  label: string;
  value: number;
  tone: TStatTone;
};

type StatsBreakdownProps = {
  title: string;
  description?: string;
  segments: StatsBreakdownSegment[];
};

/** Stacked distribution bar with a labelled legend for related stat totals. */
export default function StatsBreakdown({
  title,
  description,
  segments,
}: StatsBreakdownProps) {
  const total = segments.reduce((sum, segment) => sum + Math.max(0, segment.value), 0);

  return (
    <section className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-none sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="text-sm font-bold tracking-tight text-[#04382f]">
            {title}
          </h2>
          {description ? (
            <p className="mt-1 text-xs text-neutral-500">{description}</p>
          ) : null}
        </div>
        <span className="rounded-full bg-[#f1f8f5] px-3 py-1 text-xs font-semibold tabular-nums text-[#075144]">
          {total} total
        </span>
      </div>

      <div
        className="mt-5 flex h-2.5 w-full overflow-hidden rounded-full bg-neutral-100"
        role="img"
        aria-label={segments
          .map((segment) => `${segment.label}: ${segment.value}`)
          .join(", ")}
      >
        {segments.map((segment) => {
          const share =
            total > 0 ? (Math.max(0, segment.value) / total) * 100 : 0;

          return (
            <div
              key={segment.label}
              className={`h-full ${statTones[segment.tone].bar}`}
              style={{ width: `${share}%` }}
            />
          );
        })}
      </div>

      <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
        {segments.map((segment) => {
          const share =
            total > 0 ? Math.round((Math.max(0, segment.value) / total) * 100) : 0;

          return (
            <li key={segment.label} className="flex items-center gap-2 text-xs">
              <span
                aria-hidden="true"
                className={`h-2.5 w-2.5 shrink-0 rounded-full ${statTones[segment.tone].bar}`}
              />
              <span className="font-medium text-neutral-600">{segment.label}</span>
              <span className="font-bold tabular-nums text-[#04382f]">
                {segment.value}
              </span>
              <span className="text-neutral-400 tabular-nums">({share}%)</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
