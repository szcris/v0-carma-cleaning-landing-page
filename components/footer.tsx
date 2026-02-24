export function Footer() {
  return (
    <footer className="bg-foreground text-white/70 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="text-white font-bold text-lg tracking-tight">
              Carma<span className="text-primary" style={{ color: "#38bdf8" }}>.</span> Cleaning
            </p>
            <p className="text-xs mt-1 text-white/40">Premium cleaning services, Montreal.</p>
          </div>

          {/* Contact */}
          <div className="text-center text-sm">
            <a href="tel:5141234567" className="hover:text-white transition-colors">
              514-123-4567
            </a>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-xs">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center text-xs text-white/30">
          Carma Cleaning © 2026. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
