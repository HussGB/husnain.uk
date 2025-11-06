import Head from "next/head";
import { useState, useEffect } from "react";
import {
  FaEnvelope,
  FaCopy,
  FaCheck,
  FaReact,
  FaNodeJs,
  FaBars,
  FaTimes,
  FaDatabase,
  FaServer,
  FaChevronUp,
  FaChevronDown,
  FaGithub,
  FaLinkedin,
  FaCloud,
  FaDiscord,
  FaLaptopCode,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiJavascript } from "react-icons/si";
import { FiSun, FiMoon } from "react-icons/fi";

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [verified, setVerified] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");

const [theme, setTheme] = useState(() => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("theme") || "dark";
  }
  return "dark";
});

  const [info, setInfo] = useState({
    headline: "Full-stack developer & Cybersecurity student",
    followers: 0,
    publicRepos: 0,
  });

  useEffect(() => {
    fetch("/api/current")
      .then((res) => res.json())
      .then((data) => setInfo(data))
      .catch(() => {});
  }, []);


  const sections = ["about", "skills", "projects", "experience", "contact"];

useEffect(() => {
  if (typeof window === "undefined") return;
  const stored = localStorage.getItem("theme");
  const initial = stored === "light" ? "light" : "dark";
  setTheme(initial);
  setMounted(true);

  if (initial === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}, []);


const toggleTheme = () => {
  const nextTheme = theme === "dark" ? "light" : "dark";
  setTheme(nextTheme);
  localStorage.setItem("theme", nextTheme);

  if (nextTheme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

  const handleVerify = (e) => {
    e.preventDefault();
    const input = e.target.elements.verification.value.trim().toLowerCase();
    if (input === "human") {
      setVerified(true);
      setError("");
    } else {
      setError("Please type 'human' exactly to verify.");
      setVerified(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("contact@husnain.uk");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };


if (!mounted) return null; // Prevents hydration mismatch

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50 transition-colors duration-500">
     
     <Head>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Mohammed Husnain",
      alternateName: "Husnain.UK",
      url: "https://husnain.uk",
      sameAs: [
        "https://github.com/hussgb",
        "https://www.linkedin.com/in/husnainuk",
        "https://discord.com/users/hussgb"
      ],
      jobTitle: "Full-Stack Developer & Cybersecurity Student",
      worksFor: [
        {
          "@type": "Organization",
          name: "Next Retail Ltd",
          url: "https://www.next.co.uk",
          sameAs: ["https://www.linkedin.com/company/next-plc/"]
        },
        {
          "@type": "Organization",
          name: "Husnain.UK",
          url: "https://husnain.uk"
        }
      ],
      alumniOf: {
        "@type": "Organization",
        name: "Royal Air Force Air Cadets",
        url: "https://www.raf.mod.uk/aircadets/"
      },
      description:
        "Mohammed Husnain — Full-stack developer, cybersecurity student, and Sales Consultant at Next Retail. Building secure and performant digital systems through Husnain.UK.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Birmingham",
        addressRegion: "West Midlands",
        addressCountry: "United Kingdom"
      },
      image: "https://husnain.uk/preview.png",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Online Presence",
        url: "https://discord.com/users/hussgb"
      }
    })
  }}
/>


  <title>Mohammed Husnain — Full-Stack Developer & Cybersecurity Student</title>
  <meta
    name="description"
    content="Official portfolio of Mohammed Husnain (aka HussGB), a full-stack developer and cybersecurity student based in Birmingham, UK. Building dashboards, client portals, and secure web systems under Husnain.UK."
  />
  <meta
    name="keywords"
    content="HussGB, HussGB Discord, Discord, Mohammed Husnain, Husnain.UK, full-stack developer, web developer Birmingham, Next.js, TailwindCSS, Node.js, cybersecurity student, Idley Host, Idley, FalixNodes, Birmingham Inventors, Idle Bee Farm, Royal Air Force Air Cadets, RAFAC, RAF Cadets"
  />
  <meta name="author" content="Mohammed Husnain" />
  <meta name="robots" content="index, follow" />

  {/* Open Graph / Social preview */}
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://husnain.uk/" />
  <meta property="og:title" content="Mohammed Husnain — Full-Stack Developer & Cybersecurity Student" />
  <meta
    property="og:description"
    content="Full-stack developer & cybersecurity student from Birmingham, UK. Creator of Husnain.UK and former co-founder of Idle Development."
  />
  <meta property="og:image" content="https://husnain.uk/preview.png" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Mohammed Husnain — Full-Stack Developer & Cybersecurity Student" />
  <meta
    name="twitter:description"
    content="Building secure, high-performance websites and applications with Next.js, TailwindCSS, and Node.js."
  />
  <meta name="twitter:image" content="https://husnain.uk/preview.png" />

  {/* Favicon */}
  <link rel="icon" href="/favicon.png" />
  <link rel="canonical" href="https://husnain.uk/" />
</Head>

     
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur border-b border-slate-200/70 dark:border-slate-800/70">
        <div className="max-w-6xl mx-auto px-4 md:px-6 flex items-center justify-between h-16">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full border border-slate-300 dark:border-slate-700 flex items-center justify-center text-xs font-semibold">
             <img
      src="/favicon.png"
      alt="Husnain Logo"
      className="h-full w-full object-cover"
    />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-semibold text-sm md:text-base">
                Mohammed Husnain
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Full-Stack Developer · Birmingham, UK
              </span>
            </div>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8 text-sm">
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="ml-2 inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              {theme === "dark" ? (
                <>
                  <FiSun className="h-4 w-4" />
                  <span>Light</span>
                </>
              ) : (
                <>
                  <FiMoon className="h-4 w-4" />
                  <span>Dark</span>
                </>
              )}
            </button>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>
            <button
              className="p-2 rounded-md text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              onClick={() => setNavOpen(!navOpen)}
            >
              {navOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile nav dropdown */}
        {navOpen && (
          <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur">
            <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-1">
              {sections.map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className="py-2 text-sm text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white transition"
                  onClick={() => setNavOpen(false)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* MAIN CONTENT */}
      <main className="pt-20 md:pt-24">
        {/* HERO */}
        
        <section
          id="home"
          className="px-4 md:px-6 py-12 md:py-16 border-b border-slate-200/70 dark:border-slate-800/70"
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] gap-10 items-center">
            {/* Left: intro */}
            <div className="space-y-6">
              <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-800 px-3 py-1 text-xs font-medium text-slate-600 dark:text-slate-300">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Available for opportunities
              </p>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
  Mohammed Husnain{" "}
  <span className="block text-slate-500 dark:text-slate-400 text-lg font-normal mt-1">
    (also known online as <span className="font-medium text-slate-800 dark:text-slate-200">HussGB</span>)
  </span>
</h1>

              <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
                I design and build web applications, dashboards, and portals that
                balance performance, security, and user experience. Currently
                developing my brand as{" "}
                <span className="font-medium text-slate-900 dark:text-slate-100">
                  Husnain.UK
                </span>{" "}
                while studying Cybersecurity.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-md bg-slate-900 text-slate-50 dark:bg-slate-50 dark:text-slate-950 px-4 py-2 text-sm font-medium hover:bg-slate-800 dark:hover:bg-slate-200 transition"
                >
                  View selected work
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-md border border-slate-300 dark:border-slate-700 px-4 py-2 text-sm font-medium text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                >
                  Contact / Connect
                </a>
              </div>

              <div className="flex flex-wrap gap-4 text-xs text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-500" />
                  Birmingham, UK
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-500" />
                  Full-Stack · Cybersecurity
                </div>
              </div>
            </div>

            {/* Right: summary card */}
            <div className="space-y-4">
              <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 backdrop-blur p-5 flex flex-col gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                    Snapshot
                  </p>
                  <p className="mt-1 text-sm text-slate-700 dark:text-slate-200">
                    Developer, problem-solver, and builder of online systems used by
                    real users and teams.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div className="space-y-1">
                    <p className="text-slate-500 dark:text-slate-400">
                      Core stack
                    </p>
                    <p className="font-medium text-slate-900 dark:text-slate-50">
                      React · Next.js · Node.js
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-slate-500 dark:text-slate-400">Focus</p>
                    <p className="font-medium text-slate-900 dark:text-slate-50">
                      Dashboards · Portals
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-slate-500 dark:text-slate-400">
                      Databases
                    </p>
                    <p className="font-medium text-slate-900 dark:text-slate-50">
                      MySQL · Prisma
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-slate-500 dark:text-slate-400">Infra</p>
                    <p className="font-medium text-slate-900 dark:text-slate-50">
                      VPS · Linux · Cloud
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 pt-2 border-t border-slate-200 dark:border-slate-800">
                  <a
                    href="https://github.com/hussgb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white transition"
                  >
                    <FaGithub />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/husnainuk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white transition"
                  >
                    <FaLinkedin />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section
          id="about"
          className="px-4 md:px-6 py-12 md:py-16 border-b border-slate-200/70 dark:border-slate-800/70 bg-slate-100/60 dark:bg-slate-950"
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-[minmax(0,2.5fr)_minmax(0,2fr)] gap-10">
            <div className="space-y-4">
              <p className="text-xs font-semibold tracking-[0.22em] uppercase text-slate-500 dark:text-slate-400">
                About
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold">
                Building reliable systems with a practical, security-minded
                approach.
              </h2>
              <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                I enjoy taking ideas from rough concepts to functional products:
                defining structure, designing interfaces, and implementing full-stack
                logic. A lot of my work sits at the intersection of{" "}
                <span className="font-medium">developer tooling</span>,{" "}
                <span className="font-medium">client dashboards</span>, and{" "}
                <span className="font-medium">automation</span>.
              </p>
              <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                I care about consistent UX, readable code, and systems that are easy
                to maintain months later – not just quick demos.
              </p>
            </div>

            <div className="grid gap-4 text-sm">
                 <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 p-4">
      <p className="text-xs text-slate-500 dark:text-slate-400">Currently</p>
      <p className="mt-1 font-medium text-slate-900 dark:text-slate-50">
        {info.headline}
      </p>
      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
        {info.followers} GitHub followers · {info.publicRepos} public repos
      </p>
    </div>
              <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 p-4">
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  I often work on
                </p>
                <ul className="mt-1 space-y-1 text-slate-700 dark:text-slate-200">
                  <li>• Billing panels & payment flows</li>
                  <li>• Client portals & admin dashboards</li>
                  <li>• Automation scripts and internal tools</li>
                </ul>
                
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
<section
          id="services"
          className="px-4 md:px-6 py-16 border-b border-slate-200/70 dark:border-slate-800/70 bg-slate-100/70 dark:bg-slate-900/60"
        >
          <div className="max-w-6xl mx-auto text-center space-y-10">
            <div>
              <p className="text-xs font-semibold tracking-[0.22em] uppercase text-slate-500 dark:text-slate-400">
                Services
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold">
                How I can help your business
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3 text-left">
              {[
                {
                  title: "Website Design & Builds",
                  desc: "Modern, responsive websites crafted with TailwindCSS and Next.js to reflect your brand professionally.",
                  icon: <SiNextdotjs />,
                },
                {
                  title: "Web Applications & Dashboards",
                  desc: "Custom portals, admin panels, and client dashboards built with clean backend logic and secure authentication.",
                  icon: <FaServer />,
                },
                {
                  title: "Hosting & Maintenance",
                  desc: "Managed VPS hosting, updates, and ongoing support — so your site stays fast, reliable, and stress-free.",
                  icon: <FaCloud />,
                },
              ].map((s) => (
                <div
                  key={s.title}
                  className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/50 backdrop-blur-sm p-6 flex flex-col gap-3 hover:shadow-md transition"
                >
                  <div className="text-xl text-slate-700 dark:text-slate-200">
                    {s.icon}
                  </div>
                  <h3 className="font-medium text-slate-900 dark:text-slate-50">
                    {s.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* SKILLS */}
        <section
          id="skills"
          className="px-4 md:px-6 py-12 md:py-16 border-b border-slate-200/70 dark:border-slate-800/70"
        >
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <p className="text-xs font-semibold tracking-[0.22em] uppercase text-slate-500 dark:text-slate-400">
                  Skills
                </p>
                <h2 className="text-2xl md:text-3xl font-semibold">
                  Core stack & capabilities
                </h2>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {/* Core tech */}
              <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 p-5 space-y-4">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                  Core technologies
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <SkillItem icon={<SiJavascript />} label="JavaScript / TS" />
                  <SkillItem icon={<FaReact />} label="React" />
                  <SkillItem icon={<SiNextdotjs />} label="Next.js" />
                  <SkillItem icon={<FaNodeJs />} label="Node.js" />
                  <SkillItem icon={<SiTailwindcss />} label="TailwindCSS" />
                  <SkillItem icon={<FaDatabase />} label="MySQL / Prisma" />
                </div>
              </div>

              {/* Backend & infra */}
              <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 p-5 space-y-3 text-sm">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                  Backend & infrastructure
                </p>
                <ul className="space-y-1 text-slate-700 dark:text-slate-200">
                  <li>• REST APIs, authentication, role-based access</li>
                  <li>• Server-side rendering & dynamic routes</li>
                  <li>• VPS hosting, basic DevOps, process managers</li>
                  <li>• Monitoring, logging, and troubleshooting</li>
                </ul>
              </div>

              {/* Product & UX */}
              <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 p-5 space-y-3 text-sm">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                  Product & UX
                </p>
                <ul className="space-y-1 text-slate-700 dark:text-slate-200">
                  <li>• Designing flows for real users, not just mockups</li>
                  <li>• Dashboard & portal layouts that scale</li>
                  <li>• Clear information hierarchy & navigation</li>
                  <li>• Iterative improvement based on feedback</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section
          id="projects"
          className="px-4 md:px-6 py-12 md:py-16 border-b border-slate-200/70 dark:border-slate-800/70 bg-slate-100/60 dark:bg-slate-950"
        >
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <p className="text-xs font-semibold tracking-[0.22em] uppercase text-slate-500 dark:text-slate-400">
                  Selected work
                </p>
                <h2 className="text-2xl md:text-3xl font-semibold">
                  Projects that represent how I work
                </h2>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Cyper Billing",
                  desc: "Full-stack billing panel with PayPal integration and telemetry designed for a SaaS-like experience.",
                  img: "/CyperBilling.png",
                  tags: ["Next.js", "Node.js", "Payments"],
                },
                {
                  title: "Client / Tenant Portal",
                  desc: "Multi-role portal with dashboards, order views, and admin capabilities for managing users and services.",
                  img: "/TenancyPortal.jpg",
                  tags: ["Dashboards", "Auth", "UX"],
                },
                {
                  title: "Automation & Internal Tools",
                  desc: "Node-based tools that reduce repetitive work, manage servers, and provide data visibility.",
                  img: "/AutomationCode.png",
                  tags: ["Automation", "CLI", "Ops"],
                },
              ].map((p) => (
                <article
                  key={p.title}
                  className="group overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 hover:border-slate-400 dark:hover:border-slate-600 transition"
                >
                  <div className="relative h-40 overflow-hidden border-b border-slate-200/80 dark:border-slate-800">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 space-y-2 text-sm">
                    <h3 className="font-semibold text-slate-900 dark:text-slate-50">
                      {p.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {p.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="inline-flex items-center rounded-full border border-slate-200 dark:border-slate-700 px-2 py-0.5 text-[11px] text-slate-600 dark:text-slate-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>


    <section
      id="experience"
      className="px-4 md:px-6 py-16 border-b border-slate-200/70 dark:border-slate-800/70"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        <div>
          <p className="text-xs font-semibold tracking-[0.22em] uppercase text-slate-500 dark:text-slate-400">
            Experience
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold">
            Where I’ve been learning, building, and growing
          </h2>
        </div>

        {/* STORYLINE INTRO */}
        <div className="prose dark:prose-invert text-sm md:text-base leading-relaxed max-w-none">
          <p>
            My journey in tech began back in <strong>2017</strong> when I was only ten years old.
            I co-founded my first Discord bot, <strong>Mee5</strong>, and that curiosity sparked
            everything that followed. Over the years I’ve transitioned from hobbyist scripting to
            developing production-grade systems, learning to lead projects, and building strong
            communication skills through both freelance and retail experience.
          </p>
          <p>
            With collaborators like <strong>Triassic (Daniel)</strong>, <strong>Floffah</strong>,
            and <strong>Shane (Reverso)</strong>, I co-founded projects that helped me mature
            technically and professionally — from <strong>Idle Development</strong> to
            <strong> Idley Host</strong> — while also gaining people skills through my
            <strong> Sales Consultant</strong> role at Next Retail.
          </p>
        </div>

        {/* VIEW FULL TIMELINE TOGGLE */}
        <div className="flex justify-center">
          <button
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-slate-300 dark:border-slate-700 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            {expanded ? (
              <>
                <FaChevronUp className="h-4 w-4" /> Hide full timeline
              </>
            ) : (
              <>
                <FaChevronDown className="h-4 w-4" /> View full timeline
              </>
            )}
          </button>
        </div>

        {/* TIMELINE */}
        <div
          className={`relative border-l border-slate-300 dark:border-slate-700 pl-6 transition-all duration-500 ease-in-out ${
            expanded ? "max-h-[9999px] opacity-100" : "max-h-[550px] overflow-hidden opacity-90"
          }`}
        >
          {/* PRESENT */}


          {/* NEXT RETAIL */}
          <div className="relative">
            <TimelineDot color="bg-sky-500" label="Retail · Customer Experience" />
            <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="font-medium text-slate-900 dark:text-slate-50">
                  Sales Consultant — Next Retail
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">2024 – <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">PRESENT</span></p>
              </div>
              <p className="mt-2 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                Customer-facing retail experience involving <strong>problem-solving, teamwork</strong>,
                and <strong>communication</strong>. Developed strong adaptability, professional conduct,
                and sales accuracy in a high-volume environment — skills that translate directly into
                project management and client-facing development work.
              </p>
            </div>
          </div>

{/* BIRMINGHAM INVENTORS */}
<div className="relative">
  <TimelineDot color="bg-teal-500" label="Community · Tech & Innovation" />
  <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 p-5 shadow-sm">
    <div className="flex items-center justify-between">
      <p className="font-medium text-slate-900 dark:text-slate-50">
        <b>Webmaster</b> @ Birmingham Inventors Organisation
      </p>
      <p className="text-xs text-slate-500 dark:text-slate-400">2025 – <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">PRESENT</span></p>
    </div>
    <p className="mt-2 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
      Contributing to the development of a modern digital presence for the
      <strong> Birmingham Inventors Organisation</strong>. Responsible for building and maintaining 
      their new WordPress website and mail infrastructure while supporting local innovation initiatives 
      through IT and technical advisory work. Focus on community empowerment and accessible technology.
    </p>
  </div>
</div>

          {/* FREELANCE DEVELOPER */}
          <div className="relative">
            <span className="absolute -left-[9px] top-1.5 h-3 w-3 rounded-full bg-emerald-500 border border-slate-900 dark:border-slate-50"></span>
            <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="font-medium text-slate-900 dark:text-slate-50">
                  <b>Freelance Developer</b> @ Husnain.UK
                </p>
                <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                 <span className="text-slate-500 dark:text-slate-400">2017 -</span> PRESENT
                </p>
              </div>
              <p className="mt-2 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                Actively building SaaS dashboards, portals, and systems under my brand{" "}
                <strong>Husnain.UK</strong> while pursuing a degree in{" "}
                <strong>Cybersecurity</strong> — focusing on security, performance, and clean UX.
              </p>
            </div>
          </div>

          {/* ROYAL AIR FORCE AIR CADETS */}
<div className="relative">
  <TimelineDot
    color="bg-sky-700"
    label="Leadership · Youth Organisation"
  />
  <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 p-5 shadow-sm">
    <div className="flex items-center justify-between">
      <p className="font-medium text-slate-900 dark:text-slate-50">
        Corporal @ Royal Air Force Air Cadets
      </p>
      <p className="text-xs text-slate-500 dark:text-slate-400">
        2022 – 2025
      </p>
    </div>
    <p className="mt-2 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
      Served as a <strong>Corporal</strong> within the <strong>Royal Air Force Air Cadets</strong>, 
      building leadership, communication, and discipline through structured training and 
      team command. Led small groups during field activities, public events, and drills, 
      while mentoring junior cadets and maintaining RAF values of integrity and excellence.
    </p>
  </div>
</div>

          {/* IDLEY HOST / JEEKIEHOST */}
          <div className="relative">
           <TimelineDot color="bg-blue-500" label="Startup · Hosting & Infrastructure" />
            <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="font-medium text-slate-900 dark:text-slate-50">
                  <b>Co-Founder</b> @ Idley Host & <small>Acquired</small> JeekieHost
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">2019 – 2023</p>
              </div>
              <p className="mt-2 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                <b>Co-Founder</b> <strong>Idley Host</strong> with <strong>Triassic</strong> and{" "}
                <strong>Shane (Reverso)</strong>, later acquiring <strong>JeekieHost</strong>.
                Led infrastructure, automation, and technical operations while learning key lessons
                in sustainability and financial management for startups.
              </p>
            </div>
          </div>

          {/* FALIXNODES */}
          <div className="relative">
           <TimelineDot color="bg-indigo-500" label="Leadership · Head Developer" />
            <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="font-medium text-slate-900 dark:text-slate-50"><b>Head Developer</b> @ FalixNodes</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">2018 – 2021</p>
              </div>
              <p className="mt-2 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                Progressed from Developer to <strong>Head Developer</strong>, leading the technical and
                support teams. Built Falix’s Discord support bot and support portal. Strengthened my
                leadership, UX coordination, and backend problem-solving skills.
              </p>
            </div>
          </div>

          {/* IDLE DEVELOPMENT / IDLE BEE FARM */}
          <div className="relative">
            <TimelineDot color="bg-amber-500" label="Team Project · Bot Development" />
            <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="font-medium text-slate-900 dark:text-slate-50">
                 <b>Co-Founder</b> Idle Development & Idle Bee Farm
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">2018 – 2020</p>
              </div>
              <p className="mt-2 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                Co-founded <strong>Idle Development</strong> with <strong>Triassic</strong> and{" "}
                <strong>Floffah</strong>, later joined by <strong>Reverso (Shane)</strong>. Built and scaled
                the Discord economy bot <strong>Idle Bee Farm</strong>, earning Discord verification and
                serving 80+ servers. Migrated infrastructure from JSON to MongoDB for performance.
              </p>
            </div>
          </div>

          {/* STRING LIST */}
          <div className="relative">
           <TimelineDot color="bg-pink-500" label="Early Project · Bot List Platform" />
            <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="font-medium text-slate-900 dark:text-slate-50"><b>Co-Founder</b> String List</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">2017 – 2018</p>
              </div>
              <p className="mt-2 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                Built one of my earliest community projects, a Discord bot list called{" "}
                <strong>String List</strong>. Gained early lessons in data handling, collaboration,
                and code ownership after an unexpected shutdown and code theft incident.
              </p>
            </div>
          </div>

          {/* MEE5 */}
          <div className="relative">
          <TimelineDot color="bg-gray-500" label="Foundation · First Discord Bot" />
            <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="font-medium text-slate-900 dark:text-slate-50">
                 <b>Co-Founder</b> Mee5 Bot & Early Discord Projects
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">2017</p>
              </div>
              <p className="mt-2 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                My very first Discord bot, co-founded with <strong>Savitar50</strong> and guided by
                <strong> Swiftingly</strong>. This was the foundation of everything that followed —
                teaching me APIs, teamwork, and the thrill of creation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>


{/* CONTACT */}
    <section
      id="contact"
      className="px-4 md:px-6 py-20 bg-slate-100/60 dark:bg-slate-950 border-t border-slate-200/70 dark:border-slate-800/70"
    >
      <div className="max-w-5xl mx-auto text-center space-y-10">
        {/* Title */}
        <div>
          <p className="text-xs font-semibold tracking-[0.22em] uppercase text-slate-500 dark:text-slate-400">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold">
            Let’s connect and collaborate
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm md:text-base max-w-2xl mx-auto">
            I’m open to new opportunities, collaborations, or just chatting about tech.
            Reach out via email, Discord, or LinkedIn — quick responses guaranteed.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 gap-6 text-left">
          {/* EMAIL CARD */}
          <div className="border border-slate-200 dark:border-slate-800 rounded-xl p-6 bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm hover:shadow-md transition">
            <h3 className="font-medium text-slate-900 dark:text-slate-50 flex items-center gap-2">
              <FaEnvelope className="text-slate-700 dark:text-slate-300" />
              Email
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
              Protected with verification
            </p>

            {!verified ? (
              <form
                onSubmit={handleVerify}
                className="mt-4 flex flex-col sm:flex-row gap-2 text-sm"
              >
                <input
                  type="text"
                  name="verification"
                  placeholder="Type 'human' to unlock"
                  className="flex-1 border border-slate-300 dark:border-slate-700 rounded-md p-2 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400/40"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-slate-900 text-white dark:bg-slate-50 dark:text-slate-950 rounded-md hover:bg-slate-700 dark:hover:bg-slate-200 transition"
                >
                  Verify
                </button>
              </form>
            ) : (
              <div className="mt-4 flex flex-col sm:flex-row gap-2 items-center transition-all duration-300">
                <a
                  href="mailto:contact@husnain.uk"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 dark:border-slate-700 px-4 py-2 text-sm font-medium text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                >
                  <FaEnvelope />
                  contact@husnain.uk
                </a>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-2 text-sm px-3 py-2 rounded-md border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                >
                  {copied ? (
                    <>
                      <FaCheck className="text-emerald-500" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <FaCopy />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            )}
            {error && (
              <p className="text-xs text-red-500 mt-2 transition-all">{error}</p>
            )}
{/* Anti-spam disclaimer */}
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-3 italic leading-relaxed">
              Please note: this email address is provided for genuine inquiries only. 
              I do not wish to receive marketing, promotional, or unsolicited messages. 
              Violators may be subject to legal action.
            </p>
          </div>

          {/* DISCORD CARD */}
          <div className="border border-slate-200 dark:border-slate-800 rounded-xl p-6 bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm hover:shadow-md transition">
            <h3 className="font-medium text-slate-900 dark:text-slate-50 flex items-center gap-2">
              <FaDiscord className="text-[#5865F2]" />
              Discord
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
              <span className="font-mono text-slate-800 dark:text-slate-200">
                hussgb
              </span>
            </p>
            <a
              href="https://discord.com/users/hussgb"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm mt-3 font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition"
            >
              <FaDiscord />
              Message me on Discord
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 pt-8 text-slate-700 dark:text-slate-200">
          <a
            href="https://github.com/hussgb"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-slate-900 dark:hover:text-white transition"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/husnainuk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-slate-900 dark:hover:text-white transition"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
        </div>

        <p className="text-xs text-slate-500 dark:text-slate-400">
          🛡️ This section includes static verification to prevent automated spam.
        </p>
      </div>
    </section>

      </main>

     {/* FOOTER */}
<footer className="border-t border-slate-200/70 dark:border-slate-800/70 bg-white/70 dark:bg-slate-950/50 backdrop-blur-sm py-6 mt-10">
  <div className="max-w-6xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-slate-600 dark:text-slate-400">
    {/* Left: Copyright */}
    <div className="flex flex-col md:flex-row items-center gap-2 text-center md:text-left">
      <span>
        © {new Date().getFullYear()} Mohammed Husnain (HussGB)
      </span>
      <span className="hidden md:inline">·</span>
      <span>
        Built with <strong>Next.js</strong> & <strong>TailwindCSS</strong>
      </span>
      <span className="hidden md:inline">·</span>
      <span>Brand: <strong>Husnain.UK</strong></span>
    </div>

    {/* Center: Legal links */}
    <div className="flex flex-wrap justify-center gap-4 text-xs">
      <a
        href="/legal/privacy"
        className="hover:text-slate-900 dark:hover:text-slate-200 transition"
      >
        Privacy
      </a>
      <a
        href="/legal/terms"
        className="hover:text-slate-900 dark:hover:text-slate-200 transition"
      >
        Terms
      </a>
      <a
        href="/legal/cookies"
        className="hover:text-slate-900 dark:hover:text-slate-200 transition"
      >
        Cookies
      </a>
      <a
        href="/legal/impressum"
        className="hover:text-slate-900 dark:hover:text-slate-200 transition"
      >
        Impressum
      </a>
      <a
        href="/legal/accessibility"
        className="hover:text-slate-900 dark:hover:text-slate-200 transition"
      >
        Accessibility
      </a>
    </div>

    {/* Right: Social icons */}
    <div className="flex items-center gap-4 text-lg">
      <a
        href="https://github.com/hussgb"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-slate-900 dark:hover:text-slate-200 transition"
        aria-label="GitHub"
      >
        <i className="fab fa-github"></i>
      </a>
      <a
        href="https://discord.com/users/hussgb"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-slate-900 dark:hover:text-slate-200 transition"
        aria-label="Discord"
      >
        <i className="fab fa-discord"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/husnainuk"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-slate-900 dark:hover:text-slate-200 transition"
        aria-label="LinkedIn"
      >
        <i className="fab fa-linkedin"></i>
      </a>
    </div>
  </div>

  {/* Disclaimer line */}
  <div className="mt-4 text-center text-[11px] text-slate-500 dark:text-slate-500 px-4 max-w-4xl mx-auto">
    <p>
      This site is still under active development. No liability shall be taken for any losses caused interacting on this website. Please avoid unsolicited or spam messages — contact 
      via verified channels only.
    </p>
  </div>
</footer>

    </div>
  );
}

/** Small helper component for skill tiles */
function SkillItem({ icon, label }) {
  return (
    <div className="flex items-center gap-2">
      <div className="h-7 w-7 flex items-center justify-center rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-100 text-base">
        {icon}
      </div>
      <span className="text-slate-800 dark:text-slate-200">{label}</span>
    </div>
  );
}

function TimelineDot({ color, label }) {
  return (
    <div className="group absolute -left-[9px] top-1.5">
      {/* Timeline dot */}
      <span
        className={`h-3 w-3 rounded-full border border-slate-900 dark:border-slate-50 ${color} block relative z-10`}
      ></span>

      {/* Tooltip */}
      <div
        className="
          absolute left-5 top-1/2 -translate-y-1/2
          opacity-0 scale-90 translate-x-[-4px]
          group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0
          transition-all duration-200 ease-out
          bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900
          rounded-md shadow-lg px-2.5 py-1 text-[10px] font-medium
          whitespace-nowrap
          pointer-events-none
          sm:left-6 sm:max-w-[200px]
          after:content-[''] after:absolute after:left-[-4px] after:top-1/2 after:-translate-y-1/2
          after:border-4 after:border-transparent after:border-r-slate-900 dark:after:border-r-slate-100
        "
      >
        {label}
      </div>
    </div>
  );
}
