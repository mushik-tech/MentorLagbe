"use client";

import { Button, Label, Radio, RadioGroup, Surface } from "@heroui/react";
import { FunnelXmark } from "@gravity-ui/icons";
import { useRouter, useSearchParams } from "next/navigation";

const classLevelOptions = [
  { id: "class-1-5", label: "Primary" },
  { id: "class-6-7", label: "Class 6–7" },
  { id: "class-8", label: "Class 8 (JSC)" },
  { id: "ssc", label: "Class 9–10 (SSC)" },
  { id: "hsc", label: "Class 11–12 (HSC)" },
  { id: "admission", label: "Admission test" },
  { id: "undergraduate", label: "Undergraduate" },
  { id: "o-level", label: "O Level" },
  { id: "other", label: "Other" },
];

export default function TuitionFilters() {
  const router = useRouter();

  const searchParams = useSearchParams();

  const selectedLevel = searchParams.get("level");
  const selectedMode = searchParams.get("mode");

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
    <div className={`col-span-12 w-full min-w-0 self-start lg:col-span-3`}>
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
          <RadioGroup
            name="level"
            onChange={handleLevelChange}
            value={selectedLevel}
          >
            <Label>Class Level</Label>

            {classLevelOptions.map((level) => (
              <Radio key={level.id} value={level.id}>
                <Radio.Content>
                  <Radio.Control>
                    <Radio.Indicator />
                  </Radio.Control>
                  {level.label}
                </Radio.Content>
              </Radio>
            ))}
          </RadioGroup>

          <RadioGroup
            name="mode"
            onChange={handleModeChange}
            value={selectedMode}
          >
            <Label>Tuition Mode</Label>
            <Radio value="online">
              <Radio.Content>
                <Radio.Control>
                  <Radio.Indicator />
                </Radio.Control>
                Online
              </Radio.Content>
            </Radio>
            <Radio value="offline">
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
