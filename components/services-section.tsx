import Link from "next/link"

const services = [
  {
    title: "Residential Cleaning",
    badge: "Nettoyage Résidentiel",
    description: "Deep cleans and regular maintenance tailored to your lifestyle. We treat your home as our own.",
    image: "/images/card-residential.jpg",
  },
  {
    title: "Commercial Cleaning",
    badge: "Nettoyage Commercial",
    description: "Professional environments require professional care. Offices, clinics, and retail — spotless, every time.",
    image: "/images/card-commercial.jpg",
  },
  {
    title: "Move-In / Move-Out",
    badge: "Déménagement",
    description: "Detailed, top-to-bottom scrubbing to ensure the property is flawless for the next chapter.",
    image: "/images/card-moveinout.jpg",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-background">
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
          {services.map(({ title, badge, description, image }) => (
            <Link
              key={title}
              href="/services"
              className="group relative rounded-2xl overflow-hidden border border-border shadow-sm hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 block"
            >
              {/* Background image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* 80% light overlay */}
                <div className="absolute inset-0 bg-white/80" />
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 flex flex-col gap-4 min-h-[240px]">
                <span className="inline-block text-[10px] font-semibold tracking-widest uppercase text-primary/80 bg-secondary/80 backdrop-blur-sm px-2.5 py-1 rounded-full w-fit">
                  {badge}
                </span>
                <div className="mt-auto">
                  <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
                  <p className="text-sm text-foreground/60 leading-relaxed">{description}</p>
                </div>
                <span className="text-xs font-semibold text-primary flex items-center gap-1">
                  Learn more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
