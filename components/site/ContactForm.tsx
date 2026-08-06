"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

const inputClassName =
  "w-full rounded-xl border border-border bg-surface px-4 py-2.5 text-sm text-text outline-none transition-colors focus:border-primary";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const phone = String(formData.get("phone") ?? "").trim();

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
      ...(phone ? { phone } : {}),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data: { success: boolean; message?: string } = await response.json();

      if (!response.ok || !data.success) {
        setStatus("error");
        setErrorMessage(data.message ?? "Došlo je do greške. Pokušajte ponovo.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage(
        "Došlo je do greške. Proverite internet konekciju i pokušajte ponovo."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-border bg-bg p-8 text-center">
        <p className="font-serif text-lg text-primary-dark">
          Poruka je poslata
        </p>
        <p className="mt-2 text-sm text-text-muted">
          Hvala na poruci. Odgovoriću vam u najkraćem mogućem roku.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl border border-border bg-bg p-6"
    >
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-text">
          Ime i prezime
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          minLength={2}
          maxLength={100}
          autoComplete="name"
          className={inputClassName}
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-text">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={inputClassName}
        />
      </div>

      <div>
        <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-text">
          Telefon <span className="text-text-muted">(opciono)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className={inputClassName}
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-text">
          Poruka
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={2000}
          rows={4}
          className={`${inputClassName} resize-none`}
        />
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm text-red-600">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Slanje..." : "Pošaljite poruku"}
      </button>
    </form>
  );
}
