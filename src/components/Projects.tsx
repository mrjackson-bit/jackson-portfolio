import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="work" className="px-6 py-16 border-b border-neutral-100">
      <p className="text-xs font-medium tracking-widest text-neutral-400 uppercase mb-8">
        Selected work
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((p) => (
          <div
            key={p.id}
            className={`rounded-xl border p-5 flex flex-col gap-3 hover:border-violet-200 transition-colors ${
              p.featured
                ? "border-violet-300"
                : "border-neutral-200"
            }`}
          >
            <div className="w-full h-24 rounded-lg bg-neutral-50 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-violet-500" />
              </div>
            </div>
            <p className="text-xs font-medium text-violet-600">{p.tag}</p>
            <h3 className="text-sm font-medium text-neutral-900">{p.title}</h3>
            <p className="text-xs text-neutral-500 leading-relaxed flex-1">
              {p.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="text-xs px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-500"
                >
                  {s}
                </span>
              ))}
            </div>
            <div className="flex gap-3 pt-1">
              <a href={p.link} className="text-xs text-violet-600 hover:underline">
                Live demo →
              </a>
              <a href={p.github} className="text-xs text-neutral-400 hover:underline">
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
