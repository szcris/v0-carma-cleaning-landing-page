"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle } from "lucide-react"

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="quote" className="py-24 bg-background">
      <div className="max-w-2xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
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

        {/* Card */}
        <div className="bg-card rounded-2xl border border-border shadow-lg shadow-foreground/5 p-8 md:p-10">
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
              {/* Name row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="first-name" className="text-sm font-medium text-foreground">
                    First Name
                  </Label>
                  <Input
                    id="first-name"
                    placeholder="Marie"
                    required
                    className="rounded-xl border-border bg-background focus-visible:ring-primary"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="last-name" className="text-sm font-medium text-foreground">
                    Last Name
                  </Label>
                  <Input
                    id="last-name"
                    placeholder="Tremblay"
                    required
                    className="rounded-xl border-border bg-background focus-visible:ring-primary"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <Label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="marie@example.com"
                  required
                  className="rounded-xl border-border bg-background focus-visible:ring-primary"
                />
              </div>

              {/* Service */}
              <div className="flex flex-col gap-2">
                <Label htmlFor="service" className="text-sm font-medium text-foreground">
                  Service Needed
                </Label>
                <Select required>
                  <SelectTrigger className="rounded-xl border-border bg-background focus:ring-primary">
                    <SelectValue placeholder="Select a service…" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="residential">Residential Cleaning</SelectItem>
                    <SelectItem value="commercial">Commercial Cleaning</SelectItem>
                    <SelectItem value="move">Move In / Move Out</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Frequency */}
              <div className="flex flex-col gap-2">
                <Label htmlFor="frequency" className="text-sm font-medium text-foreground">
                  Frequency
                </Label>
                <Select required>
                  <SelectTrigger className="rounded-xl border-border bg-background focus:ring-primary">
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
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl text-base font-semibold mt-2"
              >
                Request Free Quote
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
