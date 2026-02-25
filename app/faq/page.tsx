"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { CheckCircle } from "lucide-react"

const faqs = [
  {
    q: "Is Carma Cleaning insured and bonded?",
    a: "Yes. Carma Cleaning is fully insured and bonded. In the unlikely event of any damage or incident, you are completely covered. We carry general liability insurance on every job.",
  },
  {
    q: "How do you vet your cleaning staff?",
    a: "Every team member undergoes a rigorous background check, reference verification, and in-person interview before their first assignment. We never send someone to your property we wouldn't trust in our own home.",
  },
  {
    q: "Do you use eco-friendly cleaning products?",
    a: "Yes. We use non-toxic, biodegradable, eco-certified products that are safe for children, pets, and people with sensitivities. You can request product-specific information at any time.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve the Island of Montreal, West Island (including Beaconsfield, Pointe-Claire, Dollard-des-Ormeaux, and Kirkland), Laval, and the South Shore. Contact us if you're unsure about your location.",
  },
  {
    q: "How do I book a cleaning?",
    a: "Fill out the quote form on our Contact page. A team member will follow up within a few hours to confirm your details, discuss your needs, and schedule your first appointment.",
  },
  {
    q: "What is your cancellation policy?",
    a: "We ask for at least 24 hours notice for cancellations or rescheduling. Cancellations with less than 24 hours notice may be subject to a short-notice fee to compensate the assigned team.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept Visa, Mastercard, American Express, Interac e-Transfer, and cash. Commercial clients on recurring contracts are invoiced monthly via email.",
  },
  {
    q: "Do you offer commercial cleaning contracts?",
    a: "Yes. We work with offices, clinics, retail locations, and property managers on weekly, bi-weekly, and monthly contracts. Contact us for a custom commercial quote and a dedicated account manager.",
  },
  {
    q: "Do you hold keys for regular clients?",
    a: "Yes. Many of our regular residential clients provide a key or access code. All keys are stored securely and logged. Your assigned team is the only one with access. Keys are returned immediately upon request.",
  },
  {
    q: "What if I'm not satisfied with the clean?",
    a: "We stand behind our work with a 100% satisfaction guarantee. If you're not happy with any aspect of the service, contact us within 24 hours and we will return to make it right — at no additional charge.",
  },
]

export default function FaqPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-transparent">
      <Navbar />

      {/* Page header */}
      <section className="pt-32 pb-16 text-center">
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3 block animate-fade-in-up">
          FAQ
        </span>
        <h1 className="font-serif text-5xl md:text-6xl text-foreground text-balance animate-fade-in-up animate-delay-100">
          Common Questions
        </h1>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm leading-relaxed animate-fade-in-up animate-delay-200">
          Everything you need to know before booking. Can't find your answer? Ask us below.
        </p>
      </section>

      {/* Accordion */}
      <section className="max-w-3xl mx-auto px-6 py-8 pb-20">
        <Accordion type="single" collapsible className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-white/60 backdrop-blur-md border border-white/60 rounded-xl px-6 py-1 shadow-sm animate-fade-in-up"
              style={{ animationDelay: `${i * 0.05}s` }}
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
      </section>

      {/* Contact form */}
      <section className="pb-20">
        <div className="max-w-xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">Still have questions?</h2>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              Send us a message and we'll get back to you within a few hours.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-xl border border-white/60 rounded-2xl p-8 shadow-xl shadow-foreground/8">
            {submitted ? (
              <div className="flex flex-col items-center gap-4 py-8 text-center">
                <CheckCircle size={44} className="text-primary" />
                <h3 className="text-lg font-bold text-foreground">Message Received!</h3>
                <p className="text-muted-foreground text-sm max-w-xs">We'll be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="name" className="text-sm font-semibold text-foreground">Name</Label>
                    <Input id="name" placeholder="Your name" required className="rounded-xl bg-white/80 border-border/60 focus-visible:ring-primary" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="email" className="text-sm font-semibold text-foreground">Email</Label>
                    <Input id="email" type="email" placeholder="you@example.com" required className="rounded-xl bg-white/80 border-border/60 focus-visible:ring-primary" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="question" className="text-sm font-semibold text-foreground">Your Question</Label>
                  <Textarea
                    id="question"
                    placeholder="What would you like to know?"
                    required
                    rows={4}
                    className="rounded-xl bg-white/80 border-border/60 focus-visible:ring-primary resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl font-semibold btn-magnetic"
                >
                  Submit Question
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
