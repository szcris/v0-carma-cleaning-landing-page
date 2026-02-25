import Link from "next/link"
import { Facebook, Instagram } from "lucide-react"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-white/60">
      <div className="w-[75%] mx-auto px-6 py-8">

        {/* ── Mobile layout ── */}
        <div className="md:hidden flex flex-col gap-2">
          {/* Two flush columns with socials centered between */}
          <div className="flex items-start justify-between gap-2">
            {/* Left column — flush left */}
            <div className="flex flex-col gap-1">
              <Link href="/" className="text-[12px] text-white/60 hover:text-white transition-colors py-0.5">Home</Link>
              <Link href="/faq" className="text-[12px] text-white/60 hover:text-white transition-colors py-0.5">FAQ</Link>
              <Link href="/privacy" className="text-[12px] text-white/60 hover:text-white transition-colors py-0.5">Privacy Policy</Link>
            </div>
            {/* Center — social icons */}
            <div className="flex items-center gap-4 pt-1">
              <a href="https://www.facebook.com/carmacleaning" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-white transition-colors">
                <Facebook size={16} />
              </a>
              <a href="https://www.instagram.com/carmacleaning" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-white transition-colors">
                <Instagram size={16} />
              </a>
            </div>
            {/* Right column — flush right */}
            <div className="flex flex-col gap-1 items-end">
              <Link href="/services" className="text-[12px] text-white/60 hover:text-white transition-colors py-0.5">Services</Link>
              <Link href="/contact" className="text-[12px] text-white/60 hover:text-white transition-colors py-0.5">Contact</Link>
              <Link href="/terms" className="text-[12px] text-white/60 hover:text-white transition-colors py-0.5">Terms</Link>
            </div>
          </div>
          <p className="text-[10px] text-white/30 text-center whitespace-nowrap mt-1">© 2026 Carma Cleaning Services Inc.</p>
        </div>

        {/* ── Desktop layout — 3-column grid ── */}
        <div className="hidden md:grid grid-cols-3 gap-y-6 gap-x-8 text-sm">
          {/* Col 1 */}
          <div className="flex flex-col gap-3">
            <p className="text-white font-semibold text-base">Carma Cleaning</p>
            <p className="text-[12px] text-white/40 leading-relaxed">
              Professional cleaning services for homes and businesses across Montreal &amp; West Island.
            </p>
            <div className="flex items-center gap-4 mt-1">
              <a href="https://www.facebook.com/carmacleaning" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-white transition-colors">
                <Facebook size={16} />
              </a>
              <a href="https://www.instagram.com/carmacleaning" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-white transition-colors">
                <Instagram size={16} />
              </a>
            </div>
          </div>
          {/* Col 2 */}
          <div className="flex flex-col gap-2">
            <p className="text-white font-semibold text-[12px] uppercase tracking-widest mb-1">Navigation</p>
            <Link href="/" className="text-[12px] hover:text-white transition-colors">Home</Link>
            <Link href="/services" className="text-[12px] hover:text-white transition-colors">Services</Link>
            <Link href="/faq" className="text-[12px] hover:text-white transition-colors">FAQ</Link>
            <Link href="/contact" className="text-[12px] hover:text-white transition-colors">Contact</Link>
          </div>
          {/* Col 3 */}
          <div className="flex flex-col gap-2">
            <p className="text-white font-semibold text-[12px] uppercase tracking-widest mb-1">Legal</p>
            <Link href="/privacy" className="text-[12px] hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-[12px] hover:text-white transition-colors">Terms of Service</Link>
            <p className="text-[11px] text-white/30 mt-2">© 2026 Carma Cleaning Services Inc.</p>
          </div>
        </div>

      </div>
    </footer>
  )
}
