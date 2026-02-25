"use client"

import { useEffect, useRef } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Marc-André D.",
    initials: "MD",
    slug: "marc-andre-d",
    text: "The most professional commercial cleaners we've ever hired for our West Island office.",
  },
  {
    name: "Sarah L.",
    initials: "SL",
    slug: "sarah-l",
    text: "Spotless residential cleaning. They are reliable, insured, and incredibly detail-oriented.",
  },
  {
    name: "Jean-François P.",
    initials: "JP",
    slug: "jean-francois-p",
    text: "Our dealership showroom has never looked better. The attention to detail is unmatched.",
  },
  {
    name: "Elena R.",
    initials: "ER",
    slug: "elena-r",
    text: "Used them for a move-out clean in the Plateau. They got my full deposit back. Exceptional!",
  },
  {
    name: "Dr. Aris V.",
    initials: "AV",
    slug: "dr-aris-v",
    text: "High standards for my medical clinic. Carma Cleaning is consistent and trustworthy.",
  },
  {
    name: "Sophie T.",
    initials: "ST",
    slug: "sophie-t",
    text: "Excellent service in Brossard. The team is friendly and the eco-friendly products smell amazing.",
  },
  {
    name: "Robert K.",
    initials: "RK",
    slug: "robert-k",
    text: "Finally a cleaning company that actually shows up on time and does what they promise.",
  },
  {
    name: "Lucie M.",
    initials: "LM",
    slug: "lucie-m",
    text: "Le grand ménage était impeccable. Ma maison brille du sol au plafond.",
  },
  {
    name: "David W.",
    initials: "DW",
    slug: "david-w",
    text: "Professional, bonded, and insured. Peace of mind is worth every penny with Carma.",
  },
  {
    name: "Amélie G.",
    initials: "AG",
    slug: "amelie-g",
    text: "Fast, efficient, and the 30-second quote system is so easy to use.",
  },
]

export function TestimonialsCarousel() {
  const apiRef = useRef<CarouselApi | null>(null)

  useEffect(() => {
    if (!apiRef.current) return
    const interval = setInterval(() => {
      apiRef.current?.scrollNext()
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-24 bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14 animate-fade-in-up">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3 block">
            Client Success
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance">
            What Our Clients Say
          </h2>
        </div>

        <Carousel
          setApi={(api) => { apiRef.current = api }}
          opts={{ loop: true, align: "center" }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((t, i) => (
              <CarouselItem key={i} className="pl-4 basis-full md:basis-1/3">
                <div className="bg-white/60 backdrop-blur-md border border-white/60 rounded-2xl p-6 shadow-md flex flex-col gap-4 h-full">
                  {/* Stars */}
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} size={14} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Testimonial text */}
                  <p className="text-sm font-semibold text-black leading-relaxed flex-1">
                    &ldquo;{t.text}&rdquo;
                  </p>

                  {/* Profile footer */}
                  <div className="flex items-center gap-3 pt-2 border-t border-border/40">
                    <Avatar className="h-9 w-9">
                      <AvatarImage
                        src={`https://i.pravatar.cc/150?u=${t.slug}`}
                        alt={t.name}
                      />
                      <AvatarFallback className="bg-primary/10 text-primary text-xs font-bold">
                        {t.initials}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-semibold text-foreground">{t.name}</span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4 md:-left-5 bg-white/70 backdrop-blur-md border-white/60 hover:bg-white/90" />
          <CarouselNext className="-right-4 md:-right-5 bg-white/70 backdrop-blur-md border-white/60 hover:bg-white/90" />
        </Carousel>
      </div>
    </section>
  )
}
