import { Home, Briefcase, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Home,
    title: "Residential Cleaning",
    badge: "Nettoyage Résidentiel",
    description:
      "Deep cleans and regular maintenance tailored to your lifestyle. We treat your home as our own.",
  },
  {
    icon: Briefcase,
    title: "Commercial Cleaning",
    badge: "Nettoyage Commercial",
    description:
      "Professional environments require professional care. Offices, clinics, and retail — spotless, every time.",
  },
  {
    icon: Sparkles,
    title: "Move-In / Move-Out",
    badge: "Déménagement",
    description:
      "Detailed, top-to-bottom scrubbing to ensure the property is flawless for the next chapter.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3 block">
            What We Do
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance">
            Our Cleaning Expertise
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, badge, description }) => (
            <Card
              key={title}
              className="group border border-border bg-card rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/10"
            >
              <CardContent className="p-8 flex flex-col gap-5">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                  <Icon size={22} className="text-primary" />
                </div>
                {/* Badge */}
                <span className="inline-block text-[10px] font-semibold tracking-widest uppercase text-primary/80 bg-secondary px-2.5 py-1 rounded-full w-fit">
                  {badge}
                </span>
                {/* Text */}
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
