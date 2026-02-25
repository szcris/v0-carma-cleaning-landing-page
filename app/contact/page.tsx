import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { QuoteForm } from "@/components/quote-form"

export const metadata = {
  title: "Get a Free Quote – Carma Cleaning Montreal",
  description: "Request a free, no-commitment cleaning estimate in 30 seconds. Serving Montreal, West Island, and surrounding areas.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-transparent">
      <Navbar />

      {/* Page header */}
      <section className="pt-32 pb-16 text-center">
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3 block animate-fade-in-up">
          Free Estimate
        </span>
        <h1 className="font-serif text-5xl md:text-6xl text-foreground text-balance animate-fade-in-up animate-delay-100">
          Get Your Estimate in 30 Seconds
        </h1>
        <p className="text-muted-foreground mt-4 max-w-md mx-auto text-sm leading-relaxed animate-fade-in-up animate-delay-200">
          No commitment. No pressure. Just a fast, friendly quote from a local team you can trust.
        </p>
      </section>

      {/* The form — asPage removes the duplicate heading */}
      <QuoteForm asPage />

      <div className="py-10" />

      <Footer />
    </main>
  )
}
