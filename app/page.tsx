import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Specializations } from "@/components/site/Specializations";
import { Signs } from "@/components/site/Signs";
import { Approach } from "@/components/site/Approach";
import { Process } from "@/components/site/Process";
import { FAQ, FAQ_ITEMS } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const metadata = buildMetadata({
  title: "Početna",
  description:
    "Katarina Hess - diplomirani psiholog i sertifikovani kognitivni i porodični terapeut u Beogradu. Psihoterapija za decu, adolescente i odrasle.",
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ_ITEMS.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }}
      />
      <Header />
      <main>
        <Hero />
        <About />
        <Specializations />
        <Signs />
        <Approach />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
