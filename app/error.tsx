"use client";

import { useEffect } from "react";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    // Ovde dodaj logging (Sentry, itd.)
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-bg px-6 text-center">
      <p className="font-serif text-3xl text-primary-dark">Došlo je do greške</p>
      <p className="text-text-muted">Nešto nije u redu. Pokušaj ponovo.</p>
      <button
        onClick={reset}
        className="mt-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-dark"
      >
        Pokušaj ponovo
      </button>
    </main>
  );
}
