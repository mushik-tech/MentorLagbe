import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  Calendar,
  Display,
  GraduationCap,
  MapPin,
  Person,
  Tag,
  Wallet,
} from "@gravity-ui/icons";
import { Button, Chip, EmptyState, Surface } from "@heroui/react";
import ApplyButton from "@/components/Tuition/ApplyButton";
import { getSingleTuition } from "@/lib/api/tuitions";
import type { ITuition } from "@/types/tuitions";

export const dynamic = "force-dynamic";

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

type StatusChip = {
  label: string;
  color: "default" | "success" | "warning" | "danger";
};

function getStatus(tuition: ITuition): StatusChip {
  if (tuition.approvalStatus === "pending") {
    return { label: "Pending review", color: "warning" };
  }

  if (tuition.approvalStatus === "rejected") {
    return { label: "Rejected", color: "danger" };
  }

  if (!tuition.isActive) {
    return { label: "Inactive", color: "default" };
  }

  return { label: "Active", color: "success" };
}

function formatFee(value?: string) {
  const raw = value?.trim();

  const amount = Number(raw);

  return Number.isFinite(amount)
    ? `৳${amount.toLocaleString("en-US")}`
    : `৳${raw}`;
}

function formatPostedDate(value?: string) {
  if (!value) {
    return null;
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return null;
  }

  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

const TuitionDetailsPage = async ({ params }: PageProps<"/tuitions/[id]">) => {
  const { id } = await params;

  const tuition = await getSingleTuition(id).catch(() => null);

  if (!tuition?._id) {
    return (
      <section className="bg-[#f6f8f6] pb-16 pt-6 sm:pt-8 lg:pb-20">
        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-10">
          <Surface className="rounded-3xl border border-black/5 bg-white shadow-[0_30px_70px_-60px_rgba(4,56,47,0.7)]">
            <EmptyState className="flex flex-col items-center gap-3 px-5 py-16 text-center sm:px-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e7f4ef] text-[#075144]">
                <BookOpen aria-hidden="true" className="h-6 w-6" />
              </span>
              <div>
                <h1 className="text-lg font-bold tracking-tight text-[#04382f]">
                  Tuition not found
                </h1>
                <p className="mt-1 text-sm text-neutral-500">
                  This tuition may have been removed or the link is incorrect.
                </p>
              </div>
              <Link href="/tuitions">
                <Button variant="primary" size="sm">
                  Browse tuitions
                </Button>
              </Link>
            </EmptyState>
          </Surface>
        </div>
      </section>
    );
  }

  const classLevel =
    classLevelLabels[tuition.classLevel] ??
    tuition.classLevel ??
    "Not specified";
  const postedAt = formatPostedDate(tuition.createdAt);
  const status = getStatus(tuition);

  const facts = [
    {
      label: "Subject",
      value: tuition.subject || "Not specified",
      icon: (
        <Tag
          aria-hidden="true"
          className="h-3.5 w-3.5 shrink-0 text-[#2c9b80]"
        />
      ),
    },
    {
      label: "Class level",
      value: classLevel,
      icon: (
        <GraduationCap
          aria-hidden="true"
          className="h-3.5 w-3.5 shrink-0 text-[#2c9b80]"
        />
      ),
    },
    {
      label: "Mode",
      value: tuition.mode === "online" ? "Online" : "Offline",
      icon: (
        <Display
          aria-hidden="true"
          className="h-3.5 w-3.5 shrink-0 text-[#2c9b80]"
        />
      ),
    },
    {
      label: "Tutor Name",
      value: tuition.tutorName ? `${tuition.tutorName}` : "No Name",
      icon: (
        <Person
          aria-hidden="true"
          className="h-3.5 w-3.5 shrink-0 text-[#2c9b80]"
        />
      ),
    },
    {
      label: "Location",
      value: tuition.location || "Anywhere",
      icon: (
        <MapPin
          aria-hidden="true"
          className="h-3.5 w-3.5 shrink-0 text-[#2c9b80]"
        />
      ),
    },
    {
      label: "Weekly schedule",
      value: tuition.daysPerWeek
        ? `${tuition.daysPerWeek} days/week`
        : "Flexible",
      icon: (
        <Calendar
          aria-hidden="true"
          className="h-3.5 w-3.5 shrink-0 text-[#2c9b80]"
        />
      ),
    },
    {
      label: "Monthly fee",
      value: formatFee(tuition.monthlyFee),
      icon: (
        <Wallet
          aria-hidden="true"
          className="h-3.5 w-3.5 shrink-0 text-[#2c9b80]"
        />
      ),
    },

    {
      label: "Tutor Email",
      value: tuition.tutorEmail,
      icon: (
        <Person
          aria-hidden="true"
          className="h-3.5 w-3.5 shrink-0 text-[#2c9b80]"
        />
      ),
    },
  ];

  return (
    <section className="bg-[#f6f8f6] pb-16 pt-6 sm:pt-8 lg:pb-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        <Link
          href="/tuitions"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0b5c4b] transition hover:text-[#075144]"
        >
          <ArrowLeft aria-hidden="true" className="h-4 w-4" />
          Back to all tuitions
        </Link>

        <Surface className="mt-4 overflow-hidden rounded-3xl border border-black/5 bg-white shadow-md">
          {/* Banner */}
          <div className="relative aspect-video w-full overflow-hidden bg-[#e7f4ef] sm:aspect-21/9">
            {tuition.banner ? (
              <Image
                src={tuition.banner}
                alt={tuition.title}
                fill
                unoptimized
                preload
                sizes="(min-width: 1280px) 1152px, 100vw"
                className="object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-[#0b5c4b]">
                <BookOpen aria-hidden="true" className="h-10 w-10" />
              </div>
            )}
          </div>

          <div className="p-5 sm:p-7">
            {/* Status */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <Chip
                size="lg"
                variant="soft"
                color={modeColor[tuition.mode] ?? "default"}
                className="backdrop-blur capitalize"
              >
                {tuition.mode}
              </Chip>
              <Chip
                size="lg"
                variant="soft"
                color={status.color}
                className="backdrop-blur"
              >
                {status.label}
              </Chip>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
              {/* Title + Date posted */}
              <div>
                <h1 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight text-[#04382f] sm:text-3xl lg:text-4xl">
                  {tuition.title}
                </h1>
                {postedAt && (
                  <p className="mt-2 text-sm text-neutral-500">
                    Posted on {postedAt}
                  </p>
                )}
              </div>

              {/* Apply Button */}
              <div className="mt-5 border-t border-neutral-100 pt-5">
                <ApplyButton tuitionTitle={tuition.title} />
              </div>
            </div>

            {/* Info Card */}
            <dl className="mt-6 grid md:grid-cols-2 gap-3 lg:grid-cols-4">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-xl border border-neutral-200 bg-[#f9fbf9] px-3.5 py-3"
                >
                  <dt className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-neutral-500">
                    {fact.icon}
                    {fact.label}
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-[#04382f]">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-6">
              <h2 className="text-lg font-bold tracking-tight text-[#04382f]">
                About this tuition
              </h2>
              <p className="text-sm leading-7 text-neutral-600">
                {tuition.description?.trim()}
              </p>
            </div>
          </div>
        </Surface>
      </div>
    </section>
  );
};

export default TuitionDetailsPage;
