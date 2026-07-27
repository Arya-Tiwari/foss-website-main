// Single source of truth for every FOSS Fridays newsletter issue.
// Add a new issue by pushing another object to this array — the
// FossFridaysPage (list) and NewsletterPage (detail) pick it up automatically.
//
// Fields:
// - id          -> used in the URL: /fossfridays/:id  (keep it simple, e.g. "1", "2")
// - issue       -> label shown on the card & detail page, e.g. "Issue 01"
// - title       -> the newsletter's headline for that week
// - date        -> human-readable date shown on the card & detail page
// - topics      -> short list of chips/tags shown on the list card (optional)
// - summary     -> 1-2 line teaser shown on the list card
// - content     -> full newsletter body. Array of paragraphs (strings) — each
//                  string renders as its own <p>.
// - reels       -> array of reels for that issue, shown on the right side of
//                  the detail page. Most issues will just have one.
//     - link    -> Instagram (or other) reel URL
//     - thumb   -> path to a thumbnail image in /public
//     - label   -> small label over the play button, e.g. "Episode 01"

export const newsletters = [
  {
    id: "1",
    issue: "News Letter 01",
    title: "Kicking off FOSS Fridays",
    date: "1st August, 2025",
    topics: ["Open Source 101", "Linux"],
    summary:
      "The first-ever FOSS Fridays drop — why open source matters, and what to expect every week.",
    content: [
      "Welcome to the very first edition of FOSS Fridays! Every Friday, we're going to break down a piece of the open-source world — a project, a tool, a bit of history — in a quick read and an even quicker reel.",
      "This week, we're starting from the basics: what actually makes software 'open source', and why it matters. Open source isn't just about free code — it's about transparency, community-driven development, and the freedom to inspect, modify, and share what you use.",
      "From the Linux kernel powering most of the internet's servers to the tools you use every day like VS Code and Git, open source is everywhere. Over the coming weeks, we'll be spotlighting the projects and people behind this movement.",
      "Follow along here and on our Instagram every Friday — new issue, new reel, same open-source energy.",
    ],
    reels: [
      {
        link: "https://www.instagram.com/reel/DbL0MxNMCQ0/?igsh=MXZsazZ2cHQ4ZzBvYg==",
        thumb: "/foss-fridays-thumb.jpeg",
        label: "Episode 01",
      },
    ],
  },
];

export const latestNewsletter = newsletters[newsletters.length - 1];

export function getNewsletterById(id) {
  return newsletters.find((n) => n.id === String(id));
}