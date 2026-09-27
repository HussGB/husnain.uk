import "@/styles/globals.css";

import Head from "next/head";
import { useRouter } from "next/router";

const SITE_URL = "https://www.husnain.uk";
const PAGE_METADATA = {
  "/": {
    title: "Mohammed Husnain - Full-Stack Developer & Cybersecurity Student",
    description:
      "Official portfolio of Mohammed Husnain, a full-stack developer and cybersecurity student based in Birmingham, UK.",
  },
  "/legal": {
    title: "Legal Policies | Husnain.UK",
    description: "Legal, privacy, and compliance information for Husnain.UK.",
  },
  "/legal/accessibility": {
    title: "Accessibility Statement | Husnain.UK",
    description: "Accessibility information and commitments for Husnain.UK.",
  },
  "/legal/cookies": {
    title: "Cookie & Data Use Notice | Husnain.UK",
    description: "How Husnain.UK uses cookies, analytics, and data.",
  },
  "/legal/impressum": {
    title: "Impressum / Legal Disclosure | Husnain.UK",
    description: "Operator and legal disclosure information for Husnain.UK.",
  },
  "/legal/open-source": {
    title: "Open Source Notice | Husnain.UK",
    description: "Open source acknowledgements for the Husnain.UK website.",
  },
  "/legal/customer-services": {
    title: "Customer Services Terms | Husnain.UK",
    description: "Terms for website development, hosting, maintenance, consultations, and security services.",
  },
  "/legal/privacy": {
    title: "Privacy Policy | Husnain.UK",
    description: "How Husnain.UK handles, stores, and protects personal data.",
  },
  "/legal/terms": {
    title: "Terms of Use | Husnain.UK",
    description: "Terms and conditions for using the Husnain.UK website.",
  },
};

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const pathname = router.asPath.split("?")[0].replace(/\/$/, "") || "/";
  const canonical = `${SITE_URL}${pathname === "/" ? "/" : pathname}`;
  const metadata = PAGE_METADATA[pathname] || PAGE_METADATA["/"];

  return (
    <>
      <Head>
        <link rel="canonical" href={canonical} />
        <meta name="robots" content="index, follow" />
        <meta property="og:site_name" content="Husnain.UK" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:url" content={canonical} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={`${SITE_URL}/preview.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={`${SITE_URL}/preview.png`} />
        <meta name="theme-color" content="#0f172a" />
        <link rel="icon" href="/favicon.png" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Husnain.UK RSS feed"
          href="/rss.xml"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
