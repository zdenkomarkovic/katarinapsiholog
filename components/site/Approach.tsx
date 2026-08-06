import Image from "next/image";

const PRINCIPLES = [
  {
    title: "Kognitivna terapija",
    description:
      "Rad na prepoznavanju i menjanju obrazaca mišljenja koji doprinose anksioznosti, stresu i drugim teškoćama.",
  },
  {
    title: "Porodična terapija",
    description:
      "Unapređenje komunikacije i odnosa unutar porodice, uz razumevanje uloge svakog člana u zajedničkoj dinamici.",
  },
  {
    title: "Individualni pristup",
    description:
      "Svaki klijent je jedinstven — terapijski plan se prilagođava uzrastu, potrebama i ciljevima svake osobe.",
  },
];

export function Approach() {
  return (
    <section id="pristup" className="border-b border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
        <div className="relative order-2 aspect-4/3 overflow-hidden rounded-3xl shadow-xl md:order-1">
          <Image
            src="https://picsum.photos/seed/katarina-pristup/1000/750"
            alt="Miran i podržavajući terapijski prostor"
            fill
            sizes="(min-width: 768px) 45vw, 90vw"
            className="object-cover"
          />
        </div>

        <div className="order-1 md:order-2">
          <p className="mb-3 text-sm font-semibold tracking-wide text-accent uppercase">
            Pristup radu
          </p>
          <h2 className="font-serif text-3xl text-primary-dark md:text-4xl">
            Kognitivno-bihejvioralni i porodični pristup
          </h2>
          <p className="mt-4 text-text-muted">
            Terapija se zasniva na razumevanju veze između misli, osećanja i
            ponašanja, uz uvažavanje porodičnog i socijalnog konteksta u kom
            klijent živi.
          </p>

          <ul className="mt-8 space-y-6">
            {PRINCIPLES.map((principle) => (
              <li key={principle.title} className="flex gap-4">
                <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-accent" />
                <div>
                  <p className="font-serif text-lg text-primary-dark">
                    {principle.title}
                  </p>
                  <p className="mt-1 text-sm text-text-muted">
                    {principle.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
