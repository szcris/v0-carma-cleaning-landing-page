"use client"

import { useState, useEffect } from "react"
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
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <span className="text-xl font-bold text-foreground tracking-tight">
            Carma<span className="text-primary">.</span>
          </span>
          <span className="hidden sm:block text-sm text-muted-foreground font-normal tracking-widest uppercase">
            Cleaning
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm text-foreground/70 hover:text-foreground transition-colors font-medium">
            Services
          </a>
          <a href="#faq" className="text-sm text-foreground/70 hover:text-foreground transition-colors font-medium">
            FAQ
          </a>
          <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-5">
            <a href="#quote">Get a Free Quote</a>
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
          <a href="#services" className="text-sm font-medium text-foreground/70 hover:text-foreground" onClick={() => setMenuOpen(false)}>
            Services
          </a>
          <a href="#faq" className="text-sm font-medium text-foreground/70 hover:text-foreground" onClick={() => setMenuOpen(false)}>
            FAQ
          </a>
          <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full w-full">
            <a href="#quote" onClick={() => setMenuOpen(false)}>Get a Free Quote</a>
          </Button>
        </div>
      )}
    </header>
  )
}
