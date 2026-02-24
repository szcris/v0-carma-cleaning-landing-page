import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { TrustBanner } from "@/components/trust-banner"
import { ServicesSection } from "@/components/services-section"
import { BeforeAfterSlider } from "@/components/before-after-slider"
import { QuoteForm } from "@/components/quote-form"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <TrustBanner />
      <ServicesSection />
      <BeforeAfterSlider />
      <QuoteForm />
      <FaqSection />
      <Footer />
    </main>
  )
}
