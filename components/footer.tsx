import Link from "next/link"
import { Facebook, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-white/60">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">

          {/* Column 1: Copyright & Socials */}
          <div className="flex flex-col gap-3">
            <p className="text-white font-semibold text-xs tracking-widest uppercase">Carma Cleaning</p>
            <p className="text-[11px] text-white/40">© 2026 Carma Cleaning Services Inc.<br />Montreal &amp; West Island</p>
            <div className="flex items-center gap-4 mt-1">
              <a
                href="https://www.facebook.com/carmacleaning"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Carma Cleaning on Facebook"
                className="hover:text-white transition-colors"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://www.instagram.com/carmacleaning"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Carma Cleaning on Instagram"
                className="hover:text-white transition-colors"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Nav Links */}
          <div className="flex flex-col gap-2">
            <p className="text-white font-semibold text-xs tracking-widest uppercase mb-1">Navigation</p>
            <Link href="/" className="hover:text-white transition-colors text-[11px]">Home</Link>
            <Link href="/services" className="hover:text-white transition-colors text-[11px]">Services</Link>
            <Link href="/faq" className="hover:text-white transition-colors text-[11px]">FAQ</Link>
            <Link href="/contact" className="hover:text-white transition-colors text-[11px]">Contact</Link>
          </div>

          {/* Column 3: Legal */}
          <div className="flex flex-col gap-2">
            <p className="text-white font-semibold text-xs tracking-widest uppercase mb-1">Legal</p>
            <Link href="/privacy" className="hover:text-white transition-colors text-[11px]">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors text-[11px]">Terms of Service</Link>
            <Link href="/contact" className="hover:text-white transition-colors text-[11px]">Get a Free Quote</Link>
          </div>

        </div>
      </div>
    </footer>
  )
}
