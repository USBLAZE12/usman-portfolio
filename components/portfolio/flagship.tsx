"use client"

import { motion } from "framer-motion"
import {
  CreditCard,
  Users,
  BookOpen,
  Award,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react"
import { Reveal, staggerContainer, staggerItem } from "./reveal"
import { SectionHeader } from "./expertise"

const tags = ["LMS", "UX/UI", "Payment Integration"]

export function Flagship() {
  return (
    <section id="work" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeader
            label="02 — Flagship Project"
            title="E-Learning Management System."
            description="A full-stack WordPress LMS engineered for scale. Tutor LMS, custom student portals, secure payments."
          />
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid grid-cols-12 gap-5"
        >
          {/* Big card */}
          <motion.div
            variants={staggerItem}
            className="glass relative col-span-12 overflow-hidden rounded-2xl p-8 lg:col-span-8 lg:row-span-2"
            data-cursor="hover"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-[10px] tracking-widest text-muted-foreground">
                  CASE STUDY · 2025
                </p>
                <h3 className="mt-3 text-2xl font-medium tracking-tight sm:text-3xl">
                  Scholar — A premium LMS platform
                </h3>
              </div>
              <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-full border border-emerald-brand/30 bg-emerald-brand/10 text-emerald-brand transition-transform group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Architected a complete learning platform with course authoring, quiz
              engine, drip content, certificates, and Stripe + WooCommerce
              integration. Achieved a 94 PageSpeed score on mobile.
            </p>

            {/* Mock dashboard preview */}
            <div className="mt-8 overflow-hidden rounded-xl border border-border bg-[#0d0d0e]">
              <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#3a3a3c]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#3a3a3c]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#3a3a3c]" />
                <span className="ml-3 font-mono text-[10px] tracking-widest text-muted-foreground">
                  scholar.app/dashboard
                </span>
              </div>
              <div className="grid grid-cols-12 gap-3 p-4">
                <div className="col-span-4 rounded-lg border border-border bg-[#121212] p-3">
                  <p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                    Enrolled
                  </p>
                  <p className="mt-1 text-xl font-medium">2,418</p>
                  <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-border">
                    <div className="h-full w-3/4 bg-emerald-brand" />
                  </div>
                </div>
                <div className="col-span-4 rounded-lg border border-border bg-[#121212] p-3">
                  <p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                    Completion
                  </p>
                  <p className="mt-1 text-xl font-medium">87%</p>
                  <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-border">
                    <div className="h-full w-[87%] bg-emerald-brand" />
                  </div>
                </div>
                <div className="col-span-4 rounded-lg border border-border bg-[#121212] p-3">
                  <p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                    Revenue
                  </p>
                  <p className="mt-1 text-xl font-medium">$94k</p>
                  <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-border">
                    <div className="h-full w-2/3 bg-emerald-brand" />
                  </div>
                </div>

                <div className="col-span-12 mt-1 rounded-lg border border-border bg-[#121212] p-3">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Advanced JavaScript Patterns</p>
                    <span className="rounded-full border border-emerald-brand/30 bg-emerald-brand/10 px-2 py-0.5 font-mono text-[10px] tracking-wider text-emerald-brand">
                      LIVE
                    </span>
                  </div>
                  <div className="mt-3 grid grid-cols-6 gap-1.5">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div
                        key={i}
                        className={`h-1.5 rounded-full ${i < 4 ? "bg-emerald-brand" : "bg-border"}`}
                      />
                    ))}
                  </div>
                  <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                    <span className="font-mono">Module 4 / 6</span>
                    <span className="inline-flex items-center gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-brand" /> 67% complete
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <ul className="mt-6 flex flex-wrap gap-2">
              {tags.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-emerald-brand/30 bg-emerald-brand/10 px-3 py-1 text-xs text-emerald-brand"
                >
                  {t}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Side cards (masonry feel) */}
          <motion.div
            variants={staggerItem}
            className="glass col-span-12 flex flex-col gap-3 rounded-2xl p-6 sm:col-span-6 lg:col-span-4"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-brand/20 bg-emerald-brand/10 text-emerald-brand">
              <BookOpen className="h-4 w-4" />
            </span>
            <p className="font-mono text-[10px] tracking-widest text-muted-foreground">
              COURSE ENGINE
            </p>
            <h4 className="text-lg font-medium tracking-tight">
              Tutor LMS + custom modules
            </h4>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Drip content, quiz engine with question banks, prerequisites, and
              instructor dashboards.
            </p>
          </motion.div>

          <motion.div
            variants={staggerItem}
            className="glass col-span-12 flex flex-col gap-3 rounded-2xl p-6 sm:col-span-6 lg:col-span-4"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-brand/20 bg-emerald-brand/10 text-emerald-brand">
              <CreditCard className="h-4 w-4" />
            </span>
            <p className="font-mono text-[10px] tracking-widest text-muted-foreground">
              PAYMENTS
            </p>
            <h4 className="text-lg font-medium tracking-tight">
              Stripe + WooCommerce
            </h4>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Subscriptions, one-time purchases, coupons, and automated invoicing
              with secure webhooks.
            </p>
          </motion.div>

          <motion.div
            variants={staggerItem}
            className="glass col-span-12 flex flex-col gap-3 rounded-2xl p-6 sm:col-span-6 lg:col-span-4"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-brand/20 bg-emerald-brand/10 text-emerald-brand">
              <Users className="h-4 w-4" />
            </span>
            <p className="font-mono text-[10px] tracking-widest text-muted-foreground">
              STUDENT PORTAL
            </p>
            <h4 className="text-lg font-medium tracking-tight">
              Personalized dashboards
            </h4>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Profile, course progress, transcripts, and resource downloads — all
              accessibility-first.
            </p>
          </motion.div>

          <motion.div
            variants={staggerItem}
            className="glass col-span-12 flex flex-col gap-3 rounded-2xl p-6 sm:col-span-6 lg:col-span-4"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-brand/20 bg-emerald-brand/10 text-emerald-brand">
              <Award className="h-4 w-4" />
            </span>
            <p className="font-mono text-[10px] tracking-widest text-muted-foreground">
              CERTIFICATES
            </p>
            <h4 className="text-lg font-medium tracking-tight">
              Auto-issued credentials
            </h4>
            <p className="text-sm leading-relaxed text-muted-foreground">
              PDF certificates with custom templates and verifiable public URLs
              for graduates.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
