export const FAQ_ITEMS = [
  {
    question: "Kako izgleda prva seansa?",
    answer:
      "Prva seansa je usmerena na upoznavanje - razgovaramo o razlogu dolaska, dosadašnjim iskustvima i onome što želite da postignete kroz terapiju. Nema pritiska da se sve otkrije odjednom, tempo se prilagođava vama.",
  },
  {
    question: "Da li su seanse moguće online?",
    answer:
      "Da, u zavisnosti od potreba i mogućnosti, seanse mogu biti organizovane uživo ili putem video poziva.",
  },
  {
    question: "Koliko traje terapija?",
    answer:
      "Trajanje zavisi od prirode teškoća i ciljeva - neki klijenti dolaze na kraći, ciljani rad, dok drugi biraju duži proces. Dinamika se dogovara zajednički i preispituje tokom rada.",
  },
  {
    question: "Da li radite sa decom bez prisustva roditelja?",
    answer:
      "Zavisno od uzrasta i teme, deo seansi može uključivati i roditelje, posebno kod mlađe dece, dok se sa adolescentima najčešće radi individualno, uz povremene porodične sastanke.",
  },
  {
    question: "Kako da zakažem termin?",
    answer:
      "Dovoljno je da me kontaktirate putem telefona ili emaila, a zajedno ćemo dogovoriti termin koji vam odgovara.",
  },
  {
    question: "Da li je sve što kažem poverljivo?",
    answer:
      "Da, poverljivost je osnovni princip psihoterapijskog rada, u skladu sa profesionalnim i etičkim standardima struke.",
  },
];

export function FAQ() {
  return (
    <section id="pitanja" className="border-b border-border bg-surface">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold tracking-wide text-accent uppercase">
            Česta pitanja
          </p>
          <h2 className="font-serif text-3xl text-primary-dark md:text-4xl">
            Odgovori na najčešća pitanja
          </h2>
        </div>

        <div className="mt-12 divide-y divide-border rounded-3xl border border-border bg-bg">
          {FAQ_ITEMS.map((faq) => (
            <details key={faq.question} className="group p-6 open:pb-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-lg text-primary-dark marker:content-none">
                {faq.question}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  className="h-5 w-5 shrink-0 text-accent transition-transform duration-200 group-open:rotate-180"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </summary>
              <p className="mt-3 text-sm text-text-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
