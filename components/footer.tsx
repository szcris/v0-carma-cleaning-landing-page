import Link from "next/link"
import { Facebook, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-white/60">
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-center gap-6">
        {/* Nav Links */}
        <div className="flex items-center gap-5 text-[11px]">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          <Link href="/faq" className="hover:text-white transition-colors">FAQ</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
        </div>

        <span className="hidden sm:block text-white/20 text-[11px]">|</span>

        {/* Socials + Copyright */}
        <div className="flex items-center gap-4">
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
          <p className="text-[11px] text-white/30">© 2026 Carma Cleaning Services Inc.</p>
        </div>
      </div>
    </footer>
  )
}
