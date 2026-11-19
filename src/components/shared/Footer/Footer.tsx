import Link from "next/link";
import Logo from "@/components/shared/Logo/Logo";

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "Browse Tuitions", href: "/tuitions" },
  { label: "Pricing", href: "/pricing" },
  { label: "About Us", href: "/about" },
];

const accountLinks = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Create an Account", href: "/signup" },
  { label: "Sign In", href: "/signin" },
];

const socialLinks = [
  {
    label: "X",
    href: "https://x.com/mentorlagbe",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644Z",
  },
  {
    label: "Facebook",
    href: "https://facebook.com/mentorlagbe",
    path: "M13.5 21.75v-8.25h2.771l.414-3.216H13.5V8.232c0-.93.258-1.564 1.592-1.564h1.701V3.789a22.7 22.7 0 0 0-2.478-.127c-2.452 0-4.13 1.497-4.13 4.246v2.37H7.406v3.216h2.779v8.256h3.315Z",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/mentorlagbe",
    path: "M6.94 8.5H3.56V21h3.38V8.5ZM5.25 3a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92ZM20.44 13.86c0-3.52-1.88-5.16-4.39-5.16a3.79 3.79 0 0 0-3.43 1.89V8.5H9.25c.04.95 0 12.5 0 12.5h3.37v-6.98c0-.3.02-.6.11-.82.24-.6.79-1.22 1.71-1.22 1.21 0 1.69.92 1.69 2.27V21h3.38v-7.14Z",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/mentorlagbe",
    path: "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23a3.7 3.7 0 0 1-.9 1.38c-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07Zm0 3.68a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32Zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm7.85-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0Z",
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@mentorlagbe",
    path: "M21.58 7.19a2.51 2.51 0 0 0-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42A2.51 2.51 0 0 0 2.42 7.2 26.2 26.2 0 0 0 2 12c0 1.61.14 3.22.42 4.81a2.51 2.51 0 0 0 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42a2.51 2.51 0 0 0 1.77-1.77c.28-1.59.42-3.2.42-4.81 0-1.61-.14-3.22-.42-4.81ZM10 15.02V8.98L15.2 12 10 15.02Z",
  },
];

const contactItems = [
  {
    label: "hello@mentorlagbe.com",
    href: "mailto:hello@mentorlagbe.com",
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2.5" />
        <path
          d="m3.8 7 7.2 5.4a1.7 1.7 0 0 0 2 0L20.2 7"
          strokeLinecap="round"
        />
      </>
    ),
  },
  {
    label: "+880 1700-000000",
    href: "tel:+8801700000000",
    icon: (
      <path
        d="M6.6 3.6a1.7 1.7 0 0 1 2.4.3l1.6 2.2a1.7 1.7 0 0 1-.2 2.2l-.7.7a12.7 12.7 0 0 0 5.3 5.3l.7-.7a1.7 1.7 0 0 1 2.2-.2l2.2 1.6a1.7 1.7 0 0 1 .3 2.4l-1.2 1.5c-.8.9-2 1.3-3.1 1C11.3 18.9 5.1 12.7 4 7.8c-.3-1.1.1-2.3 1-3.1l1.6-1.1Z"
        strokeLinejoin="round"
      />
    ),
  },
  {
    label: "Dhanmondi, Dhaka 1209, Bangladesh",
    href: "https://maps.google.com/?q=Dhanmondi,+Dhaka,+Bangladesh",
    icon: (
      <>
        <path
          d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="10" r="2.6" />
      </>
    ),
  },
];

export default function Footer() {
  return (
    <footer
      aria-labelledby="footer-heading"
      className="relative isolate overflow-hidden bg-[#04382f] text-white"
    >
      <h2 id="footer-heading" className="sr-only">
        MentorLagbe footer
      </h2>

      {/* Ambient background accents */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(70%_120%_at_10%_0%,rgba(44,155,128,0.35)_0%,transparent_60%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(45%_80%_at_100%_100%,rgba(244,210,31,0.12)_0%,transparent_65%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/25 to-transparent"
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-8 pt-14 sm:px-8 lg:px-10 lg:pt-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.25fr] lg:gap-8">
          {/* Brand */}
          <div className="max-w-sm">
            <div
              aria-label="MentorLagbe home"
              className="inline-flex rounded-2xl bg-white px-3.5 py-2 shadow-[0_18px_40px_-22px_rgba(0,0,0,0.8)] transition hover:-translate-y-0.5 [&_img]:h-9 [&_img]:w-auto sm:[&_img]:h-11"
            >
              <Logo />
            </div>

            <p className="mt-5 text-sm leading-relaxed text-white/70">
              Connecting learners with verified mentors for one-on-one guidance
              in career, business, tech, and personal development — so you can
              move forward faster.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`MentorLagbe on ${social.label}`}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/15 transition hover:bg-[#f4d21f] hover:text-[#04382f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f4d21f]"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-4.5 w-4.5"
                    fill="currentColor"
                  >
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <nav aria-labelledby="footer-explore">
            <h3
              id="footer-explore"
              className=" text-sm font-semibold tracking-wide text-white"
            >
              Explore
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 transition hover:text-[#f4d21f]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Account */}
          <nav aria-labelledby="footer-account">
            <h3
              id="footer-account"
              className=" text-sm font-semibold tracking-wide text-white"
            >
              Account
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {accountLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 transition hover:text-[#f4d21f]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className=" text-sm font-semibold tracking-wide text-white">
              Get in touch
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {contactItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    {...(item.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="flex items-start gap-3 text-white/70 transition hover:text-[#f4d21f]"
                  >
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#8fd9c7] ring-1 ring-white/10">
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      >
                        {item.icon}
                      </svg>
                    </span>
                    <span className="leading-relaxed">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-[13px] text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} MentorLagbe. All rights reserved.</p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <li>
              <Link href="/privacy" className="transition hover:text-[#f4d21f]">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="transition hover:text-[#f4d21f]">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/contact" className="transition hover:text-[#f4d21f]">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
