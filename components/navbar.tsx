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
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo wordmark */}
        <Link href="/" className="flex items-center gap-1.5">
          <span className="font-serif text-xl text-foreground leading-none tracking-tight">
            Carma
          </span>
          <span className="text-primary font-bold text-xl leading-none">·</span>
          <span className="font-sans text-sm font-semibold tracking-[0.15em] uppercase text-foreground/60 leading-none">
            Cleaning
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/services" className="text-sm text-foreground/70 hover:text-foreground transition-colors font-medium">
            Services
          </Link>
          <Link href="/faq" className="text-sm text-foreground/70 hover:text-foreground transition-colors font-medium">
            FAQ
          </Link>
          <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-5">
            <Link href="/#quote">Get a Free Quote</Link>
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
        <div className="md:hidden bg-white border-t border-border px-6 py-4 flex flex-col gap-4">
          <Link href="/services" className="text-sm font-medium text-foreground/70 hover:text-foreground" onClick={() => setMenuOpen(false)}>
            Services
          </Link>
          <Link href="/faq" className="text-sm font-medium text-foreground/70 hover:text-foreground" onClick={() => setMenuOpen(false)}>
            FAQ
          </Link>
          <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full w-full">
            <Link href="/#quote" onClick={() => setMenuOpen(false)}>Get a Free Quote</Link>
          </Button>
        </div>
      )}
    </header>
  )
}
