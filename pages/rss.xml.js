const SITE_URL = "https://www.husnain.uk";

const feedItems = [
  {
    title: "About Mohammed Husnain",
    description:
      "A full-stack developer and Computer Science student based in Birmingham, UK.",
    path: "/#about",
  },
  {
    title: "Skills and capabilities",
    description:
      "Core technologies and practical capabilities used to build reliable digital systems.",
    path: "/#skills",
  },
  {
    title: "Projects",
    description:
      "Selected projects covering dashboards, portals, automation, and infrastructure.",
    path: "/#projects",
  },
  {
    title: "Experience",
    description:
      "A timeline of learning, building, technical leadership, and community work.",
    path: "/#experience",
  },
  {
    title: "Contact Mohammed Husnain",
    description:
      "Connect by email, Discord, GitHub, Instagram, or LinkedIn.",
    path: "/#contact",
  },
];

function escapeXml(value) {
  return value.replace(
    /[<>&'\"]/g,
    (character) =>
      ({
        "<": "&lt;",
        ">": "&gt;",
        "&": "&amp;",
        "'": "&apos;",
        '"': "&quot;",
      })[character]
  );
}

function renderItem({ title, description, path }) {
  const url = `${SITE_URL}${path}`;
  return `
    <item>
      <title>${escapeXml(title)}</title>
      <description>${escapeXml(description)}</description>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
    </item>`;
}

export async function getServerSideProps({ res }) {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Husnain.UK</title>
    <description>Updates and sections from Mohammed Husnain's personal website.</description>
    <link>${SITE_URL}/</link>
    <language>en-gb</language>
    <image>
      <url>${SITE_URL}/favicon.png</url>
      <title>Husnain.UK</title>
      <link>${SITE_URL}/</link>
    </image>${feedItems.map(renderItem).join("")}
  </channel>
</rss>`;

  res.setHeader("Content-Type", "application/rss+xml; charset=utf-8");
  res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400");
  res.statusCode = 200;
  res.end(body);

  return { props: {} };
}

export default function RssFeed() {
  return null;
}
