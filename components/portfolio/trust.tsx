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
          {/* Testimonial – wide */}
          <motion.figure
            variants={staggerItem}
            className="glass col-span-12 flex flex-col justify-between rounded-2xl p-7 md:col-span-8 md:row-span-2"
          >
            <Quote className="h-7 w-7 text-emerald-brand" strokeWidth={1.6} />
            <blockquote className="mt-6 text-balance text-xl leading-relaxed tracking-tight text-foreground sm:text-2xl">
              &ldquo;Usman didn&apos;t just build our LMS — he architected it. The
              platform handles 2,000+ active learners without breaking a sweat,
              and the PageSpeed scores are a thing of beauty.&rdquo;
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-emerald-brand/30 bg-emerald-brand/10 font-mono text-sm text-emerald-brand">
                SM
              </div>
              <div>
                <p className="text-sm font-medium">Sarah Mitchell</p>
                <p className="text-xs text-muted-foreground">
                  Founder, Scholar Academy
                </p>
              </div>
              <div className="ml-auto flex gap-0.5 text-emerald-brand">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
            </figcaption>
          </motion.figure>

          {/* Stat – PageSpeed */}
          <motion.div
            variants={staggerItem}
            className="glass relative col-span-6 overflow-hidden rounded-2xl p-6 md:col-span-4"
          >
            <Zap className="h-5 w-5 text-emerald-brand" strokeWidth={1.6} />
            <p className="mt-6 font-mono text-[10px] tracking-widest text-muted-foreground">
              AVG. PAGESPEED
            </p>
            <p className="mt-1 text-5xl font-medium tracking-tight">
              94<span className="text-emerald-brand">/100</span>
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              Across last 12 production launches.
            </p>
          </motion.div>

          {/* Stat – Conversion */}
          <motion.div
            variants={staggerItem}
            className="glass col-span-6 rounded-2xl p-6 md:col-span-4"
          >
            <TrendingUp className="h-5 w-5 text-emerald-brand" strokeWidth={1.6} />
            <p className="mt-6 font-mono text-[10px] tracking-widest text-muted-foreground">
              CONVERSION LIFT
            </p>
            <p className="mt-1 text-5xl font-medium tracking-tight">+38%</p>
            <p className="mt-2 text-xs text-muted-foreground">
              Average across redesigned business sites.
            </p>
          </motion.div>

          {/* Small testimonial */}
          <motion.figure
            variants={staggerItem}
            className="glass col-span-12 rounded-2xl p-6 md:col-span-6"
          >
            <Quote className="h-5 w-5 text-emerald-brand" strokeWidth={1.6} />
            <blockquote className="mt-3 text-sm leading-relaxed text-foreground">
              &ldquo;Pixel-perfect Elementor execution. Our marketing team can finally
              ship pages without engineering bottlenecks.&rdquo;
            </blockquote>
            <figcaption className="mt-4 text-xs text-muted-foreground">
              — David Chen, Head of Growth · Northwind
            </figcaption>
          </motion.figure>

          {/* Globe stat */}
          <motion.div
            variants={staggerItem}
            className="glass col-span-12 flex flex-col justify-between rounded-2xl p-6 md:col-span-6"
          >
            <Globe className="h-5 w-5 text-emerald-brand" strokeWidth={1.6} />
            <div className="mt-6">
              <p className="font-mono text-[10px] tracking-widest text-muted-foreground">
                CLIENTS WORLDWIDE
              </p>
              <p className="mt-1 text-3xl font-medium tracking-tight">
                12 countries · 40+ launches
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                From SMB business sites to enterprise LMS deployments.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
