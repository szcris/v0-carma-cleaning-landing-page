import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-office.jpg"
          alt="Spotless high-end commercial office"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/30 to-foreground/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto px-6 pt-16">
        <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-white/70 mb-6 border border-white/20 rounded-full px-4 py-1.5 animate-fade-in-up">
          Montreal &amp; West Island
        </span>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-tight text-balance mb-6 animate-fade-in-up animate-delay-100">
          The Most Reliable Cleaning Hands in Montreal.
        </h1>
        <p className="text-lg md:text-xl text-white/80 leading-relaxed text-balance mb-10 max-w-xl mx-auto animate-fade-in-up animate-delay-200">
          Spotless results. Fully vetted professionals. 100% peace of mind for your home or business.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-300">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 text-base font-semibold shadow-lg btn-magnetic"
          >
            <Link href="/contact">Get a Free Quote</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full px-8 text-base font-semibold border-white/40 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm btn-magnetic"
          >
            <Link href="/services">View Our Services</Link>
          </Button>
        </div>
      </div>

    </section>
  )
}
