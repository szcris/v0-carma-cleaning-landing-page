import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-foreground text-white/60">
      <div className="max-w-6xl mx-auto px-6 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1.5 shrink-0" style={{ maxHeight: 40 }}>
          <span className="font-serif text-sm text-white leading-none">Carma</span>
          <span className="font-bold leading-none" style={{ color: "#38bdf8" }}>·</span>
          <span className="font-sans text-[10px] font-semibold tracking-[0.15em] uppercase text-white/50 leading-none">Cleaning</span>
        </Link>

        {/* Links */}
        <div className="flex items-center gap-5 text-[11px]">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
        </div>

        {/* Copyright */}
        <p className="text-[11px] text-white/30 shrink-0">© 2026 Carma Cleaning Services Inc.</p>
      </div>
    </footer>
  )
}
