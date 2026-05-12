"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"
import { MagneticButton } from "./magnetic-button"
import { staggerContainer, staggerItem } from "./reveal"

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden px-4 pt-32"
    >
      {/* Background layers */}
      <div aria-hidden className="absolute inset-0 grid-bg opacity-60" />
      <div
        aria-hidden
        className="absolute left-1/2 top-1/3 -z-10 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(16,185,129,0.18) 0%, rgba(16,185,129,0.05) 40%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0a0a0b] to-transparent"
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center"
      >
        {/* Pill */}
        <motion.div variants={staggerItem}>
          <div className="glass mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-brand opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-brand" />
            </span>
            <span className="font-mono text-xs tracking-widest text-muted-foreground">
              AVAILABLE FOR Q2 2026
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={staggerItem}
          className="text-balance font-sans text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Architecting{" "}
          <span className="relative inline-block">
            <span className="text-emerald-brand">Premium</span>
            <motion.span
              aria-hidden
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-2 left-0 h-[3px] w-full origin-left bg-emerald-brand/70"
            />
          </span>{" "}
          <br className="hidden sm:block" />
          WordPress Experiences.
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          variants={staggerItem}
          className="mt-8 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          From high-converting business sites to complex LMS systems. I build fast,
          accessible, and scalable WordPress experiences powered by{" "}
          <span className="text-foreground">TutorLMS</span>,{" "}
          <span className="text-foreground">Learndash</span>, and{" "}
          <span className="text-foreground">Elementor Pro</span>.
        </motion.p>

        {/* CTA */}
        <motion.div variants={staggerItem} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton
            href="https://www.fiverr.com/wp_builds01"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hire me on Fiverr
          </MagneticButton>
          <a
            href="#work"
            data-cursor="hover"
            className="group inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-medium text-foreground/90 transition-colors hover:border-emerald-brand/40 hover:text-emerald-brand sm:text-base"
          >
            <Sparkles className="h-4 w-4" />
            View flagship project
          </a>
        </motion.div>

        {/* Meta strip */}
        <motion.div
          variants={staggerItem}
          className="mt-16 grid w-full max-w-2xl grid-cols-3 gap-px overflow-hidden rounded-2xl border border-border bg-border/40 text-left"
        >
          {[
            { label: "PageSpeed", value: "90+", sub: "Mobile & Desktop" },
            { label: "LMS Builds", value: "20+", sub: "TutorLMS / Learndash" },
            { label: "Years", value: "5+", sub: "WordPress Architecture" },
          ].map((m) => (
            <div key={m.label} className="bg-[#0d0d0e] px-4 py-5 sm:px-6">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {m.label}
              </p>
              <p className="mt-2 text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
                {m.value}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">{m.sub}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
