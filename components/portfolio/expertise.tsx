"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"
import { MagneticButton } from "./magnetic-button"
import { staggerContainer, staggerItem } from "./reveal"

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden px-4 pb-16 pt-32"
    >
      <div aria-hidden className="absolute inset-0 grid-bg opacity-80" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center text-center"
      >
        <motion.div variants={staggerItem} className="mb-8">
          <div className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5">
            <span className="relative flex h-2.5 w-2.5 items-center justify-center">
              <span className="absolute h-full w-full rounded-full bg-[#8e6e4a]/25" />
              <span className="relative h-2 w-2 rounded-full bg-[#8e6e4a]" />
            </span>
            <span className="font-mono text-[10px] tracking-[0.22em] text-[#615b57] uppercase">
              Available for Q2 2026
            </span>
          </div>
        </motion.div>

        <motion.h1
          variants={staggerItem}
          className="max-w-5xl text-balance text-5xl font-medium leading-[0.9] tracking-[-0.08em] text-[#171615] sm:text-6xl md:text-7xl lg:text-[7rem]"
        >
          Architecting
          <span className="mt-2 block">premium WordPress</span>
          <span className="mt-2 block text-[#8e6e4a]">experiences.</span>
        </motion.h1>

        <motion.p
          variants={staggerItem}
          className="mt-7 max-w-2xl text-base leading-relaxed text-[#615b57] sm:text-lg"
        >
          From high-converting business sites to complex LMS systems, I build fast,
          thoughtful, and scalable web experiences designed around product clarity and
          real-world performance.
        </motion.p>

        <motion.div
          variants={staggerItem}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton
            href="https://www.fiverr.com/wp_builds01"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#171615] text-[#f8f5f0] hover:bg-[#8e6e4a]"
          >
            Hire me on Fiverr
          </MagneticButton>
          <a
            href="#work"
            data-cursor="hover"
            className="group inline-flex items-center gap-2 rounded-full border border-[#171615]/12 bg-[#fbfaf7] px-6 py-3.5 text-sm font-medium text-[#171615] transition-colors hover:border-[#8e6e4a]/30 hover:bg-[#f0e8df]"
          >
            <Sparkles className="h-4 w-4 text-[#8e6e4a]" />
            View flagship project
          </a>
        </motion.div>

        <motion.div
          variants={staggerItem}
          className="mt-14 grid w-full max-w-3xl grid-cols-1 gap-3 border border-[#171615]/10 bg-[#f9f6f2] p-3 sm:grid-cols-3"
        >
          {[
            { label: "PageSpeed", value: "90+", sub: "Mobile & desktop" },
            { label: "LMS builds", value: "20+", sub: "TutorLMS / LearnDash" },
            { label: "Years", value: "5+", sub: "WordPress architecture" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="border border-[#171615]/10 bg-[#fffdf9] px-4 py-5 text-left"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#615b57]">
                {stat.label}
              </p>
              <p className="mt-3 text-3xl font-medium tracking-[-0.06em] text-[#171615]">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-[#615b57]">{stat.sub}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
