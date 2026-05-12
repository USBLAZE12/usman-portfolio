"use client"

import { motion } from "framer-motion"
import { LayoutTemplate, GraduationCap, Gauge } from "lucide-react"
import { Reveal, staggerContainer, staggerItem } from "./reveal"

const cards = [
  {
    icon: LayoutTemplate,
    title: "WordPress & Elementor",
    tag: "CMS EXPERT",
    description:
      "Specialized in advanced WordPress architecture. Custom themes, performance-tuned page builds with Elementor Pro, and bespoke functionality.",
    bullets: ["Custom Themes", "Elementor Pro", "Performance Tuned"],
  },
  {
    icon: GraduationCap,
    title: "LMS & E-Learning",
    tag: "LMS ARCHITECT",
    description:
      "Expertise in TutorLMS & Learndash. End-to-end student portals, course architecture, quizzes, certificates, and payment integration.",
    bullets: ["TutorLMS", "Learndash", "Student Portals"],
  },
  {
    icon: Gauge,
    title: "Performance & SEO",
    tag: "PERFORMANCE",
    description:
      "90+ PageSpeed Insights enthusiast. Core Web Vitals optimization, technical SEO, schema, and a relentless focus on time-to-first-byte.",
    bullets: ["90+ PageSpeed", "Core Web Vitals", "Technical SEO"],
  },
]

export function Expertise() {
  return (
    <section id="expertise" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeader
            label="01 — Expertise"
            title="A focused stack. Premium output."
            description="Three disciplines. Compounded for results."
          />
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3"
        >
          {cards.map((c) => {
            const Icon = c.icon
            return (
              <motion.article
                key={c.title}
                variants={staggerItem}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="glass group relative flex flex-col gap-5 overflow-hidden rounded-2xl p-7"
                data-cursor="hover"
              >
                {/* hover glow */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(400px circle at var(--mx, 50%) var(--my, 0%), rgba(16,185,129,0.10), transparent 40%)",
                  }}
                />

                <div className="flex items-center justify-between">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-brand/20 bg-emerald-brand/10 text-emerald-brand">
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
                    {c.tag}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-medium tracking-tight text-foreground">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {c.description}
                  </p>
                </div>

                <ul className="mt-auto flex flex-wrap gap-2 pt-2">
                  {c.bullets.map((b) => (
                    <li
                      key={b}
                      className="rounded-full border border-border bg-[#0d0d0e] px-3 py-1 text-xs text-muted-foreground"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export function SectionHeader({
  label,
  title,
  description,
}: {
  label: string
  title: string
  description?: string
}) {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-mono text-xs tracking-widest text-emerald-brand">{label}</p>
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <h2 className="max-w-2xl text-balance text-3xl font-medium leading-tight tracking-tight sm:text-4xl md:text-5xl">
          {title}
        </h2>
        {description && (
          <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
      </div>
      <div className="mt-2 h-px w-full bg-gradient-to-r from-border via-border to-transparent" />
    </div>
  )
}
