"use client"

import Link from "next/link"
import { useState } from "react"
import { Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { cn } from "@/lib/utils"

const services = [
  {
    id: "residential",
    title: "Residential Cleaning",
    badge: "Nettoyage Résidentiel",
    queryParam: "residential",
    before: "/images/residential-before.jpg",
    after: "/images/residential-after.jpg",
    beforeAlt: "Dirty bathroom before cleaning",
    afterAlt: "Spotless bathroom after Carma cleaning",
    points: [
      "Fully vetted, background-checked cleaners — the same trusted team every visit.",
      "Fully insured and bonded. Every job is covered, no exceptions.",
      "Eco-friendly, non-toxic products safe for children and pets.",
      "Consistent results whether it's a weekly refresh or a one-time deep clean.",
    ],
  },
  {
    id: "commercial",
    title: "Commercial Cleaning",
    badge: "Nettoyage Commercial",
    queryParam: "commercial",
    before: "/images/commercial-before.jpg",
    after: "/images/commercial-after.jpg",
    beforeAlt: "Dirty office break room before cleaning",
    afterAlt: "Spotless office break room after Carma cleaning",
    points: [
      "Flexible scheduling — early morning, evening, or weekend cleans to fit your operations.",
      "Commercial-grade equipment and professional-strength, safe products.",
      "All staff are insured, bonded, and rigorously screened.",
      "Recurring contracts available with dedicated account management.",
    ],
  },
  {
    id: "moveinout",
    title: "Move-In / Move-Out Cleaning",
    badge: "Déménagement",
    queryParam: "move",
    before: "/images/move-before.jpg",
    after: "/images/move-after.jpg",
    beforeAlt: "Empty apartment with grime before cleaning",
    afterAlt: "Immaculate empty apartment after Carma cleaning",
    points: [
      "Top-to-bottom deep clean covering every surface, corner, and appliance.",
      "Ideal for landlords, tenants, and real estate professionals.",
      "Helps secure deposits back and satisfy lease-end obligations.",
      "Insured team ensures zero liability on the property during the clean.",
    ],
  },
]

function SparkleButton({ href, label }: { href: string; label?: string }) {
  const [hovered, setHovered] = useState(false)
  return (
    <Button
      asChild
      size="lg"
      className={cn(
        "rounded-md bg-foreground text-white hover:bg-foreground/90 transition-all duration-200 gap-2 font-semibold text-sm"
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link href={href}>
        <Sparkles
          size={15}
          className={cn(
            "transition-all duration-300",
            hovered ? "opacity-100 scale-110 rotate-12" : "opacity-40 scale-100 rotate-0"
          )}
        />
        {label ?? "Get a Free Quote"}
      </Link>
    </Button>
  )
}

export default function ServicesPage() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />

      {/* Page header */}
      <section className="pt-32 pb-16 text-center bg-secondary/30">
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3 block">
          What We Offer
        </span>
        <h1 className="font-serif text-5xl md:text-6xl text-foreground text-balance">
          Our Services
        </h1>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm leading-relaxed">
          Every service backed by vetted staff, full insurance, and a satisfaction guarantee.
        </p>
      </section>

      {/* Service sections */}
      <div className="max-w-5xl mx-auto px-6 py-20 flex flex-col gap-24">
        {services.map(({ id, title, badge, queryParam, before, after, beforeAlt, afterAlt, points }, index) => (
          <section key={id} id={id}>
            <div className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 items-center`}>
              {/* Before / After side-by-side */}
              <div className="w-full lg:w-1/2 grid grid-cols-2 gap-3 shrink-0">
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
                  <img src={before} alt={beforeAlt} className="absolute inset-0 w-full h-full object-cover" />
                  <span className="absolute bottom-2 left-2 text-[10px] font-bold tracking-widest uppercase bg-foreground/70 text-white px-2 py-0.5 rounded-full">
                    Before
                  </span>
                </div>
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
                  <img src={after} alt={afterAlt} className="absolute inset-0 w-full h-full object-cover" />
                  <span className="absolute bottom-2 left-2 text-[10px] font-bold tracking-widest uppercase bg-primary text-white px-2 py-0.5 rounded-full">
                    After
                  </span>
                </div>
              </div>

              {/* Text */}
              <div className="w-full lg:w-1/2 flex flex-col gap-5">
                <span className="inline-block text-[10px] font-semibold tracking-widest uppercase text-primary/80 bg-secondary px-2.5 py-1 rounded-full w-fit">
                  {badge}
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground">{title}</h2>
                <ul className="flex flex-col gap-3">
                  {points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-2">
                  <SparkleButton href={`/#quote?service=${queryParam}`} />
                </div>
              </div>
            </div>

            {index < services.length - 1 && (
              <div className="mt-24 border-t border-border" />
            )}
          </section>
        ))}
      </div>

      <Footer />
    </main>
  )
}
