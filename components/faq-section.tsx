import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    q: "Do I need to be home during the cleaning?",
    a: "No, most clients provide a key or access code. Our staff is fully vetted, background-checked, and trustworthy — your home is in safe hands whether you're there or not.",
  },
  {
    q: "Who provides the cleaning supplies?",
    a: "We bring our own high-quality, eco-friendly supplies and professional equipment. You don't need to provide anything.",
  },
  {
    q: "What areas do you cover?",
    a: "We proudly serve the Island of Montreal, West Island, and surrounding areas. Contact us if you're unsure about your location.",
  },
  {
    q: "How do I book or reschedule?",
    a: "Fill out our quote form and our team will be in touch within a few hours to confirm your booking and any scheduling details.",
  },
  {
    q: "Are you insured?",
    a: "Absolutely. Carma Cleaning is fully insured and bonded. You're covered in the unlikely event of any damage or incident.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="py-8 md:py-12 bg-transparent">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-8 animate-fade-in-up">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3 block">
            FAQ
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance">
            Common Questions
          </h2>
          <p className="text-muted-foreground mt-3 text-sm">
            More questions?{" "}
            <Link href="/faq" className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors">
              See the full FAQ →
            </Link>
          </p>
        </div>

        <Accordion type="single" collapsible className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-white/60 backdrop-blur-md border border-white/60 rounded-xl px-6 py-1 shadow-sm animate-fade-in-up"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <AccordionTrigger className="text-sm font-semibold text-foreground hover:no-underline py-5 text-left">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
