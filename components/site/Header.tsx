"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { SPECIALIZATIONS } from "@/lib/specializations";

const NAV_LINKS = [
  { href: "/#o-meni", label: "O meni" },
  { href: "/#pristup", label: "Pristup radu" },
  { href: "/#pitanja", label: "Pitanja" },
  { href: "/#kontakt", label: "Kontakt" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-1.5">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Katarina Hess logo"
            width={40}
            height={40}
            className="h-16 w-16 rounded-full object-cover"
            priority
          />
          <span className="font-serif text-xl text-center text-primary-dark">
            Katarina Hess
            <br />
            Psiholog
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:gap-8 xl:flex">
          <Link
            href="/#o-meni"
            className="text-sm text-text-muted transition-colors hover:text-primary-dark"
          >
            O meni
          </Link>

          <div className="group relative">
            <Link
              href="/#specijalizacije"
              className="flex items-center gap-1 text-sm text-text-muted transition-colors hover:text-primary-dark"
            >
              Specijalizacije
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                className="h-3.5 w-3.5 transition-transform group-hover:rotate-180"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </Link>

            <div className="invisible absolute left-0 top-full pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
              <div className="w-48 rounded-2xl border border-border bg-surface p-2 shadow-lg">
                {SPECIALIZATIONS.map((spec) => (
                  <Link
                    key={spec.slug}
                    href={`/specijalizacije/${spec.slug}`}
                    className="block rounded-lg px-3 py-2 text-sm text-text-muted transition-colors hover:bg-primary-light hover:text-primary-dark"
                  >
                    {spec.navLabel}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {NAV_LINKS.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-text-muted transition-colors hover:text-primary-dark"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+381613188204"
            className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-dark"
          >
            Zakažite termin
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Meni"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 xl:hidden"
        >
          <span
            className={cn(
              "h-0.5 w-6 bg-text transition-transform",
              open && "translate-y-2 rotate-45"
            )}
          />
          <span className={cn("h-0.5 w-6 bg-text transition-opacity", open && "opacity-0")} />
          <span
            className={cn(
              "h-0.5 w-6 bg-text transition-transform",
              open && "-translate-y-2 -rotate-45"
            )}
          />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-border bg-bg px-6 pb-4 xl:hidden">
          <Link
            href="/#o-meni"
            onClick={() => setOpen(false)}
            className="rounded-md px-2 py-3 text-text-muted hover:bg-primary-light hover:text-primary-dark"
          >
            O meni
          </Link>

          <Link
            href="/#specijalizacije"
            onClick={() => setOpen(false)}
            className="rounded-md px-2 py-3 text-text-muted hover:bg-primary-light hover:text-primary-dark"
          >
            Specijalizacije
          </Link>
          <div className="ml-3 flex flex-col gap-1 border-l border-border pl-3">
            {SPECIALIZATIONS.map((spec) => (
              <Link
                key={spec.slug}
                href={`/specijalizacije/${spec.slug}`}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm text-text-muted hover:bg-primary-light hover:text-primary-dark"
              >
                {spec.navLabel}
              </Link>
            ))}
          </div>

          {NAV_LINKS.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-3 text-text-muted hover:bg-primary-light hover:text-primary-dark"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+381613188204"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-primary px-5 py-3 text-center text-sm font-medium text-white"
          >
            Zakažite termin
          </a>
        </nav>
      )}
    </header>
  );
}
