import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-foreground text-white/60">
      <div className="w-[75%] mx-auto px-6 py-8">

        {/* ── Mobile layout ── */}
        <div className="md:hidden flex flex-col gap-2">
          <div className="flex items-start justify-between gap-2">
            {/* Left column */}
            <div className="flex flex-col gap-1">
              <Link href="/" className="text-[12px] text-white/60 hover:text-white transition-colors py-0.5">Home</Link>
              <Link href="/faq" className="text-[12px] text-white/60 hover:text-white transition-colors py-0.5">FAQ</Link>
              <Link href="/privacy" className="text-[12px] text-white/60 hover:text-white transition-colors py-0.5">Privacy Policy</Link>
            </div>
            {/* Right column */}
            <div className="flex flex-col gap-1 items-end">
              <Link href="/services" className="text-[12px] text-white/60 hover:text-white transition-colors py-0.5">Services</Link>
              <Link href="/contact" className="text-[12px] text-white/60 hover:text-white transition-colors py-0.5">Contact</Link>
              <Link href="/terms" className="text-[12px] text-white/60 hover:text-white transition-colors py-0.5">Terms</Link>
            </div>
          </div>
          <p className="text-[10px] text-white/30 text-center whitespace-nowrap mt-1">© 2026 Carma Cleaning Services Inc.</p>
        </div>

        {/* ── Desktop layout ── */}
        <div className="hidden md:flex flex-col gap-3 max-w-5xl mx-auto">
          {/* Top row — nav left, legal right */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Link href="/" className="text-xs font-light text-white/60 hover:text-white transition-colors">Home</Link>
              <Link href="/services" className="text-xs font-light text-white/60 hover:text-white transition-colors">Services</Link>
              <Link href="/faq" className="text-xs font-light text-white/60 hover:text-white transition-colors">FAQ</Link>
              <Link href="/contact" className="text-xs font-light text-white/60 hover:text-white transition-colors">Contact</Link>
            </div>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-xs font-light text-white/60 hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-xs font-light text-white/60 hover:text-white transition-colors">Terms &amp; Conditions</Link>
            </div>
          </div>
          {/* Bottom row — copyright centered */}
          <p className="text-[10px] text-white/30 text-center whitespace-nowrap">© 2026 Carma Cleaning Services Inc.</p>
        </div>

      </div>
    </footer>
  )
}
