"use client"

import Link from "next/link"
import { useState } from "react"
import { Sparkles, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Residential Cleaning",
    badge: "Nettoyage Résidentiel",
    description: "Deep cleans and regular maintenance tailored to your lifestyle. We treat your home as our own.",
    image: "/images/card-residential.jpg",
    query: "residential",
  },
  {
    title: "Commercial Cleaning",
    badge: "Nettoyage Commercial",
    description: "Professional environments require professional care. Offices, clinics, and retail — spotless, every time.",
    image: "/images/card-commercial.jpg",
    query: "commercial",
  },
  {
    title: "Move-In / Move-Out",
    badge: "Déménagement",
    description: "Detailed, top-to-bottom scrubbing to ensure the property is flawless for the next chapter.",
    image: "/images/card-moveinout.jpg",
    query: "moving",
  },
]

function ServiceCard({ title, badge, description, image, query }: (typeof services)[0]) {
  const [hovered, setHovered] = useState(false)

  return (
    <Link
      href={`/contact?service=${query}`}
      className="group relative rounded-2xl overflow-hidden border border-white/60 shadow-md hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/15 transition-all duration-300 block w-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background image — 60% visible */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-white/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 p-8 flex flex-col items-center justify-center text-center gap-4 min-h-[300px]">
        <span className="inline-block text-[10px] font-semibold tracking-widest uppercase text-primary px-2.5 py-1 rounded-full border border-primary/40 bg-white/30">
          {badge}
        </span>
        <h3 className="text-lg font-bold text-black drop-shadow-sm">{title}</h3>
        <p className="text-sm font-semibold leading-relaxed text-black drop-shadow-sm max-w-[220px]">{description}</p>
        <Button
          asChild
          className="rounded-md shadow-md text-white gap-2 transition-all duration-300"
          style={{ backgroundColor: "#0284C7" }}
        >
          <span>
            <Sparkles
              size={14}
              className={`transition-all duration-300 ${hovered ? "rotate-12 scale-125" : ""}`}
            />
            Get a Quote
          </span>
        </Button>
      </div>
    </Link>
  )
}

export function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const prev = () => setActiveIndex((i) => (i - 1 + services.length) % services.length)
  const next = () => setActiveIndex((i) => (i + 1) % services.length)

  return (
    <section id="services" className="py-24 bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3 block">
            What We Do
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance">
            Our Cleaning Expertise
          </h2>
        </div>

        {/* Mobile: arrow-navigated single card */}
        <div className="md:hidden relative flex items-center justify-center gap-3">
          <button
            onClick={prev}
            aria-label="Previous service"
            className="shrink-0 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border border-white/60 shadow flex items-center justify-center hover:bg-white transition-colors"
          >
            <ChevronLeft size={20} className="text-foreground" />
          </button>

          <div className="flex-1 min-w-0">
            <ServiceCard {...services[activeIndex]} />
          </div>

          <button
            onClick={next}
            aria-label="Next service"
            className="shrink-0 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border border-white/60 shadow flex items-center justify-center hover:bg-white transition-colors"
          >
            <ChevronRight size={20} className="text-foreground" />
          </button>
        </div>

        {/* Mobile dot indicators */}
        <div className="md:hidden flex justify-center gap-2 mt-4">
          {services.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to service ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-colors ${i === activeIndex ? "bg-primary" : "bg-foreground/20"}`}
            />
          ))}
        </div>

        {/* Desktop: 3-col grid */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
