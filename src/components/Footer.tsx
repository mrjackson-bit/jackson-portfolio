export default function Footer() {
  return (
    <footer className="px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
      <p className="text-xs text-neutral-400">Jackson · {new Date().getFullYear()}</p>
      <div className="flex gap-5">
        <a
          href="https://github.com"
          className="text-xs text-neutral-400 hover:text-neutral-700 transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com"
          className="text-xs text-neutral-400 hover:text-neutral-700 transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="mailto:you@email.com"
          className="text-xs text-neutral-400 hover:text-neutral-700 transition-colors"
        >
          Email
        </a>
      </div>
    </footer>
  );
}