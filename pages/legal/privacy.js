import Head from "next/head";
import LegalHeader from "@/components/LegalHeader";

export default function PrivacyPolicy() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy | Husnain.UK",
    url: "https://husnain.uk/legal/privacy",
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
        <title>Privacy Policy | Husnain.UK</title>
        <meta
          name="description"
          content="Privacy Policy for Husnain.UK — explaining how your data is handled, stored, and protected."
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      <LegalHeader title="Privacy Policy" subtitle="Last updated: November 2025" />

      <main className="max-w-5xl mx-auto px-6 py-12 md:py-20 space-y-12 text-slate-700 dark:text-slate-300 leading-relaxed">
        <div className="space-y-8">
          <p>
            This Privacy Policy explains how <strong>Husnain.UK</strong> (“I”) collects, uses, and protects information when you visit{" "}
            <a href="https://husnain.uk" className="text-blue-600 dark:text-blue-400 hover:underline">
              https://husnain.uk
            </a>.
          </p>

          <Section title="Information I Collect">
            <ul className="list-disc list-inside">
              <li>Anonymized IP addresses and browser metadata</li>
              <li>Referrer URLs and timestamps</li>
              <li>Minimal aggregated analytics (via Vercel)</li>
            </ul>
          </Section>

          <Section title="How Data Is Used">
            <ul className="list-disc list-inside">
              <li>To monitor uptime and performance</li>
              <li>To prevent abuse and spam</li>
              <li>To improve the browsing experience</li>
            </ul>
          </Section>

          <Section title="Cookies & Analytics">
            <p>
              This site may use cookie-free analytics such as <strong>Plausible</strong> or <strong>Vercel Analytics</strong>.
              No personal tracking or identifiers are stored.
            </p>
          </Section>

          <Section title="Hosting & Security">
            <p>
              Hosted securely by <strong>Vercel Inc.</strong> (San Francisco, USA) using HTTPS encryption.
              Source code is available at{" "}
              <a href="https://github.com/hussgb/husnain.uk" className="text-blue-600 dark:text-blue-400 hover:underline">
                github.com/hussgb/husnain.uk
              </a>.
            </p>
          </Section>

          <Section title="Contact">
            <p>
              For privacy requests or concerns, please email{" "}
              <strong>contact@husnain.uk</strong> (bot verification required before sending).
            </p>
          </Section>

          <Section title="Policy Updates">
            <p>
              This policy may be revised periodically. The latest version will always be posted here.
            </p>
          </Section>
        </div>
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
