const STEPS = [
  {
    number: "01",
    title: "Prvi kontakt",
    description:
      "Javljate se putem telefona ili emaila, a zajedno dogovaramo termin koji vam odgovara.",
  },
  {
    number: "02",
    title: "Upoznavanje",
    description:
      "Na prvoj seansi razgovaramo o razlogu dolaska, dosadašnjim iskustvima i onome što želite da postignete.",
  },
  {
    number: "03",
    title: "Plan rada",
    description:
      "Zajedno definišemo pristup i dinamiku rada, prilagođenu vašim potrebama i tempu.",
  },
  {
    number: "04",
    title: "Praćenje napretka",
    description:
      "Kroz redovne seanse pratimo napredak i po potrebi prilagođavamo dalji pravac rada.",
  },
];

export function Process() {
  return (
    <section id="proces" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold tracking-wide text-accent uppercase">
            Kako izgleda proces
          </p>
          <h2 className="font-serif text-3xl text-primary-dark md:text-4xl">
            Od prvog javljanja do prve promene
          </h2>
          <p className="mt-4 text-text-muted">
            Svaki proces terapije je individualan, ali obično prolazi kroz nekoliko
            jasnih koraka.
          </p>
        </div>

        <div className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
          <div
            className="absolute top-6 right-0 left-0 hidden h-px bg-border md:block"
            aria-hidden="true"
          />
          {STEPS.map((step) => (
            <div key={step.number} className="relative text-center md:text-left">
              <span className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary font-serif text-lg text-white md:mx-0">
                {step.number}
              </span>
              <h3 className="mt-5 font-serif text-lg text-primary-dark">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-text-muted">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
