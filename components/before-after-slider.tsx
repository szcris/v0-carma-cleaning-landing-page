"use client"

import { useRef, useState, useCallback } from "react"
import { GripVertical } from "lucide-react"

export function BeforeAfterSlider() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState(50)
  const isDragging = useRef(false)

  const getPosition = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    setPosition((x / rect.width) * 100)
  }, [])

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging.current) return
      getPosition(e.clientX)
    },
    [getPosition]
  )

  const onTouchMove = useCallback(
    (e: React.TouchEvent) => {
      getPosition(e.touches[0].clientX)
    },
    [getPosition]
  )

  return (
    <section className="py-24 bg-secondary/30">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
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
          onMouseMove={onMouseMove}
          onMouseDown={() => (isDragging.current = true)}
          onMouseUp={() => (isDragging.current = false)}
          onMouseLeave={() => (isDragging.current = false)}
          onTouchMove={onTouchMove}
          role="slider"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(position)}
          aria-label="Before and after comparison slider"
        >
          {/* AFTER (base layer) */}
          <img
            src="/images/kitchen-after.jpg"
            alt="After professional cleaning – spotless kitchen"
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />

          {/* BEFORE (clipped layer) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${position}%` }}
          >
            <img
              src="/images/kitchen-before.jpg"
              alt="Before cleaning – messy kitchen"
              className="absolute inset-0 h-full object-cover"
              style={{ width: containerRef.current?.offsetWidth ?? "100%" }}
              draggable={false}
            />
          </div>

          {/* Divider line */}
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg"
            style={{ left: `${position}%` }}
          />

          {/* Handle */}
          <div
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center border-2 border-white"
            style={{ left: `${position}%` }}
          >
            <GripVertical size={18} className="text-foreground/70" />
          </div>

          {/* Labels */}
          <span className="absolute bottom-4 left-4 text-xs font-bold tracking-widest uppercase bg-foreground/70 text-white px-2.5 py-1 rounded-full">
            Before
          </span>
          <span className="absolute bottom-4 right-4 text-xs font-bold tracking-widest uppercase bg-primary text-white px-2.5 py-1 rounded-full">
            After
          </span>
        </div>
      </div>
    </section>
  )
}
