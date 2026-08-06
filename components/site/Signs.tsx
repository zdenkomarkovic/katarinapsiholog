const GROUPS = [
  {
    title: "Deca",
    items: [
      "Čest plač, povučenost ili agresivno ponašanje bez jasnog razloga",
      "Teškoće u prilagođavanju na vrtić ili školu",
      "Promene u apetitu, snu ili svakodnevnim navikama",
      "Strahovi koji ometaju normalno funkcionisanje",
      "Teškoće u komunikaciji sa vršnjacima",
    ],
  },
  {
    title: "Adolescenti",
    items: [
      "Nagle promene raspoloženja ili povlačenje iz porodice i društva",
      "Pad koncentracije i uspeha u školi",
      "Anksioznost, nisko samopouzdanje ili negativna slika o sebi",
      "Učestali konflikti sa roditeljima ili vršnjacima",
      "Teškoće u nošenju sa pritiskom i očekivanjima",
    ],
  },
  {
    title: "Odrasli",
    items: [
      "Dugotrajan osećaj stresa, anksioznosti ili preplavljenosti",
      "Teškoće u odnosima - partnerskim, porodičnim ili poslovnim",
      "Osećaj zaglavljenosti, gubitka motivacije ili smisla",
      "Promene raspoloženja koje traju duže vreme",
      "Potreba za prostorom da se sagleda sopstveni život i izbori",
    ],
  },
];

export function Signs() {
  return (
    <section id="kada-potraziti-pomoc" className="border-b border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold tracking-wide text-accent uppercase">
            Kada potražiti pomoć
          </p>
          <h2 className="font-serif text-3xl text-primary-dark md:text-4xl">
            Prepoznajte znake koji zaslužuju pažnju
          </h2>
          <p className="mt-4 text-text-muted">
            Ne postoji &ldquo;pravi trenutak&rdquo; da se potraži podrška - dovoljno je da nešto
            u svakodnevnom funkcionisanju odstupa od uobičajenog. Neki od čestih signala:
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {GROUPS.map((group) => (
            <div
              key={group.title}
              className="rounded-3xl border border-border bg-bg p-6"
            >
              <h3 className="font-serif text-xl text-primary-dark">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-text-muted">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-text-muted">
          Ako prepoznajete sebe ili nekog blizu u ovim opisima, razgovor je dobar prvi korak.
        </p>
        <div className="mt-6 flex justify-center">
          <a
            href="#kontakt"
            className="rounded-full bg-primary px-7 py-3 font-medium text-white transition-colors hover:bg-primary-dark"
          >
            Zakažite razgovor
          </a>
        </div>
      </div>
    </section>
  );
}
