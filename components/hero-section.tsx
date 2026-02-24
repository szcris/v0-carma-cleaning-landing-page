import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-living-room.jpg"
          alt="Pristine clean living room"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/30 to-foreground/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto px-6 pt-16">
        <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-white/70 mb-6 border border-white/20 rounded-full px-4 py-1.5">
          Montreal &amp; West Island
        </span>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-tight text-balance mb-6">
          The Most Reliable Hands in Montreal.
        </h1>
        <p className="text-lg md:text-xl text-white/80 leading-relaxed text-balance mb-10 max-w-xl mx-auto">
          Spotless results. Fully vetted professionals. 100% peace of mind for your home or business.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 text-base font-semibold shadow-lg"
          >
            <a href="#quote">Get a Free Quote</a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full px-8 text-base font-semibold border-white/40 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm"
          >
            <a href="#services">View Our Services</a>
          </Button>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-0.5 h-8 bg-white/40 mx-auto" />
      </div>
    </section>
  )
}
