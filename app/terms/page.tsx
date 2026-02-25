import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Terms & Conditions | Carma Cleaning",
  description: "Terms and Conditions for Carma Cleaning Services Inc., governed by the laws of the Province of Quebec.",
}

const sections = [
  {
    heading: "Service Standards",
    body: "We provide \"Gold Standard\" cleaning services as described on our Services page.",
  },
  {
    heading: "Cancellations",
    body: "We require 24 hours' notice for any service cancellations or rescheduling to avoid a convenience fee.",
  },
  {
    heading: "Payments",
    body: "Payments for commercial and residential services are due upon receipt of invoice unless otherwise agreed upon in writing.",
  },
  {
    heading: "Liability",
    body: "While we treat your space with the utmost care, Carma Cleaning Services Inc. is not responsible for pre-existing damage or wear and tear.",
  },
  {
    heading: "Governing Law",
    body: "These terms are governed by the laws of the Province of Quebec. Any disputes shall be handled in the courts of Montreal, QC.",
  },
]

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="max-w-3xl mx-auto px-6 md:px-20 py-32">
        {/* Header */}
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3 block">
            Legal
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            Terms &amp; Conditions
          </h1>
          <p className="text-sm text-muted-foreground">
            Last Updated: <span className="text-foreground font-medium">February 25, 2026</span>
          </p>
        </div>

        {/* Intro */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-10">
          By using the services of Carma Cleaning Services Inc., you agree to the following terms and conditions.
        </p>

        {/* Sections */}
        <div className="flex flex-col gap-8">
          {sections.map(({ heading, body }) => (
            <div key={heading} className="border-l-2 border-primary pl-5">
              <h2 className="text-base font-semibold text-foreground mb-2">{heading}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
