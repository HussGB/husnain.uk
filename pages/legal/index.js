import Head from "next/head";
import Link from "next/link";
import LegalHeader from "@/components/LegalHeader";

export default function LegalIndex() {
  const policies = [
    {
      title: "Privacy Policy",
      desc: "Learn how I handle, store, and protect your data when using this website.",
      href: "/legal/privacy",
    },
    {
      title: "Terms of Use",
      desc: "Understand your rights and responsibilities when using this site.",
      href: "/legal/terms",
    },
    {
      title: "Cookie & Data Use Notice",
      desc: "Details on analytics, cookies, and data collection practices.",
      href: "/legal/cookies",
    },
    {
      title: "Impressum / Legal Disclosure",
      desc: "Operator information and transparency in accordance with EU/UK laws.",
      href: "/legal/impressum",
    },
    {
      title: "Accessibility Statement",
      desc: "My commitment to inclusive, accessible, and user-friendly design.",
      href: "/legal/accessibility",
    },
    {
      title: "Open Source Notice",
      desc: "Acknowledgements for the technologies and frameworks powering this website.",
      href: "/legal/open-source",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Legal Policies | Husnain.UK",
    description: "Legal, privacy, and compliance information for Husnain.UK.",
    url: "https://husnain.uk/legal",
    hasPart: policies.map((p) => ({
      "@type": "WebPage",
      name: p.title,
      url: `https://husnain.uk${p.href}`,
    })),
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
        <title>Legal Policies | Husnain.UK</title>
        <meta
          name="description"
          content="Legal, privacy, and compliance documentation for Husnain.UK — including terms, privacy, and accessibility."
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      <LegalHeader
        title="Legal Policies"
        subtitle="Transparency, compliance, and openness — all in one place."
      />

      <main className="max-w-5xl mx-auto px-6 py-12 md:py-20 space-y-10 text-slate-700 dark:text-slate-300 leading-relaxed">
        <p className="text-center max-w-3xl mx-auto text-sm md:text-base text-slate-600 dark:text-slate-400">
          Below you’ll find all official legal documents relating to the Husnain.UK website, 
          projects, and related online services. Each section outlines how data, content, and user 
          interactions are managed in accordance with ethical and professional standards.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
          {policies.map((p) => (
            <Link
              key={p.title}
              href={p.href}
              className="block group rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/70 backdrop-blur-sm p-6 transition hover:border-slate-400 dark:hover:border-slate-600 hover:shadow-md"
            >
              <h2 className="font-semibold text-slate-900 dark:text-slate-50 text-lg mb-1 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition">
                {p.title}
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {p.desc}
              </p>
            </Link>
          ))}
        </div>

        <div className="pt-12 border-t border-slate-200 dark:border-slate-800 text-center text-xs text-slate-500 dark:text-slate-400">
          <p>
            This site is hosted on <strong>Vercel</strong> and maintained by{" "}
            <strong>Mohammed Husnain (HussGB)</strong>.  
            For any concerns, please visit the{" "}
            contact section on our homepage (bot verification may be required*).
          </p>
        </div>
      </main>
    </div>
  );
}
