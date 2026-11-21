"use client";

import {
  Button,
  Label,
  Radio,
  RadioGroup,
  Surface,
} from "@heroui/react";
import { FunnelXmark } from "@gravity-ui/icons";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const classLevelOptions = [
  { id: "class-1-5", label: "Class 1–5" },
  { id: "class-6-8", label: "Class 6–8" },
  { id: "ssc", label: "Class 9–10 (SSC)" },
  { id: "hsc", label: "Class 11–12 (HSC)" },
  { id: "admission", label: "Admission test" },
  { id: "undergraduate", label: "Undergraduate" },
  { id: "other", label: "Other" },
];

type TuitionFiltersProps = {
  subjects: string[];
};

export default function TuitionFilters({ subjects }: TuitionFiltersProps) {
  const router = useRouter();
  const panelRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);

  // Only stick the panel while it fits in the viewport. Otherwise the lower
  // filter groups (Class Level, Tuition Mode) would stay out of reach.
  useEffect(() => {
    const panel = panelRef.current;

    if (!panel) return;

    const update = () => {
      const fitsViewport = panel.offsetHeight + 96 <= window.innerHeight;
      setIsSticky(fitsViewport);
    };

    update();

    const observer =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(update)
        : undefined;

    observer?.observe(panel);
    window.addEventListener("resize", update);

    return () => {
      observer?.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  const handleSubjectChange = (value: string) => {
    const params = new URLSearchParams(window.location.search);
    params.set("subject", value);

    router.push(`/tuitions?${params.toString()}`);
  };
  const handleLevelChange = (value: string) => {
    const params = new URLSearchParams(window.location.search);
    params.set("level", value);
    router.push(`/tuitions?${params.toString()}`);
  };
  const handleModeChange = (value: string) => {
    const params = new URLSearchParams(window.location.search);
    params.set("mode", value);
    router.push(`/tuitions?${params.toString()}`);
  };

  return (
    <div
      ref={panelRef}
      className={`col-span-12 w-full min-w-0 self-start lg:col-span-3 ${
        isSticky ? "lg:sticky lg:top-20" : ""
      }`}
    >
      <Surface className="rounded-2xl border border-black/5 bg-white p-4 shadow-[0_30px_70px_-60px_rgba(4,56,47,0.7)] sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h2 className="text-sm font-bold tracking-tight text-[#04382f]">
              Filters
            </h2>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              router.replace("/tuitions");
            }}
          >
            <FunnelXmark aria-hidden="true" />
            Reset Filter
          </Button>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          <RadioGroup name="level" onChange={handleSubjectChange}>
            <Label>Subjects</Label>

            {subjects.map((subject) => (
              <Radio key={subject} value={subject}>
                <Radio.Content>
                  <Radio.Control>
                    <Radio.Indicator />
                  </Radio.Control>
                  {subject}
                </Radio.Content>
              </Radio>
            ))}
          </RadioGroup>

          <RadioGroup name="level" onChange={handleLevelChange}>
            <Label>Class Level</Label>

            {classLevelOptions.map((level) => (
              <Radio key={level.id} value={level.label}>
                <Radio.Content>
                  <Radio.Control>
                    <Radio.Indicator />
                  </Radio.Control>
                  {level.label}
                </Radio.Content>
              </Radio>
            ))}
          </RadioGroup>

          <RadioGroup name="mode" onChange={handleModeChange}>
            <Label>Tuition Mode</Label>
            <Radio value="basic">
              <Radio.Content>
                <Radio.Control>
                  <Radio.Indicator />
                </Radio.Control>
                Online
              </Radio.Content>
            </Radio>
            <Radio value="premium">
              <Radio.Content>
                <Radio.Control>
                  <Radio.Indicator />
                </Radio.Control>
                Offline
              </Radio.Content>
            </Radio>
          </RadioGroup>
        </div>
      </Surface>
    </div>
  );
}
