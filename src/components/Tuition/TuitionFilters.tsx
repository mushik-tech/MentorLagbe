"use client";

import {
  Button,
  Form,
  Label,
  Radio,
  RadioGroup,
  SearchField,
  Surface,
} from "@heroui/react";
import { FunnelXmark } from "@gravity-ui/icons";
import { useRouter } from "next/navigation";

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

  const handleSearch = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const search = Object.fromEntries(formData.entries()) as { search: string };
    const params = new URLSearchParams(window.location.search);
    params.set("search", search.search);
    router.push(`/tuitions?${params.toString()}`);
  };

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
    <Surface className="rounded-2xl border border-black/5 bg-white p-5 shadow-[0_30px_70px_-60px_rgba(4,56,47,0.7)] lg:sticky lg:top-20 col-span-3">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="text-sm font-bold tracking-tight text-[#04382f]">
            Filters
          </h2>
        </div>
        <Button
          variant="ghost"
          onClick={() => {
            router.replace("/tuitions");
          }}
        >
          <FunnelXmark aria-hidden="true" />
          Reset Filter
        </Button>
      </div>

      <Form onSubmit={handleSearch}>
        <SearchField className="mt-4" name="search">
          <Label className="sr-only">Search tuitions by title or subject</Label>
          <SearchField.Group>
            <SearchField.SearchIcon />
            <SearchField.Input placeholder="Title or subject" />
            <SearchField.ClearButton
              onClick={() => {
                router.replace("/tuitions");
              }}
            />
          </SearchField.Group>
        </SearchField>
        <Button type="submit" className={"mt-3"}>
          Search
        </Button>
      </Form>

      <div className="mt-5 space-y-4">
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
  );
}
