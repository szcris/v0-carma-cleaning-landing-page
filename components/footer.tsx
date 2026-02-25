import Link from "next/link"
import { Facebook, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-white/60">
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo image */}
        <Link href="/" className="shrink-0">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_6lubjm6lubjm6lub.png-gtc6JUQEwioLaYHJjQvny1RmkQWMta.jpeg"
            alt="Carma Cleaning Logo"
            style={{ maxHeight: 40, width: "auto" }}
            className="object-contain brightness-0 invert opacity-80"
          />
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-5 text-[11px]">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          <Link href="/faq" className="hover:text-white transition-colors">FAQ</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
        </div>

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
