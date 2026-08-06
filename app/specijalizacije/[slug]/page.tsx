import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";
import { SPECIALIZATIONS, getSpecialization } from "@/lib/specializations";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

interface SpecializationPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return SPECIALIZATIONS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: SpecializationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const spec = getSpecialization(slug);
  if (!spec) return {};

  return buildMetadata({
    title: spec.title,
    description: spec.intro,
  });
}

export default async function SpecializationPage({
  params,
}: SpecializationPageProps) {
  const { slug } = await params;
  const spec = getSpecialization(slug);

  if (!spec) {
    notFound();
  }

  const others = SPECIALIZATIONS.filter((s) => s.slug !== spec.slug);

  return (
    <>
      <Header />
      <main>
        <div className="mx-auto max-w-6xl px-6 pt-6 text-sm text-text-muted">
          <Link href="/" className="hover:text-primary-dark">
            Početna
          </Link>
          <span className="mx-2">/</span>
          <Link href="/#specijalizacije" className="hover:text-primary-dark">
            Specijalizacije
          </Link>
          <span className="mx-2">/</span>
          <span className="text-text">{spec.navLabel}</span>
        </div>

        <section className="border-b border-border">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-10 md:grid-cols-2 md:py-16">
            <div>
              <p className="mb-3 text-sm font-semibold tracking-wide text-accent uppercase">
                Specijalizacija
              </p>
              <h1 className="font-serif text-4xl text-primary-dark md:text-5xl">
                {spec.title}
              </h1>
              <p className="mt-4 text-lg text-text-muted">{spec.tagline}</p>
              <p className="mt-6 text-text-muted">{spec.intro}</p>
              <div className="mt-8">
                <Link
                  href="/#kontakt"
                  className="inline-block rounded-full bg-primary px-7 py-3 font-medium text-white transition-colors hover:bg-primary-dark"
                >
                  Zakažite konsultacije
                </Link>
              </div>
            </div>

            <div className="relative aspect-4/3 overflow-hidden rounded-3xl shadow-xl">
              <Image
                src={`https://picsum.photos/seed/${spec.imageSeed}/1000/750`}
                alt={spec.title}
                fill
                priority
                sizes="(min-width: 768px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-surface">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <h2 className="font-serif text-3xl text-primary-dark md:text-4xl">
              Sa kojim izazovima radim
            </h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {spec.challenges.map((challenge) => (
                <div
                  key={challenge.title}
                  className="rounded-2xl border border-border bg-bg p-6"
                >
                  <h3 className="font-serif text-lg text-primary-dark">
                    {challenge.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-muted">
                    {challenge.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {spec.sections.map((section, index) => (
          <section
            key={section.heading}
            className={cn(
              "border-b border-border",
              index % 2 === 1 && "bg-surface"
            )}
          >
            <div className="mx-auto max-w-3xl px-6 py-20">
              <h2 className="font-serif text-3xl text-primary-dark md:text-4xl">
                {section.heading}
              </h2>
              <div className="mt-6 space-y-4 text-text-muted">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </section>
        ))}

        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-16 text-center">
            <h2 className="font-serif text-2xl text-primary-dark md:text-3xl">
              Zainteresovani ste za konsultacije?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-text-muted">
              Javite se putem telefona ili emaila i dogovorimo termin koji vam
              odgovara.
            </p>
            <div className="mt-6">
              <Link
                href="/#kontakt"
                className="inline-block rounded-full bg-primary px-7 py-3 font-medium text-white transition-colors hover:bg-primary-dark"
              >
                Kontaktirajte me
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-surface">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <h2 className="font-serif text-2xl text-primary-dark md:text-3xl">
              Ostale specijalizacije
            </h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              {others.map((other) => (
                <Link
                  key={other.slug}
                  href={`/specijalizacije/${other.slug}`}
                  className="group overflow-hidden rounded-3xl border border-border bg-bg shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="relative aspect-16/9 overflow-hidden">
                    <Image
                      src={`https://picsum.photos/seed/${other.imageSeed}/600/338`}
                      alt={other.navLabel}
                      fill
                      sizes="(min-width: 768px) 40vw, 90vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-lg text-primary-dark">
                      {other.navLabel}
                    </h3>
                    <p className="mt-1 text-sm text-text-muted">
                      {other.tagline}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
