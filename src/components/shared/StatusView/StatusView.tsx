import type { ReactNode } from "react";

type StatusViewProps = {
  code: string;
  eyebrow: string;
  title: string;
  description: string;
  icon: ReactNode;
  iconClassName: string;
  actions: ReactNode;
  details?: ReactNode;
};

export default function StatusView({
  code,
  eyebrow,
  title,
  description,
  icon,
  iconClassName,
  actions,
  details,
}: StatusViewProps) {
  return (
    <div className="flex min-h-[65vh] w-full items-center justify-center px-6 py-16 lg:px-10">
      <div className="relative w-full max-w-xl overflow-hidden rounded-3xl  bg-white px-6 py-12 text-center  sm:px-10">
        <div
          className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full ${iconClassName}`}
        >
          {icon}
        </div>

        <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.2em] text-[#2c9b80]">
          {eyebrow}
        </p>
        <p className="mt-1 text-6xl font-extrabold tracking-tight text-red-500">
          {code}
        </p>
        <h1 className="mt-4 text-2xl font-extrabold tracking-tight text-[#04382f]">
          {title}
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-neutral-600">
          {description}
        </p>

        {details && (
          <div className="mt-6 rounded-2xl bg-[#f6f8f6] p-5 text-left text-sm leading-relaxed text-neutral-600">
            {details}
          </div>
        )}

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          {actions}
        </div>
      </div>
    </div>
  );
}
