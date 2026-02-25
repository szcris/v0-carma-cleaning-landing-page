import Link from "next/link"
import { Facebook, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-white/60">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-8 text-sm">

          {/* Column 1 — Copyright + Socials */}
          <div className="flex flex-col gap-3">
            <p className="text-white font-semibold text-base">Carma Cleaning</p>
            <p className="text-[12px] text-white/40 leading-relaxed">
              Professional cleaning services for homes and businesses across Montreal &amp; West Island.
            </p>
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

          {/* Column 2 — Navigation */}
          <div className="flex flex-col gap-2">
            <p className="text-white font-semibold text-[12px] uppercase tracking-widest mb-1">Navigation</p>
            <Link href="/" className="text-[12px] hover:text-white transition-colors">Home</Link>
            <Link href="/services" className="text-[12px] hover:text-white transition-colors">Services</Link>
            <Link href="/faq" className="text-[12px] hover:text-white transition-colors">FAQ</Link>
            <Link href="/contact" className="text-[12px] hover:text-white transition-colors">Contact</Link>
          </div>

          {/* Column 3 — Legal */}
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
