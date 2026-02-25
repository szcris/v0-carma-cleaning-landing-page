"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 backdrop-blur-xl border-b border-white/40 shadow-sm shadow-foreground/5"
          : "bg-white/10 backdrop-blur-md border-b border-white/10"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo image */}
        <Link href="/" className="flex items-center shrink-0">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_6lubjm6lubjm6lub.png-gtc6JUQEwioLaYHJjQvny1RmkQWMta.jpeg"
            alt="Carma Cleaning Logo"
            style={{ maxHeight: 50, width: "auto" }}
            className="object-contain"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm text-foreground/70 hover:text-foreground transition-colors font-medium">
            Home
          </Link>
          <Link href="/services" className="text-sm text-foreground/70 hover:text-foreground transition-colors font-medium">
            Services
          </Link>
          <Link href="/faq" className="text-sm text-foreground/70 hover:text-foreground transition-colors font-medium">
            FAQ
          </Link>
          <Link href="/contact" className="text-sm text-foreground/70 hover:text-foreground transition-colors font-medium">
            Contact
          </Link>
          <Button
            asChild
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-5 btn-magnetic"
          >
            <Link href="/contact">Get a Free Quote</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/80 backdrop-blur-xl border-t border-border/50 px-6 py-4 flex flex-col gap-4">
          <Link href="/" className="text-sm font-medium text-foreground/70 hover:text-foreground" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/services" className="text-sm font-medium text-foreground/70 hover:text-foreground" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link href="/faq" className="text-sm font-medium text-foreground/70 hover:text-foreground" onClick={() => setMenuOpen(false)}>FAQ</Link>
          <Link href="/contact" className="text-sm font-medium text-foreground/70 hover:text-foreground" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full w-full">
            <Link href="/contact" onClick={() => setMenuOpen(false)}>Get a Free Quote</Link>
          </Button>
        </div>
      )}
    </header>
  )
}
