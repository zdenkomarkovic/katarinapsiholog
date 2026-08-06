import type { Metadata } from "next";
import { Lora, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { JsonLd } from "@/components/seo/JsonLd";

const lora = Lora({
  subsets: ["latin", "latin-ext"],
  variable: "--font-lora",
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-nunito-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${SITE_NAME} | Psihoterapija dece, adolescenata i odraslih`,
  description:
    "Katarina Hess - diplomirani psiholog i sertifikovani kognitivni i porodični terapeut u Beogradu. Psihoterapija za decu, adolescente i odrasle.",
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: SITE_URL,
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr" className={`${lora.variable} ${nunitoSans.variable}`}>
      <body className="bg-bg text-text antialiased">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Psychologist",
            name: "Katarina Hess",
            jobTitle:
              "Diplomirani psiholog, sertifikovani kognitivni i porodični terapeut",
            areaServed: "Beograd, Srbija",
            telephone: "+381613188204",
            email: "mialunamoli2025@gmail.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Beograd",
              addressCountry: "RS",
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}
