import Head from "next/head";
import LegalHeader from "@/components/LegalHeader";

export function Section({ title, children }) {
  return (
    <section className="border border-slate-200 dark:border-slate-800 rounded-xl p-6 bg-white/80 dark:bg-slate-900/70 backdrop-blur-sm shadow-sm space-y-3">
      <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50">{title}</h2>
      {children}
    </section>
  );
}

export function BulletList({ children }) {
  return <ul className="list-disc list-inside space-y-2">{children}</ul>;
}

export default function LegalDocument({ title, description, path, subtitle, children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${title} | Husnain.UK`,
    description,
    url: `https://www.husnain.uk${path}`,
    isPartOf: { "@type": "WebSite", name: "Husnain.UK", url: "https://www.husnain.uk/" },
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-300">
      <Head>
        <title>{title} | Husnain.UK</title>
        <meta name="description" content={description} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>
      <LegalHeader title={title} subtitle={subtitle || "Last reviewed: 27 September 2026"} />
      <main className="max-w-5xl mx-auto px-6 py-12 md:py-20 space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed">
        <p className="text-sm border-l-4 border-slate-400 pl-4 text-slate-600 dark:text-slate-400">
          These documents describe the current intended operation of Husnain.UK. They are not a substitute for advice from a UK solicitor. Customer engagements are governed by the written quote or contract agreed for that engagement; that contract should prevail where it contains more specific terms.
        </p>
        {children}
      </main>
    </div>
  );
}
