import Image from "next/image";
import Link from "next/link";
import { SPECIALIZATIONS } from "@/lib/specializations";

export function Specializations() {
  return (
    <section id="specijalizacije" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold tracking-wide text-accent uppercase">
            Specijalizacije
          </p>
          <h2 className="font-serif text-3xl text-primary-dark md:text-4xl">
            Psihoterapija za svaki životni period
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {SPECIALIZATIONS.map((item) => (
            <Link
              key={item.slug}
              href={`/specijalizacije/${item.slug}`}
              className="group overflow-hidden rounded-3xl border border-border bg-surface shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-4/3 overflow-hidden">
                <Image
                  src={`https://picsum.photos/seed/${item.imageSeed}/600/450`}
                  alt={item.navLabel}
                  fill
                  sizes="(min-width: 768px) 30vw, 90vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl text-primary-dark">
                  {item.navLabel}
                </h3>
                <p className="mt-2 text-sm text-text-muted">{item.teaser}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
                  Saznajte više
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
