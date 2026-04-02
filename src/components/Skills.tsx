const skills = [
  {
    area: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    area: "Backend",
    items: ["Node.js", "Express", "Prisma", "PostgreSQL", "REST APIs"],
  },
  {
    area: "Design",
    items: ["Figma", "UI/UX", "Responsive design", "Accessibility"],
  },
  {
    area: "Creative tech",
    items: ["Logic Pro", "DaVinci Resolve", "Audio production", "AI integration"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-16 border-b border-neutral-100">
      <p className="text-xs font-medium tracking-widest text-neutral-400 uppercase mb-8">
        Skills
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((s) => (
          <div key={s.area} className="border border-neutral-200 rounded-lg p-4">
            <p className="text-xs font-medium text-violet-600 mb-3">{s.area}</p>
            <ul className="space-y-1">
              {s.items.map((item) => (
                <li key={item} className="text-xs text-neutral-500">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}