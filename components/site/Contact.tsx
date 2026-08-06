import { ContactForm } from "@/components/site/ContactForm";

const CONTACT_ITEMS = [
  {
    label: "Telefon",
    value: "+381 61 318 8204",
    href: "tel:+381613188204",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5a2.25 2.25 0 0 0 2.25-2.25v-1.372a1.5 1.5 0 0 0-1.264-1.481l-4.164-.694a1.5 1.5 0 0 0-1.539.771l-.61 1.219a11.25 11.25 0 0 1-5.322-5.322l1.22-.61a1.5 1.5 0 0 0 .77-1.539l-.693-4.164A1.5 1.5 0 0 0 6.622 4.5H5.25a2.25 2.25 0 0 0-2.25 2.25v0Z"
      />
    ),
  },
  {
    label: "Email",
    value: "mialunamoli2025@gmail.com",
    href: "mailto:mialunamoli2025@gmail.com",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0a2.25 2.25 0 0 0-2.25-2.25h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
      />
    ),
  },
  {
    label: "Lokacija",
    value: "Beograd, Srbija",
    href: "https://www.google.com/maps?q=Beograd,Srbija",
    icon: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
        />
      </>
    ),
  },
];

export function Contact() {
  return (
    <section id="kontakt">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold tracking-wide text-accent uppercase">
            Kontakt
          </p>
          <h2 className="font-serif text-3xl text-primary-dark md:text-4xl">
            Zakažite konsultacije
          </h2>
          <p className="mt-4 text-text-muted">
            Za sva pitanja i zakazivanje termina, slobodno se javite putem
            telefona ili emaila.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 md:items-start">
          <div className="grid gap-4">
            {CONTACT_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-primary/40 hover:bg-primary-light"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-light text-primary-dark">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    {item.icon}
                  </svg>
                </span>
                <span>
                  <span className="block text-xs text-text-muted">
                    {item.label}
                  </span>
                  <span className="block font-medium text-text">
                    {item.value}
                  </span>
                </span>
              </a>
            ))}

            <div className="overflow-hidden rounded-3xl border border-border shadow-sm">
              <iframe
                title="Lokacija - Beograd"
                src="https://www.google.com/maps?q=Beograd,Srbija&output=embed"
                className="h-56 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
