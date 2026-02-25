"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
})

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
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 pt-16 flex flex-col items-center">
        <motion.span
          {...fadeUp(0)}
          className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-white/70 mb-6 border border-white/20 rounded-full px-4 py-1.5"
        >
          Montreal &amp; West Island
        </motion.span>

        <motion.h1
          {...fadeUp(0.1)}
          className="font-extrabold tracking-tight leading-tight text-white drop-shadow-2xl text-2xl sm:text-3xl md:text-5xl text-balance mb-6"
        >
          Montreal&apos;s Gold Standard
          <br />
          In Premium Cleaning
        </motion.h1>

        <motion.p
          {...fadeUp(0.2)}
          className="text-lg md:text-xl text-white/80 leading-relaxed text-balance mb-10 max-w-xl"
        >
          Spotless results. Fully vetted professionals. 100% peace of mind for your home or business.
        </motion.p>

        <motion.div
          {...fadeUp(0.3)}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 py-2.5 text-sm sm:px-8 sm:py-3 sm:text-base font-semibold shadow-lg"
          >
            <Link href="/contact">Get a Free Quote</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full px-6 py-2.5 text-sm sm:px-8 sm:py-3 sm:text-base font-semibold border-white/40 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm"
          >
            <Link href="/services">View Our Services</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
