"use client"

import { motion } from "framer-motion"
import { Quote, Star, TrendingUp, Globe, Zap } from "lucide-react"
import { Reveal, staggerContainer, staggerItem } from "./reveal"
import { SectionHeader } from "./expertise"

export function Trust() {
  return (
    <section id="trust" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeader
            label="04 — Trust"
            title="Outcomes my clients quote."
            description="Numbers from real launches. Words from real founders."
          />
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid grid-cols-12 gap-4"
        >
          <motion.figure
            variants={staggerItem}
            className="panel col-span-12 flex flex-col justify-between p-7 md:col-span-8 md:row-span-2"
          >
            <Quote className="h-7 w-7 text-[#8e6e4a]" strokeWidth={1.7} />
            <blockquote className="mt-6 text-balance text-xl leading-relaxed tracking-[-0.04em] text-[#171615] sm:text-2xl">
              “Usman didn’t just build our LMS — he architected it. The platform handles
              2,000+ active learners without breaking a sweat, and the PageSpeed scores are a
              thing of beauty.”
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center border border-[#8e6e4a]/20 bg-[#f3eee7] font-mono text-sm text-[#8e6e4a]">
                SM
              </div>
              <div>
                <p className="text-sm font-medium text-[#171615]">Sarah Mitchell</p>
                <p className="text-xs text-[#615b57]">Founder, Scholar Academy</p>
              </div>
              <div className="ml-auto flex gap-0.5 text-[#8e6e4a]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
            </figcaption>
          </motion.figure>

          <motion.div
            variants={staggerItem}
            className="panel relative col-span-6 overflow-hidden p-6 md:col-span-4"
          >
            <Zap className="h-5 w-5 text-[#8e6e4a]" strokeWidth={1.7} />
            <p className="mt-6 font-mono text-[10px] tracking-[0.22em] text-[#615b57] uppercase">
              Avg. PageSpeed
            </p>
            <p className="mt-1 text-5xl font-medium tracking-[-0.08em] text-[#171615]">
              94<span className="text-[#8e6e4a]">/100</span>
            </p>
            <p className="mt-2 text-xs text-[#615b57]">Across last 12 production launches.</p>
          </motion.div>

          <motion.div
            variants={staggerItem}
            className="panel col-span-6 p-6 md:col-span-4"
          >
            <TrendingUp className="h-5 w-5 text-[#8e6e4a]" strokeWidth={1.7} />
            <p className="mt-6 font-mono text-[10px] tracking-[0.22em] text-[#615b57] uppercase">
              Conversion lift
            </p>
            <p className="mt-1 text-5xl font-medium tracking-[-0.08em] text-[#171615]">
              +38%
            </p>
            <p className="mt-2 text-xs text-[#615b57]">
              Average across redesigned business sites.
            </p>
          </motion.div>

          <motion.figure
            variants={staggerItem}
            className="panel col-span-12 p-6 md:col-span-6"
          >
            <Quote className="h-5 w-5 text-[#8e6e4a]" strokeWidth={1.7} />
            <blockquote className="mt-3 text-sm leading-relaxed text-[#171615]">
              “Pixel-perfect Elementor execution. Our marketing team can finally ship pages
              without engineering bottlenecks.”
            </blockquote>
            <figcaption className="mt-4 text-xs text-[#615b57]">
              — David Chen, Head of Growth · Northwind
            </figcaption>
          </motion.figure>

          <motion.div
            variants={staggerItem}
            className="panel col-span-12 flex flex-col justify-between p-6 md:col-span-6"
          >
            <Globe className="h-5 w-5 text-[#8e6e4a]" strokeWidth={1.7} />
            <div className="mt-6">
              <p className="font-mono text-[10px] tracking-[0.22em] text-[#615b57] uppercase">
                Clients worldwide
              </p>
              <p className="mt-1 text-3xl font-medium tracking-[-0.06em] text-[#171615]">
                12 countries · 40+ launches
              </p>
              <p className="mt-2 text-xs text-[#615b57]">
                From SMB business sites to enterprise LMS deployments.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
