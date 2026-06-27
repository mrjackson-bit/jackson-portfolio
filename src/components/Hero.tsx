export default function Hero() {
  return (
    <section className="px-6 py-20 md:py-28 border-b border-neutral-800 max-w-4xl">
      <p className="text-xs font-medium tracking-widest text-[#39ff14] uppercase mb-5">
        Full-stack · UI/UX · Frontend · Freelance
      </p>
      <h1 className="text-4xl md:text-5xl font-medium text-neutral-100 leading-tight mb-3">
        Hello, my name is Seth Jackson.
      </h1>
      <h2 className="text-4xl md:text-5xl font-medium text-violet-400 leading-tight mb-6">
        I build things people love to use.
      </h2>
      <p className="text-base text-neutral-400 leading-relaxed max-w-xl mb-8">
        Developer and creative technologist with roots in music production,
        film, and Apple tech. I design and build digital products that sit at
        the intersection of form and function.
      </p>
      <div className="flex flex-wrap gap-3 mb-10">
        <a
          href="#work"
          className="px-5 py-2.5 rounded-lg bg-violet-600 text-white text-sm font-medium hover:bg-violet-500 transition-colors"
        >
          View my work
        </a>
        <a
          href="https://docs.google.com/document/d/1wvwZNqAflRPXBGkCtlEkG79JMIBlhV6A1Tbifnjxpsc/edit?usp=sharing"
          className="px-5 py-2.5 rounded-lg border border-neutral-700 text-neutral-100 text-sm font-medium hover:border-[#39ff14] hover:text-[#39ff14] transition-colors"
        >
          Download resume
        </a>
      </div>
      <div className="flex flex-wrap gap-2">
        {[
          "React / Next.js",
          "Node.js",
          "UI design",
          "AI integration",
          "Audio production",
          "Available for work",
        ].map((tag) => (
          <span
            key={tag}
            className="text-xs px-3 py-1.5 rounded-full border border-neutral-700 text-neutral-400 hover:border-[#39ff14] hover:text-[#39ff14] transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}