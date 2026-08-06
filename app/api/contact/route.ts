import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";
import { env } from "@/lib/env";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = contactFormSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { success: false, message: "Proverite unete podatke i pokušajte ponovo." },
      { status: 400 }
    );
  }

  const { MAILJET_API_KEY, MAILJET_SECRET_KEY, SITE_MAIL_SENDER, SITE_MAIL_RECEIVER } = env;

  if (!MAILJET_API_KEY || !MAILJET_SECRET_KEY || !SITE_MAIL_SENDER || !SITE_MAIL_RECEIVER) {
    console.error("Mailjet nije konfigurisan - nedostaju environment varijable.");
    return NextResponse.json(
      { success: false, message: "Slanje poruke trenutno nije moguće. Pokušajte kasnije." },
      { status: 500 }
    );
  }

  const { name, email, phone, message } = parsed.data;

  const mailjetResponse = await fetch("https://api.mailjet.com/v3.1/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${Buffer.from(`${MAILJET_API_KEY}:${MAILJET_SECRET_KEY}`).toString("base64")}`,
    },
    body: JSON.stringify({
      Messages: [
        {
          From: { Email: SITE_MAIL_SENDER, Name: "Sajt - Katarina Hess" },
          To: [{ Email: SITE_MAIL_RECEIVER, Name: "Katarina Hess" }],
          ReplyTo: { Email: email, Name: name },
          Subject: `Nova poruka sa sajta od ${name}`,
          TextPart: `Ime: ${name}\nEmail: ${email}\nTelefon: ${phone ?? "-"}\n\nPoruka:\n${message}`,
        },
      ],
    }),
  });

  if (!mailjetResponse.ok) {
    console.error("Mailjet error:", await mailjetResponse.text());
    return NextResponse.json(
      { success: false, message: "Slanje poruke nije uspelo. Pokušajte ponovo." },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true, message: "Poruka je uspešno poslata." });
}
