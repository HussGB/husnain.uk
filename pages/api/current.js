export const revalidate = 3600; // 1 hour cache

export default async function handler(req, res) {
  try {
    const username = "hussgb";

    const [user, repos] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`).then(r => r.json()),
      fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=3`).then(r => r.json())
    ]);

    const latestRepos = repos.map(r => ({
      name: r.name,
      html_url: r.html_url,
      description: r.description,
      language: r.language,
      updated_at: r.updated_at,
    }));

    res.status(200).json({
      headline: user.bio || "Full-stack developer & Cybersecurity student",
      followers: user.followers,
      publicRepos: user.public_repos,
      githubUrl: user.html_url,
      latestRepos,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch GitHub info" });
  }
}
