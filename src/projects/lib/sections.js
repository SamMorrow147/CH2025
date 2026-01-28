/**
 * Sections configuration for mobile swipe deck
 */

export const SECTIONS = [
  {
    id: "intro",
    title: "Introduction",
    description: "Welcome to the swipe deck experience. Swipe up to explore more sections.",
    backgroundColor: "#293a8d",
    textColor: "#ffffff",
  },
  {
    id: "work",
    title: "Our Work",
    description: "Discover our portfolio of creative projects and case studies.",
    backgroundColor: "#e8e8e8",
    textColor: "#000000",
  },
  {
    id: "contact",
    title: "Get in Touch",
    description: "Let's start a conversation about your next project.",
    backgroundColor: "#808080",
    textColor: "#ffffff",
  },
];

/**
 * Replace only the section with id === 'work' with one section per Contentful project.
 * Order: intro → [project cards] → contact.
 * If projects.length === 0, keep the original "work" section.
 */
export function getSectionsWithProjects(sections, projects) {
  const workIdx = sections.findIndex((s) => s.id === "work");
  if (workIdx === -1) return sections;
  if (projects.length === 0) return sections;

  const projectSections = projects.map((p) => ({
    id: `project-${p.id}`,
    title: p.title,
    description: p.subtitle,
    backgroundColor: "#293a8d",
    textColor: "#ffffff",
    project: p,
  }));

  return [
    ...sections.slice(0, workIdx),
    ...projectSections,
    ...sections.slice(workIdx + 1),
  ];
}
