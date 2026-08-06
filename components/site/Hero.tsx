import Image from "next/image";

export function Hero() {
  return (
    <section
      id="pocetna"
      className="relative overflow-hidden border-b border-border"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="mb-4 text-sm font-semibold tracking-wide text-accent uppercase">
            Psihoterapija u Beogradu
          </p>
          <h1 className="font-serif text-4xl leading-tight text-primary-dark md:text-5xl">
            Prostor za razumevanje, rast i promenu
          </h1>
          <p className="mt-6 text-lg text-text-muted">
            Katarina Hess — diplomirani psiholog i sertifikovani kognitivni i
            porodični terapeut. Psihoterapija za decu, adolescente i odrasle,
            prilagođena svakom pojedincu i porodici.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#kontakt"
              className="rounded-full bg-primary px-7 py-3 font-medium text-white transition-colors hover:bg-primary-dark"
            >
              Zakažite konsultacije
            </a>
            <a
              href="#o-meni"
              className="rounded-full border border-primary px-7 py-3 font-medium text-primary-dark transition-colors hover:bg-primary-light"
            >
              Saznajte više
            </a>
          </div>
        </div>

        <div className="relative aspect-4/3 overflow-hidden rounded-3xl shadow-xl">
          <Image
            src="https://picsum.photos/seed/katarina-hero-calm/1200/900"
            alt="Miran prostor za psihoterapiju"
            fill
            priority
            sizes="(min-width: 768px) 45vw, 90vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
