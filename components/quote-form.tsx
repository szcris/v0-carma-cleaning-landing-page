"use client"

import { useEffect, useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CheckCircle } from "lucide-react"

export const SERVICE_OPTIONS = [
  { value: "residential", label: "Residential Cleaning" },
  { value: "commercial", label: "Commercial Cleaning" },
  { value: "move", label: "Move In / Move Out" },
]

function QuoteFormInner({ asPage = false }: { asPage?: boolean }) {
  const searchParams = useSearchParams()
  const [submitted, setSubmitted] = useState(false)
  const [service, setService] = useState<string>("")

  useEffect(() => {
    const param = searchParams.get("service")
    if (param && SERVICE_OPTIONS.some((o) => o.value === param)) {
      setService(param)
    }
  }, [searchParams])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const Wrapper = asPage ? "div" : "section"

  return (
    <Wrapper id={asPage ? undefined : "quote"} className={asPage ? undefined : "py-24 bg-transparent"}>
      <div className="max-w-2xl mx-auto px-6">
        {!asPage && (
          <div className="text-center mb-10 animate-fade-in-up">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3 block">
              Free Estimate
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance">
              Get Your Estimate in 30 Seconds
            </h2>
            <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
              No commitment required. We'll get back to you within a few hours.
            </p>
          </div>
        )}

        {/* Glass card */}
        <div className="bg-white/70 backdrop-blur-xl rounded-2xl border border-white/60 shadow-xl shadow-foreground/8 p-8 md:p-10 animate-fade-in-up animate-delay-100">
          {submitted ? (
            <div className="flex flex-col items-center gap-4 py-10 text-center">
              <CheckCircle size={48} className="text-primary" />
              <h3 className="text-xl font-bold text-foreground">Request Received!</h3>
              <p className="text-muted-foreground text-sm max-w-xs">
                Thank you! A member of our team will follow up within a few hours to discuss your needs.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="first-name" className="text-sm font-semibold text-foreground">First Name</Label>
                  <Input id="first-name" placeholder="Marie" required className="rounded-xl bg-white/80 border-border/60 focus-visible:ring-primary" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="last-name" className="text-sm font-semibold text-foreground">Last Name</Label>
                  <Input id="last-name" placeholder="Tremblay" required className="rounded-xl bg-white/80 border-border/60 focus-visible:ring-primary" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="email" className="text-sm font-semibold text-foreground">Email Address</Label>
                <Input id="email" type="email" placeholder="marie@example.com" required className="rounded-xl bg-white/80 border-border/60 focus-visible:ring-primary" />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="phone" className="text-sm font-semibold text-foreground">Phone <span className="text-muted-foreground font-normal">(optional)</span></Label>
                <Input id="phone" type="tel" placeholder="514-555-0100" className="rounded-xl bg-white/80 border-border/60 focus-visible:ring-primary" />
              </div>

              <div className="flex flex-col gap-2">
                <Label className="text-sm font-semibold text-foreground">Service Needed</Label>
                <Select value={service} onValueChange={setService} required>
                  <SelectTrigger className="rounded-xl bg-white/80 border-border/60 focus:ring-primary">
                    <SelectValue placeholder="Select a service…" />
                  </SelectTrigger>
                  <SelectContent>
                    {SERVICE_OPTIONS.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col gap-2">
                <Label className="text-sm font-semibold text-foreground">Frequency</Label>
                <Select required>
                  <SelectTrigger className="rounded-xl bg-white/80 border-border/60 focus:ring-primary">
                    <SelectValue placeholder="How often?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="once">One-Time</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="biweekly">Bi-Weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl text-base font-semibold mt-2 btn-magnetic"
              >
                Request Free Quote
              </Button>
            </form>
          )}
        </div>
      </div>
    </Wrapper>
  )
}

export function QuoteForm({ asPage = false }: { asPage?: boolean }) {
  return (
    <Suspense fallback={null}>
      <QuoteFormInner asPage={asPage} />
    </Suspense>
  )
}
