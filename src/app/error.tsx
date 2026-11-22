"use client";

import ErrorView from "@/components/shared/StatusView/ErrorView";

export default function Error({
  error,
  retry,
}: {
  error: unknown;
  retry: () => void;
}) {
  return <ErrorView error={error} retry={retry} />;
}
