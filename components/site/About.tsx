export function About() {
  return (
    <section id="o-meni" className="border-b border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[minmax(0,320px)_1fr] md:items-start">
        {/* Placeholder za fotografiju Katarine Hess — zameniti stvarnom slikom */}
        <div className="mx-auto flex aspect-3/4 w-full max-w-[320px] flex-col items-center justify-center gap-3 rounded-3xl border-2 border-dashed border-primary/40 bg-primary-light text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            className="h-16 w-16 text-primary/60"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
          <p className="px-6 text-sm text-primary-dark/70">
            Fotografija
            <br />
            Katarine Hess
          </p>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold tracking-wide text-accent uppercase">
            O meni
          </p>
          <h2 className="font-serif text-3xl text-primary-dark md:text-4xl">
            Katarina Hess
          </h2>
          <p className="mt-2 text-lg text-text-muted">
            Diplomirani psiholog i sertifikovani kognitivni i porodični
            terapeut
          </p>

          <div className="mt-6 space-y-4 text-text-muted">
            <p>
              Bavim se psihoterapijom dece, adolescenata i odraslih, pružajući
              siguran i podržavajući prostor u kom klijenti mogu da istraže
              svoje misli, osećanja i odnose. Kroz individualni i porodični
              rad pomažem klijentima da bolje razumeju sebe, prevaziđu
              teškoće i izgrade zdravije obrasce ponašanja.
            </p>
            <p>
              U radu se oslanjam na principe kognitivno-bihejvioralne i
              porodične terapije, prilagođavajući pristup potrebama svakog
              pojedinca i uzrastu sa kojim radim — od najmlađih klijenata do
              odraslih osoba.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-bg p-5">
              <p className="font-serif text-lg text-primary-dark">
                Obrazovanje
              </p>
              <p className="mt-1 text-sm text-text-muted">
                Diplomirani psiholog
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-bg p-5">
              <p className="font-serif text-lg text-primary-dark">
                Sertifikacije
              </p>
              <p className="mt-1 text-sm text-text-muted">
                Kognitivni i porodični terapeut
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
