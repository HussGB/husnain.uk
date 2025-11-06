import Head from "next/head";
import LegalHeader from "@/components/LegalHeader";

export default function Impressum() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mohammed Husnain",
    alternateName: "HussGB",
    jobTitle: "Full-Stack Developer & Cybersecurity Student",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Birmingham",
      addressCountry: "United Kingdom",
    },
    email: "contact@husnain.uk",
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-300">
      <Head>
        <title>Impressum | Husnain.UK</title>
        <meta
          name="description"
          content="Legal disclosure (Impressum) and ownership information for Husnain.UK, operated by Mohammed Husnain."
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      <LegalHeader title="Impressum / Legal Disclosure" subtitle="Last updated: November 2025" />

      <main className="max-w-5xl mx-auto px-6 py-12 md:py-20 space-y-10 text-slate-700 dark:text-slate-300 leading-relaxed">
        <Section title="Website Owner">
          <p>
            This website is owned and operated by <strong>Mohammed Husnain</strong>
            (online alias: <strong>HussGB</strong>), based in Birmingham, United Kingdom.
          </p>
        </Section>

        <Section title="Contact">
          <p>
            Email: <strong>contact@husnain.uk</strong> (verification required before sending)
          </p>
        </Section>

        <Section title="Purpose of Website">
          <p>
            Husnain.UK serves as a personal portfolio and central brand hub for professional
            projects and collaborations. It is not operated as a registered company.
          </p>
        </Section>
      </main>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="border border-slate-200 dark:border-slate-800 rounded-xl p-6 bg-white/80 dark:bg-slate-900/70 backdrop-blur-sm shadow-sm space-y-2">
      <h2 className="text-lg font-semibold">{title}</h2>
      {children}
    </div>
  );
}
