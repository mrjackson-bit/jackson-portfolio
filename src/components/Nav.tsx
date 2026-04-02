export default function Nav() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-neutral-100 sticky top-0 bg-white/90 backdrop-blur-sm z-50">
      <span className="font-medium text-neutral-900 tracking-tight">
        Jackson
      </span>
      <div className="hidden sm:flex items-center gap-6 text-sm text-neutral-500">
        <a href="#work" className="hover:text-neutral-900 transition-colors">
          Work
        </a>
        <a href="#skills" className="hover:text-neutral-900 transition-colors">
          Skills
        </a>
        <a href="#about" className="hover:text-neutral-900 transition-colors">
          About
        </a>
      </div>

      <a
        href="mailto:you@email.com"
        className="text-sm font-medium px-4 py-2 rounded-lg border border-neutral-200 hover:bg-neutral-50 transition-colors"
      >
        Let's talk
      </a>
    </nav>
  );
}