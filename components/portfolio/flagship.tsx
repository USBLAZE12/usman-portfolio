"use client"

import { motion } from "framer-motion"
import { LayoutTemplate, GraduationCap, Gauge } from "lucide-react"
import { Reveal, staggerContainer, staggerItem } from "./reveal"

const cards = [
  {
    icon: LayoutTemplate,
    title: "WordPress & Elementor",
    tag: "CMS expert",
    description:
      "Specialized in advanced WordPress architecture. Custom themes, performance-tuned builds with Elementor Pro, and bespoke functionality.",
    bullets: ["Custom themes", "Elementor Pro", "Performance tuned"],
  },
  {
    icon: GraduationCap,
    title: "LMS & E-Learning",
    tag: "LMS architect",
    description:
      "Expertise in TutorLMS & LearnDash. End-to-end student portals, course architecture, quizzes, certificates, and payment integration.",
    bullets: ["TutorLMS", "LearnDash", "Student portals"],
  },
  {
    icon: Gauge,
    title: "Performance & SEO",
    tag: "Performance",
    description:
      "90+ PageSpeed Insights focus. Core Web Vitals optimization, technical SEO, schema, and a relentless focus on time-to-first-byte.",
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
          {cards.map((card) => {
            const Icon = card.icon
            return (
              <motion.article
                key={card.title}
                variants={staggerItem}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className="panel group relative flex flex-col gap-5 overflow-hidden p-7"
                data-cursor="hover"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-12 w-12 items-center justify-center border border-[#171615]/10 bg-[#f6f0e7] text-[#8e6e4a]">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.18em] text-[#615b57] uppercase">
                    {card.tag}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-medium tracking-[-0.05em] text-[#171615]">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#615b57]">
                    {card.description}
                  </p>
                </div>

                <ul className="mt-auto flex flex-wrap gap-2 pt-2">
                  {card.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="border border-[#171615]/10 bg-[#f9f6f2] px-3 py-1 text-[10px] tracking-[0.16em] text-[#615b57] uppercase"
                    >
                      {bullet}
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
      <p className="font-mono text-[10px] tracking-[0.22em] text-[#8e6e4a] uppercase">
        {label}
      </p>
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <h2 className="max-w-2xl text-balance text-3xl font-medium leading-tight tracking-[-0.06em] text-[#171615] sm:text-4xl md:text-5xl">
          {title}
        </h2>
        {description && (
          <p className="max-w-sm text-pretty text-sm leading-relaxed text-[#615b57]">
            {description}
          </p>
        )}
      </div>
      <div className="mt-2 h-px w-full bg-[#171615]/10" />
    </div>
  )
}
