export default function About() {
  return (
    <section id="about" className="px-6 py-16 border-b border-neutral-800">
      <p className="text-xs font-medium tracking-widest text-neutral-500 uppercase mb-8">
        About
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 text-center">
          <div className="w-16 h-16 rounded-full bg-violet-900 flex items-center justify-center mx-auto mb-4">
            <span className="text-xl font-medium text-violet-300">J</span>
          </div>
          <p className="font-medium text-neutral-100 mb-1">Jackson</p>
          <p className="text-xs text-[#39ff14]">Developer · Creator · Educator</p>
        </div>
        <div className="text-sm text-neutral-400 leading-relaxed space-y-4">
          <p>
            Multi-hyphenate developer with a background spanning full-stack web
            development, digital film production, audio engineering, and Apple
            technical support.
          </p>
          <p>
            Currently building Organic Mechaniks — a sync licensing venture
            bridging hip-hop/soul and rock/metal for film and TV — while
            pursuing CTE educator certification in Oregon.
          </p>
          <p>
            I bring systems thinking, cross-disciplinary creativity, and a
            genuine love for craft to every project I touch.
          </p>
        </div>
      </div>
    </section>
  );
}