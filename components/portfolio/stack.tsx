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

const tags = ["LMS", "UX/UI", "Payment integration"]

export function Flagship() {
  return (
    <section id="work" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeader
            label="02 — Flagship project"
            title="E-learning management system."
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
          <motion.div
            variants={staggerItem}
            className="panel relative col-span-12 overflow-hidden p-8 lg:col-span-8 lg:row-span-2"
            data-cursor="hover"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-[10px] tracking-[0.22em] text-[#615b57] uppercase">
                  Case study · 2025
                </p>
                <h3 className="mt-3 text-2xl font-medium tracking-[-0.06em] text-[#171615] sm:text-3xl">
                  Scholar — a premium LMS platform
                </h3>
              </div>
              <span className="inline-flex h-10 w-10 flex-none items-center justify-center border border-[#171615]/10 bg-[#f3eee7] text-[#171615]">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#615b57]">
              Architected a complete learning platform with course authoring, quiz
              engine, drip content, certificates, and Stripe + WooCommerce integration.
              Achieved a 94 PageSpeed score on mobile.
            </p>

            <div className="mt-8 overflow-hidden border border-[#171615]/10 bg-[#171615]">
              <div className="flex items-center gap-2 border-b border-[#f5f1ea]/10 px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#d1c3b4]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#d1c3b4]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#d1c3b4]" />
                <span className="ml-3 font-mono text-[10px] tracking-[0.18em] text-[#f5f1ea]/70 uppercase">
                  scholar.app/dashboard
                </span>
              </div>

              <div className="grid grid-cols-12 gap-3 p-4">
                <div className="col-span-4 rounded-md border border-[#f5f1ea]/10 bg-[#1d1b1a] p-3">
                  <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#f5f1ea]/60">
                    Enrolled
                  </p>
                  <p className="mt-1 text-xl font-medium text-[#f5f1ea]">2,418</p>
                  <div className="mt-2 h-1 w-full overflow-hidden bg-[#f5f1ea]/10">
                    <div className="h-full w-3/4 bg-[#8e6e4a]" />
                  </div>
                </div>

                <div className="col-span-4 rounded-md border border-[#f5f1ea]/10 bg-[#1d1b1a] p-3">
                  <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#f5f1ea]/60">
                    Completion
                  </p>
                  <p className="mt-1 text-xl font-medium text-[#f5f1ea]">87%</p>
                  <div className="mt-2 h-1 w-full overflow-hidden bg-[#f5f1ea]/10">
                    <div className="h-full w-[87%] bg-[#8e6e4a]" />
                  </div>
                </div>

                <div className="col-span-4 rounded-md border border-[#f5f1ea]/10 bg-[#1d1b1a] p-3">
                  <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#f5f1ea]/60">
                    Revenue
                  </p>
                  <p className="mt-1 text-xl font-medium text-[#f5f1ea]">$94k</p>
                  <div className="mt-2 h-1 w-full overflow-hidden bg-[#f5f1ea]/10">
                    <div className="h-full w-2/3 bg-[#8e6e4a]" />
                  </div>
                </div>

                <div className="col-span-12 mt-1 rounded-md border border-[#f5f1ea]/10 bg-[#1d1b1a] p-3">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-[#f5f1ea]">Advanced JavaScript patterns</p>
                    <span className="border border-[#8e6e4a]/30 bg-[#8e6e4a]/10 px-2 py-0.5 font-mono text-[10px] tracking-[0.18em] text-[#d6b48b] uppercase">
                      Live
                    </span>
                  </div>
                  <div className="mt-3 grid grid-cols-6 gap-1.5">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div
                        key={i}
                        className={`h-1.5 rounded-full ${i < 4 ? "bg-[#8e6e4a]" : "bg-[#f5f1ea]/10"}`}
                      />
                    ))}
                  </div>
                  <div className="mt-3 flex items-center justify-between text-xs text-[#f5f1ea]/60">
                    <span className="font-mono">Module 4 / 6</span>
                    <span className="inline-flex items-center gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#d6b48b]" /> 67% complete
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <ul className="mt-6 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <li
                  key={tag}
                  className="border border-[#8e6e4a]/20 bg-[#f3eee7] px-3 py-1.5 text-[10px] tracking-[0.18em] text-[#8e6e4a] uppercase"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={staggerItem}
            className="panel col-span-12 flex flex-col gap-3 p-6 sm:col-span-6 lg:col-span-4"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center border border-[#8e6e4a]/15 bg-[#f3eee7] text-[#8e6e4a]">
              <BookOpen className="h-4 w-4" />
            </span>
            <p className="font-mono text-[10px] tracking-[0.18em] text-[#615b57] uppercase">
              Course engine
            </p>
            <h4 className="text-lg font-medium tracking-[-0.04em] text-[#171615]">
              Tutor LMS + custom modules
            </h4>
            <p className="text-sm leading-relaxed text-[#615b57]">
              Drip content, quiz engine with question banks, prerequisites, and instructor
              dashboards.
            </p>
          </motion.div>

          <motion.div
            variants={staggerItem}
            className="panel col-span-12 flex flex-col gap-3 p-6 sm:col-span-6 lg:col-span-4"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center border border-[#8e6e4a]/15 bg-[#f3eee7] text-[#8e6e4a]">
              <CreditCard className="h-4 w-4" />
            </span>
            <p className="font-mono text-[10px] tracking-[0.18em] text-[#615b57] uppercase">
              Payments
            </p>
            <h4 className="text-lg font-medium tracking-[-0.04em] text-[#171615]">
              Stripe + WooCommerce
            </h4>
            <p className="text-sm leading-relaxed text-[#615b57]">
              Subscriptions, one-time purchases, coupons, and automated invoicing with
              secure webhooks.
            </p>
          </motion.div>

          <motion.div
            variants={staggerItem}
            className="panel col-span-12 flex flex-col gap-3 p-6 sm:col-span-6 lg:col-span-4"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center border border-[#8e6e4a]/15 bg-[#f3eee7] text-[#8e6e4a]">
              <Users className="h-4 w-4" />
            </span>
            <p className="font-mono text-[10px] tracking-[0.18em] text-[#615b57] uppercase">
              Student portal
            </p>
            <h4 className="text-lg font-medium tracking-[-0.04em] text-[#171615]">
              Personalized dashboards
            </h4>
            <p className="text-sm leading-relaxed text-[#615b57]">
              Profile, course progress, transcripts, and resource downloads — all
              accessibility-first.
            </p>
          </motion.div>

          <motion.div
            variants={staggerItem}
            className="panel col-span-12 flex flex-col gap-3 p-6 sm:col-span-6 lg:col-span-4"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center border border-[#8e6e4a]/15 bg-[#f3eee7] text-[#8e6e4a]">
              <Award className="h-4 w-4" />
            </span>
            <p className="font-mono text-[10px] tracking-[0.18em] text-[#615b57] uppercase">
              Certificates
            </p>
            <h4 className="text-lg font-medium tracking-[-0.04em] text-[#171615]">
              Auto-issued credentials
            </h4>
            <p className="text-sm leading-relaxed text-[#615b57]">
              PDF certificates with custom templates and verifiable public URLs for graduates.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
