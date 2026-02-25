import { Shield, Users, MapPin } from "lucide-react"

const items = [
  {
    icon: Shield,
    label: "Fully Insured & Bonded",
    sub: "Your home is always protected",
  },
  {
    icon: Users,
    label: "Rigorous Background Checks",
    sub: "Every cleaner thoroughly vetted",
  },
  {
    icon: MapPin,
    label: "Serving Montreal & West Island",
    sub: "Local professionals you can trust",
  },
]

export function TrustBanner() {
  return (
    <section className="bg-foreground/95 backdrop-blur-sm text-white">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, label, sub }, i) => (
            <div key={label} className="flex items-center gap-4 animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                <Icon size={18} style={{ color: "#38bdf8" }} />
              </div>
              <div>
                <p className="font-semibold text-sm text-white">{label}</p>
                <p className="text-xs text-white/50 mt-0.5">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
