"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Github, Linkedin, Send, CheckCircle2 } from "lucide-react"
import { Reveal } from "./reveal"
import { SectionHeader } from "./expertise"
import { MagneticButton } from "./magnetic-button"

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // demo only — no backend wired here
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4500)
  }

  return (
    <section id="contact" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeader
            label="05 — Contact"
            title="Let's build something premium."
            description="Available for new WordPress and LMS projects. Typical response under 24h."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Form */}
          <Reveal>
            <motion.form
              onSubmit={handleSubmit}
              className="glass relative overflow-hidden rounded-3xl p-7 sm:p-10"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(16,185,129,0.18) 0%, transparent 70%)",
                  filter: "blur(40px)",
                }}
              />

              <div className="relative flex flex-col gap-5">
                <Field label="Name" id="name">
                  <input
                    required
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Jane Founder"
                    className="input"
                  />
                </Field>

                <Field label="Email" id="email">
                  <input
                    required
                    id="email"
                    name="email"
                    type="email"
                    placeholder="jane@company.com"
                    className="input"
                  />
                </Field>

                <Field label="Project type" id="type">
                  <select id="type" name="type" className="input">
                    <option className="bg-[#121212]">Business website</option>
                    <option className="bg-[#121212]">LMS / E-Learning</option>
                    <option className="bg-[#121212]">Performance audit</option>
                    <option className="bg-[#121212]">Other</option>
                  </select>
                </Field>

                <Field label="Tell me about it" id="message">
                  <textarea
                    required
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Goals, timeline, references…"
                    className="input resize-none"
                  />
                </Field>

                <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-muted-foreground">
                    Or email me directly at{" "}
                    <a
                      href="mailto:usmanblaze01@gmail.com"
                      data-cursor="hover"
                      className="text-foreground underline decoration-emerald-brand decoration-2 underline-offset-4 hover:text-emerald-brand"
                    >
                      usmanblaze01@gmail.com
                    </a>
                  </p>

                  <MagneticButton onClick={() => {}} showArrow={false}>
                    <span className="flex items-center gap-2">
                      {submitted ? (
                        <>
                          <CheckCircle2 className="h-4 w-4" /> Sent
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" /> Send message
                        </>
                      )}
                    </span>
                  </MagneticButton>
                </div>

                <div className="mt-4 flex items-center justify-end">
                  <a
                    href="https://www.fiverr.com/wp_builds01"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="hover"
                    className="group inline-flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-emerald-brand"
                  >
                    <span className="h-px w-6 bg-border transition-colors group-hover:bg-emerald-brand" />
                    Or reach out on Fiverr
                    <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                      &rarr;
                    </span>
                  </a>
                </div>
              </div>
            </motion.form>
          </Reveal>

          {/* Right column */}
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col gap-5">
              <div className="glass rounded-3xl p-7">
                <p className="font-mono text-[10px] tracking-widest text-emerald-brand">
                  AVAILABILITY
                </p>
                <h3 className="mt-3 text-2xl font-medium tracking-tight">
                  Currently booking Q2 / Q3 — 2026
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  I take on a limited number of WordPress and LMS engagements each
                  quarter to ensure every build receives the architectural care it
                  deserves.
                </p>
              </div>

              <div className="glass grid grid-cols-1 gap-3 rounded-3xl p-7 sm:grid-cols-3">
                <ContactLink
                  href="mailto:usmanblaze01@gmail.com"
                  icon={Mail}
                  label="Email"
                  value="usmanblaze01@gmail.com"
                />
                <ContactLink
                  href="https://github.com/USBLAZE12"
                  icon={Github}
                  label="GitHub"
                  value="@USBLAZE12"
                />
                <ContactLink
                  href="https://www.linkedin.com/in/usblaze"
                  icon={Linkedin}
                  label="LinkedIn"
                  value="in/usblaze"
                />
              </div>

              <div className="glass mt-auto rounded-3xl p-7">
                <p className="font-mono text-[10px] tracking-widest text-muted-foreground">
                  WHAT I&apos;LL NEED
                </p>
                <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                  {[
                    "Project goals & success metrics",
                    "Existing assets / brand guidelines",
                    "Approximate budget & timeline",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-3">
                      <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-brand" />
                      <span className="text-foreground/90">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* shared input styles */}
      <style jsx>{`
        :global(.input) {
          width: 100%;
          background-color: rgba(13, 13, 14, 0.6);
          border: 1px solid rgba(148, 163, 184, 0.14);
          border-radius: 0.75rem;
          padding: 0.85rem 1rem;
          color: #ededed;
          font-size: 0.95rem;
          outline: none;
          transition: border-color 200ms ease, box-shadow 200ms ease,
            background-color 200ms ease;
        }
        :global(.input::placeholder) {
          color: rgba(148, 163, 184, 0.7);
        }
        :global(.input:focus) {
          border-color: #10b981;
          box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.15);
          background-color: rgba(18, 18, 18, 0.85);
        }
      `}</style>
    </section>
  )
}

function Field({
  label,
  id,
  children,
}: {
  label: string
  id: string
  children: React.ReactNode
}) {
  return (
    <label htmlFor={id} className="flex flex-col gap-2">
      <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
        {label.toUpperCase()}
      </span>
      {children}
    </label>
  )
}

function ContactLink({
  href,
  icon: Icon,
  label,
  value,
}: {
  href: string
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>
  label: string
  value: string
}) {
  return (
    <a
      href={href}
      data-cursor="hover"
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group flex flex-col gap-2 rounded-2xl border border-border bg-[#0d0d0e] p-4 transition-colors hover:border-emerald-brand/40"
    >
      <Icon className="h-4 w-4 text-emerald-brand" strokeWidth={1.6} />
      <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
        {label.toUpperCase()}
      </span>
      <span className="text-sm font-medium text-foreground transition-colors group-hover:text-emerald-brand">
        {value}
      </span>
    </a>
  )
}
