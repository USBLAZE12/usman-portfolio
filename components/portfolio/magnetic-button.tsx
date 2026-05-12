"use client"

import type React from "react"
import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

type Props = {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  className?: string
  strength?: number
  showArrow?: boolean
  target?: string
  rel?: string
}

export function MagneticButton({
  children,
  href,
  onClick,
  className = "",
  strength = 0.35,
  showArrow = true,
  target,
  rel,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const handleMouse = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    setPos({ x: x * strength, y: y * strength })
  }

  const reset = () => setPos({ x: 0, y: 0 })

  const inner = (
    <motion.div
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.5 }}
      className="relative inline-flex items-center gap-2"
    >
      <span className="relative z-10 inline-flex items-center gap-2 font-medium tracking-tight">
        {children}
        {showArrow && (
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
        )}
      </span>
    </motion.div>
  )

  const baseClasses = `group relative inline-flex items-center justify-center rounded-full px-7 py-4 text-sm sm:text-base bg-emerald-brand text-primary-foreground overflow-hidden glow-emerald ${className}`

  if (href) {
    return (
      <div
        ref={ref}
        onMouseMove={handleMouse}
        onMouseLeave={reset}
        className="inline-block"
        data-cursor="hover"
      >
        <motion.a
          href={href}
          target={target}
          rel={rel}
          className={baseClasses}
          whileTap={{ scale: 0.96 }}
        >
          {/* shine */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full"
          />
          {inner}
        </motion.a>
      </div>
    )
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      className="inline-block"
      data-cursor="hover"
    >
      <motion.button
        type="button"
        onClick={onClick}
        className={baseClasses}
        whileTap={{ scale: 0.96 }}
      >
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full"
        />
        {inner}
      </motion.button>
    </div>
  )
}
