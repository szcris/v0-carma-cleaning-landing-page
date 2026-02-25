"use client"

import Link from "next/link"
import { useState } from "react"
import { Sparkles } from "lucide-react"
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
      className="group relative rounded-2xl overflow-hidden border border-white/60 shadow-md hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/15 transition-all duration-300 block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* 20% white overlay = 80% image opacity */}
        <div className="absolute inset-0 bg-white/20" />
      </div>

      {/* Content — centered column */}
      <div className="relative z-10 p-8 flex flex-col items-center justify-center text-center gap-5 min-h-[300px]">
        {/* Badge top */}
        <span className="inline-block text-[10px] font-semibold tracking-widest uppercase text-primary bg-white/70 backdrop-blur-sm px-2.5 py-1 rounded-full border border-primary/20">
          {badge}
        </span>

        {/* Title + description */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold text-black">{title}</h3>
          <p className="text-sm text-black leading-relaxed">{description}</p>
        </div>

        {/* CTA button */}
        <Button
          asChild
          className="rounded-md shadow-md bg-foreground text-white hover:bg-foreground/90 gap-2 pointer-events-none"
          tabIndex={-1}
          aria-hidden="true"
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
