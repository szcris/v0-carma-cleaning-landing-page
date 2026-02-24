import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-foreground text-white/60">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1.5 shrink-0">
          <span className="font-serif text-base text-white leading-none">Carma</span>
          <span className="text-primary font-bold leading-none" style={{ color: "#38bdf8" }}>·</span>
          <span className="font-sans text-xs font-semibold tracking-[0.15em] uppercase text-white/50 leading-none">Cleaning</span>
        </Link>

        {/* Links */}
        <div className="flex items-center gap-5 text-xs">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
        </div>

        {/* Copyright */}
        <p className="text-xs text-white/30 shrink-0">© 2026 Carma Cleaning Services Inc.</p>
      </div>
    </footer>
  )
}
