import Head from "next/head";
import LegalHeader from "@/components/LegalHeader";

export default function OpenSource() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Open Source Notice | Husnain.UK",
    url: "https://husnain.uk/legal/open-source",
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-300">
      <Head>
        <title>Open Source Notice | Husnain.UK</title>
        <meta
          name="description"
          content="Open source acknowledgements for Husnain.UK including Next.js, TailwindCSS, and other dependencies."
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      <LegalHeader title="Open Source Notice" subtitle="Acknowledging the technologies that power this site" />

      <main className="max-w-5xl mx-auto px-6 py-12 md:py-20 space-y-10 text-slate-700 dark:text-slate-300 leading-relaxed">
        <Section title="Core Technologies">
          <ul className="list-disc list-inside">
            <li>Next.js — MIT License © Vercel</li>
            <li>React — MIT License © Meta Platforms</li>
            <li>TailwindCSS — MIT License © Tailwind Labs</li>
            <li>Font Awesome & React Icons — MIT License</li>
          </ul>
        </Section>

        <Section title="Source Code">
          <p>
            The source code for this website is publicly available on{" "}
            <a
              href="https://github.com/hussgb/husnain.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              GitHub
            </a>.
          </p>
        </Section>

        <Section title="Attribution">
          <p>
            I extend my thanks to the open-source community whose work enables developers
            like me to build modern, performant web experiences.
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
