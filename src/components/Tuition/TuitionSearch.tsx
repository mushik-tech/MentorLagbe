"use client";

import { Button, Form, Label, SearchField, Surface } from "@heroui/react";
import { useRouter } from "next/navigation";

export default function TuitionSearch() {
  const router = useRouter();

  const handleSearch = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const search = String(formData.get("search") ?? "");
    const params = new URLSearchParams(window.location.search);
    params.set("search", search);
    router.push(`/tuitions?${params.toString()}`);
  };

  return (
    <Surface className="rounded-2xl border border-black/5 bg-white p-3 shadow-[0_30px_70px_-60px_rgba(4,56,47,0.7)] sm:p-4">
      <Form
        onSubmit={handleSearch}
        className="flex flex-col gap-2 sm:flex-row sm:items-center"
      >
        <SearchField className="min-w-0 flex-1" name="search">
          <Label className="sr-only">Search tuitions by title or subject</Label>
          <SearchField.Group>
            <SearchField.SearchIcon />
            <SearchField.Input placeholder="Search by title or subject" />
            <SearchField.ClearButton
              onClick={() => {
                router.replace("/tuitions");
              }}
            />
          </SearchField.Group>
        </SearchField>
        <Button type="submit" className="w-full sm:w-auto">
          Search
        </Button>
      </Form>
    </Surface>
  );
}
