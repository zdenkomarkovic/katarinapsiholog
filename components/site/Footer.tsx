import Image from "next/image";
import Link from "next/link";
import { SPECIALIZATIONS } from "@/lib/specializations";

const NAV_LINKS = [
  { href: "/#o-meni", label: "O meni" },
  { href: "/#pristup", label: "Pristup radu" },
  { href: "/#pitanja", label: "Pitanja" },
  { href: "/#kontakt", label: "Kontakt" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Katarina Hess logo"
                width={88}
                height={88}
                className="h-22 w-22 rounded-full object-cover"
              />
              <span className="font-serif text-lg text-primary-dark">Katarina Hess</span>
            </Link>
            <p className="mt-4 text-sm text-text-muted">
              Diplomirani psiholog i sertifikovani kognitivni i porodični terapeut. Psihoterapija za
              decu, adolescente i odrasle u Beogradu.
            </p>
          </div>

          <div>
            <p className="font-serif text-sm text-primary-dark">Navigacija</p>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted transition-colors hover:text-primary-dark"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-serif text-sm text-primary-dark">Specijalizacije</p>
            <ul className="mt-4 space-y-2">
              {SPECIALIZATIONS.map((spec) => (
                <li key={spec.slug}>
                  <Link
                    href={`/specijalizacije/${spec.slug}`}
                    className="text-sm text-text-muted transition-colors hover:text-primary-dark"
                  >
                    {spec.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-serif text-sm text-primary-dark">Kontakt</p>
            <ul className="mt-4 space-y-2 text-sm text-text-muted">
              <li>
                <a href="tel:+381613188204" className="transition-colors hover:text-primary-dark">
                  +381 61 318 8204
                </a>
              </li>
              <li>
                <a
                  href="mailto:mialunamoli2025@gmail.com"
                  className="transition-colors hover:text-primary-dark"
                >
                  mialunamoli2025@gmail.com
                </a>
              </li>
              <li>Beograd, Srbija</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 border-t border-border pt-8 text-xs text-text-muted sm:flex-row sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Katarina Hess. Sva prava zadržana.</p>
          <p>
            Izrada sajta:{" "}
            <a
              href="https://manikamwebsolutions.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-text-muted transition-colors hover:text-primary-dark"
            >
              Manikam Web Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
