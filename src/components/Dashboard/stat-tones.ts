export type TStatTone = "emerald" | "sky" | "amber" | "violet" | "rose";

/** Shared palette for every dashboard visualization. */
export const statTones: Record<
  TStatTone,
  { icon: string; glow: string; bar: string; badge: string }
> = {
  emerald: {
    icon: "bg-[#e7f4ef] text-[#075144]",
    glow: "from-[#8fd9c7]/50",
    bar: "bg-[#2c9b80]",
    badge: "bg-[#e7f4ef] text-[#075144]",
  },
  sky: {
    icon: "bg-[#e8eefc] text-[#2f4f94]",
    glow: "from-[#93b4f0]/45",
    bar: "bg-[#4b6fc4]",
    badge: "bg-[#e8eefc] text-[#2f4f94]",
  },
  amber: {
    icon: "bg-[#fdf6d3] text-[#8a6d00]",
    glow: "from-[#f4d21f]/40",
    bar: "bg-[#e0b400]",
    badge: "bg-[#fdf6d3] text-[#8a6d00]",
  },
  violet: {
    icon: "bg-violet-50 text-violet-700",
    glow: "from-violet-300/45",
    bar: "bg-violet-500",
    badge: "bg-violet-50 text-violet-700",
  },
  rose: {
    icon: "bg-[#fff4f2] text-[#a63a2e]",
    glow: "from-[#f3a79a]/40",
    bar: "bg-[#d95648]",
    badge: "bg-[#fff4f2] text-[#a63a2e]",
  },
};
