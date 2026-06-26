import Image from "next/image";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";

function ProjectCard({ p }: { p: Project }) {
  return (
    <div
      className={`rounded-xl border p-5 flex flex-col gap-3 transition-colors ${
        p.featured
          ? "border-violet-500 hover:border-violet-400"
          : "border-neutral-800 hover:border-neutral-600"
      }`}
    >
      <div className="w-full h-40 rounded-lg overflow-hidden relative">
        <Image
          src={p.image}
          alt={p.title}
          fill
          className="object-cover object-top"
        />
      </div>
      <p className="text-xs font-medium text-[#39ff14]">{p.tag}</p>
      <h3 className="text-sm font-medium text-neutral-100">{p.title}</h3>
      <p className="text-xs text-neutral-400 leading-relaxed flex-1">
        {p.description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {p.stack.map((s) => (
          <span
            key={s}
            className="text-xs px-2 py-0.5 rounded-full bg-neutral-900 border border-neutral-700 text-neutral-400"
          >
            {s}
          </span>
        ))}
      </div>
      <div className="flex gap-3 pt-1">
         <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-xs text-violet-400 hover:text-violet-300 hover:underline">
           Live demo →
         </a>
         <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-xs text-neutral-500 hover:text-neutral-300 hover:underline">
           GitHub
         </a>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="work" className="px-6 py-16 border-b border-neutral-800">
      <p className="text-xs font-medium tracking-widest text-neutral-500 uppercase mb-8">
        Selected work
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((p) => (
          <ProjectCard key={p.id} p={p} />
        ))}
      </div>
    </section>
  );
}