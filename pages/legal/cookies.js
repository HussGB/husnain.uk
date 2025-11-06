import Head from "next/head";
import LegalHeader from "@/components/LegalHeader";

export default function Cookies() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Cookie Policy | Husnain.UK",
    url: "https://husnain.uk/legal/cookies",
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-300">
      <Head>
        <title>Cookie & Data Use Notice | Husnain.UK</title>
        <meta
          name="description"
          content="Cookie and Data Use Notice for Husnain.UK describing analytics, cookies, and data collection practices."
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      <LegalHeader title="Cookie & Data Use Notice" subtitle="Last updated: November 2025" />

      <main className="max-w-5xl mx-auto px-6 py-12 md:py-20 space-y-10 text-slate-700 dark:text-slate-300 leading-relaxed">
        <Section title="No Tracking Cookies">
          <p>
            Husnain.UK does not use tracking cookies. Analytics are limited to
            aggregated, anonymous metrics like page views and device types.
          </p>
        </Section>

        <Section title="Privacy-Focused Analytics">
          <p>
            Analytics providers such as Vercel Analytics or Plausible are used in a
            privacy-friendly configuration with no personal identifiers.
          </p>
        </Section>

        <Section title="Compliance">
          <p>
            This site complies with UK GDPR and PECR regulations by default (“no-cookies
            by design”). No consent banners are necessary because no personal data is
            stored or tracked.
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
