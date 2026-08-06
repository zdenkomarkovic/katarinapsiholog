import { buildMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Stranica nije pronađena",
  noIndex: true,
});

export default function NotFoundPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-bg px-6 text-center">
      <p className="font-serif text-6xl text-primary-dark">404</p>
      <p className="text-text-muted">Stranica nije pronađena.</p>
      <Link
        href="/"
        className="mt-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-dark"
      >
        Vrati se na početnu
      </Link>
    </main>
  );
}
