import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Privacy Policy | Carma Cleaning",
  description: "Privacy Policy for Carma Cleaning Services Inc., compliant with Quebec's Law 25.",
}

const sections = [
  {
    heading: "Information Collection",
    body: "We collect names, email addresses, and phone numbers via our \"Get a Free Quote\" forms solely to provide cleaning estimates.",
  },
  {
    heading: "Use of Data",
    body: "Your information is used only for service scheduling and client communication. We do not sell or share your data with third parties.",
  },
  {
    heading: "Data Security",
    body: "We implement high-end security measures to protect your personal information from unauthorized access.",
  },
  {
    heading: "Your Rights",
    body: "Residents of Quebec have the right to access, correct, or request the deletion of their personal data at any time by contacting us via our contact page.",
  },
]

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground">
            Effective Date: <span className="text-foreground font-medium">February 25, 2026</span>
          </p>
        </div>

        {/* Intro */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-10">
          At Carma Cleaning Services Inc., we are committed to protecting the privacy of our Montreal clients.
          In accordance with Quebec's Law 25, this policy outlines how we handle your data.
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
