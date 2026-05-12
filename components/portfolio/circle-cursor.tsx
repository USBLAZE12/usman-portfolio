"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function CircleCursor() {
  const [enabled, setEnabled] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [hidden, setHidden] = useState(true)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)

  // Outer ring follows with spring
  const ringX = useSpring(x, { stiffness: 180, damping: 22, mass: 0.4 })
  const ringY = useSpring(y, { stiffness: 180, damping: 22, mass: 0.4 })

  // Inner dot follows tightly
  const dotX = useSpring(x, { stiffness: 600, damping: 30 })
  const dotY = useSpring(y, { stiffness: 600, damping: 30 })

  useEffect(() => {
    const isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches
    if (!isFinePointer) return

    setEnabled(true)
    document.documentElement.classList.add("has-custom-cursor")

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      if (hidden) setHidden(false)
    }

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      if (!target) return
      const interactive = target.closest(
        'a, button, [role="button"], input, textarea, select, [data-cursor="hover"]',
      )
      setHovered(Boolean(interactive))
    }

    const onLeave = () => setHidden(true)
    const onEnter = () => setHidden(false)

    window.addEventListener("mousemove", onMove)
    window.addEventListener("mouseover", onOver)
    document.addEventListener("mouseleave", onLeave)
    document.addEventListener("mouseenter", onEnter)

    return () => {
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseover", onOver)
      document.removeEventListener("mouseleave", onLeave)
      document.removeEventListener("mouseenter", onEnter)
      document.documentElement.classList.remove("has-custom-cursor")
    }
  }, [x, y, hidden])

  if (!enabled) return null

  return (
    <>
      {/* Outer ring */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full border"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          borderColor: hovered ? "rgba(16, 185, 129, 0.9)" : "rgba(237, 237, 237, 0.45)",
          height: hovered ? 56 : 32,
          width: hovered ? 56 : 32,
          backgroundColor: hovered ? "rgba(16, 185, 129, 0.08)" : "transparent",
          opacity: hidden ? 0 : 1,
          transition: "height 200ms ease, width 200ms ease, background-color 200ms ease, border-color 200ms ease",
        }}
      />
      {/* Inner dot */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-1.5 w-1.5 rounded-full"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor: hovered ? "#10b981" : "#ededed",
          opacity: hidden ? 0 : 1,
        }}
      />
    </>
  )
}
