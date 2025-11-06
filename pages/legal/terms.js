import Head from "next/head";
import LegalHeader from "@/components/LegalHeader";

export default function Terms() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Terms of Use | Husnain.UK",
    url: "https://husnain.uk/legal/terms",
    about: {
      "@type": "Person",
      name: "Mohammed Husnain",
      alternateName: "HussGB",
      sameAs: [
        "https://github.com/hussgb",
        "https://www.linkedin.com/in/husnainuk",
        "https://discord.com/users/hussgb",
      ],
    },
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-300">
      <Head>
        <title>Terms of Use | Husnain.UK</title>
        <meta
          name="description"
          content="Terms of Use outlining acceptable usage, intellectual property, and disclaimers for Husnain.UK."
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      <LegalHeader title="Terms of Use" subtitle="Last updated: November 2025" />

      <main className="max-w-5xl mx-auto px-6 py-12 md:py-20 space-y-12 text-slate-700 dark:text-slate-300 leading-relaxed">
        <Section title="Purpose">
          <p>
            Husnain.UK serves as the personal portfolio and professional website of{" "}
            <strong>Mohammed Husnain (HussGB)</strong>. Its purpose is to showcase
            projects, professional experience, and contact information.
          </p>
        </Section>

        <Section title="Intellectual Property">
          <p>
            All written content, designs, and code found on this website are © Mohammed
            Husnain unless otherwise stated. Reproduction or redistribution is
            prohibited without permission.
          </p>
        </Section>

        <Section title="Open Source & Attribution">
          <p>
            Open-source repositories linked on this site are governed by their individual
            licenses. You must comply with each license’s terms when using or modifying
            the source code.
          </p>
        </Section>

        <Section title="Disclaimer">
          <p>
            All information provided on this website is for informational and
            educational purposes only. No guarantees are made regarding completeness or
            accuracy.
          </p>
        </Section>

        <Section title="Liability">
          <p>
            Mohammed Husnain is not liable for any damages resulting from use or
            inability to use this site or linked resources.
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
