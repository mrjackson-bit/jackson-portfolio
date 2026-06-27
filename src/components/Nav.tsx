export default function Nav() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 sticky top-0 bg-[#0a0a0a]/90 backdrop-blur-sm z-50">
      <span className="font-medium text-neutral-100 tracking-tight">
        Seth Jackson
      </span>
      <div className="hidden sm:flex items-center gap-6 text-sm text-neutral-400">
        <a href="#work" className="hover:text-neutral-100 transition-colors">Work</a>
        <a href="#skills" className="hover:text-neutral-100 transition-colors">Skills</a>
        <a href="#about" className="hover:text-neutral-100 transition-colors">About</a>
      </div>
      <a
        href="mailto:mrjackson@sethshows.com"
        className="text-sm font-medium px-4 py-2 rounded-lg border border-neutral-700 text-neutral-100 hover:border-violet-500 transition-colors">
        Let&apos;s talk
      </a>
    </nav>
  );
}