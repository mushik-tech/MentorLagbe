import Image from "next/image";
import Link from "next/link";
import { BookOpen, Calendar, MapPin } from "@gravity-ui/icons";
import { Button, Card, Chip } from "@heroui/react";
import type { ITuition } from "@/types/tuitions";

const classLevelLabels: Record<string, string> = {
  "class-1-5": "Class 1–5",
  "class-6-8": "Class 6–8",
  ssc: "Class 9–10 (SSC)",
  hsc: "Class 11–12 (HSC)",
  admission: "Admission test",
  undergraduate: "Undergraduate",
  other: "Other",
};

const modeColor: Record<ITuition["mode"], "accent" | "warning"> = {
  online: "accent",
  offline: "warning",
};

function formatFee(value: string) {
  const amount = Number(value);

  return Number.isFinite(amount)
    ? `৳${amount.toLocaleString("en-US")}`
    : `৳${value}`;
}

type TuitionCardProps = {
  tuition: ITuition;
};

export default function TuitionCard({ tuition }: TuitionCardProps) {
  return (
    <Card className="group flex h-full flex-col gap-0 overflow-hidden rounded-2xl border border-neutral-200 bg-white p-0 shadow-none transition hover:-translate-y-0.5 hover:border-[#2c9b80]/40 hover:shadow-[0_24px_50px_-38px_rgba(4,56,47,0.7)]">
      <div className="relative aspect-video w-full overflow-hidden bg-[#e7f4ef]">
        {tuition.banner ? (
          <Image
            src={tuition.banner}
            alt={tuition.title}
            fill
            unoptimized
            sizes="(min-width: 1280px) 30vw, (min-width: 640px) 45vw, 100vw"
            className="object-cover transition duration-300 group-hover:scale-[1.04]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-[#0b5c4b]">
            <BookOpen aria-hidden="true" className="h-8 w-8" />
          </div>
        )}

        <Chip
          size="sm"
          variant="soft"
          color={modeColor[tuition.mode] ?? "default"}
          className="absolute left-3 top-3 backdrop-blur"
        >
          {tuition.mode}
        </Chip>
      </div>

      <Card.Content className="flex flex-1 flex-col gap-0 p-5">
        <div className="flex items-center gap-2">
          <Chip size="sm" variant="soft" color="default" className="min-w-0">
            <Chip.Label className="truncate">{tuition.subject}</Chip.Label>
          </Chip>
          <span className="truncate text-xs font-medium text-neutral-500">
            {classLevelLabels[tuition.classLevel] ?? tuition.classLevel}
          </span>
        </div>

        <Card.Title className="mt-3 text-base font-semibold text-[#04382f]">
          {tuition.title}
        </Card.Title>

        <dl className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-neutral-600">
          <div className="flex min-w-0 items-center gap-1.5">
            <MapPin
              aria-hidden="true"
              className="h-3.5 w-3.5 shrink-0 text-[#2c9b80]"
            />
            <dt className="sr-only">Location</dt>
            <dd className="max-w-36 truncate">
              {tuition.location || "Anywhere"}
            </dd>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar
              aria-hidden="true"
              className="h-3.5 w-3.5 shrink-0 text-[#2c9b80]"
            />
            <dt className="sr-only">Weekly schedule</dt>
            <dd>{tuition.daysPerWeek} days/week</dd>
          </div>
        </dl>

        <div className="mt-auto">
          <Card.Footer className="mt-5 flex items-end justify-between gap-3 border-t border-neutral-100 pt-4">
            <p className="text-lg font-extrabold leading-tight text-[#04382f]">
              {formatFee(tuition.monthlyFee)}
              <span className="ml-1 text-[11px] font-medium text-neutral-500">
                /month
              </span>
            </p>

            <Link
              href={`/tuitions/${tuition._id}`}
              aria-label={`View details for ${tuition.title}`}
            >
              <Button size="sm" variant="outline">
                View details
              </Button>
            </Link>
          </Card.Footer>
        </div>
      </Card.Content>
    </Card>
  );
}
