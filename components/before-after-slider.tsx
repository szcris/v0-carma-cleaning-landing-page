"use client"

import { useRef, useState, useCallback } from "react"
import { GripVertical } from "lucide-react"

const MIN = 5
const MAX = 95

export function BeforeAfterSlider() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState(50)
  const isDragging = useRef(false)

  const updatePosition = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPosition(Math.min(MAX, Math.max(MIN, pct)))
  }, [])

  const startDrag = useCallback(() => { isDragging.current = true }, [])
  const stopDrag = useCallback(() => { isDragging.current = false }, [])

  return (
    <section className="py-10 md:py-24 bg-secondary/30">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3 block">
            Results
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance">
            See the Carma Difference.
          </h2>
          <p className="text-muted-foreground mt-4 text-sm">Drag the handle to reveal the transformation</p>
        </div>

        {/* Slider */}
        <div
          ref={containerRef}
          className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden cursor-ew-resize select-none shadow-2xl"
          onMouseMove={(e) => { if (isDragging.current) updatePosition(e.clientX) }}
          onMouseDown={startDrag}
          onMouseUp={stopDrag}
          onMouseLeave={stopDrag}
          onTouchMove={(e) => updatePosition(e.touches[0].clientX)}
          onTouchStart={startDrag}
          onTouchEnd={stopDrag}
          role="slider"
          aria-valuemin={MIN}
          aria-valuemax={MAX}
          aria-valuenow={Math.round(position)}
          aria-label="Before and after comparison slider"
          tabIndex={0}
        >
          {/* AFTER (clean) — full base layer, static */}
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-02-24%20191007-3YapgMcwu9rAo18w0L55G54AU4Gy4w.png"
            alt="After professional cleaning — spotless dealership office"
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />

          {/* BEFORE (dirty) — clipped top layer, revealed by position */}
          <div
            className="absolute inset-0"
            style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          >
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_f9uz1hf9uz1hf9uz.png-baAiKlJQbbKMmajigSkiturmQCYGyY.jpeg"
              alt="Before cleaning — messy dealership office with white tables"
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />
          </div>

          {/* Divider line */}
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-10 pointer-events-none"
            style={{ left: `${position}%` }}
          />

          {/* Handle — larger for thumb-scrolling on mobile */}
          <div
            className="absolute top-1/2 z-10 -translate-y-1/2 -translate-x-1/2 w-12 h-12 md:w-10 md:h-10 rounded-full bg-white shadow-xl flex items-center justify-center border-2 border-white pointer-events-none"
            style={{ left: `${position}%` }}
          >
            <GripVertical size={20} className="text-foreground/70" />
          </div>

          {/* Labels */}
          <span className="absolute bottom-4 left-4 z-10 text-xs font-bold tracking-widest uppercase bg-foreground/70 text-white px-2.5 py-1 rounded-full pointer-events-none">
            Before
          </span>
          <span className="absolute bottom-4 right-4 z-10 text-xs font-bold tracking-widest uppercase bg-primary text-white px-2.5 py-1 rounded-full pointer-events-none">
            After
          </span>
        </div>
      </div>
    </section>
  )
}
