import TuitionCard from "@/components/Tuition/TuitionCard";
import { getFeaturedTuitions } from "@/lib/api/tuitions";
import { Books } from "@gravity-ui/icons";
import { EmptyState, Surface } from "@heroui/react";
import React from "react";

const FeaturedTuition = async () => {
  const tuitions = await getFeaturedTuitions();

  return (
    <section
      id="featured-tuitions"
      aria-labelledby="featured-tuitions-heading"
      className="bg-white py-12"
    >
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <span className="inline-flex items-center rounded-full bg-[#e7f4ef] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#0b5c4b]">
            Featured Tuitions
          </span>
          <h2
            id="featured-tuitions-heading"
            className=" mt-4 text-3xl font-extrabold tracking-tight text-[#04382f] lg:text-4xl"
          >
            Browse tuitions and apply to your desired options
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-600 lg:text-base">
            Whether you are looking for the right mentor or filling your next
            batch, getting started takes just a few steps.
          </p>
        </div>

        <div className="min-w-0 lg:col-span-9">
          {tuitions.length > 0 ? (
            <div className="grid content-start gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {tuitions.map((tuition) => (
                <TuitionCard key={tuition._id} tuition={tuition} />
              ))}
            </div>
          ) : (
            <Surface className="rounded-3xl border border-black/5 bg-white shadow-[0_30px_70px_-60px_rgba(4,56,47,0.7)]">
              <EmptyState className="flex flex-col items-center gap-3 px-5 py-14 text-center sm:px-6 sm:py-16">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e7f4ef] text-[#075144]">
                  <Books aria-hidden="true" className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-lg font-bold tracking-tight text-[#04382f]">
                    No tuitions available yet
                  </h3>
                  <p className="mt-1 text-sm text-neutral-500">
                    Approved and active tuition posts will appear here.
                  </p>
                </div>
              </EmptyState>
            </Surface>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTuition;
