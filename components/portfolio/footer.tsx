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
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4500)
  }

  return (
    <section id="contact" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeader
            label="05 — Contact"
            title="Let’s build something premium."
            description="Available for new WordPress and LMS projects. Typical response under 24h."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Reveal>
            <motion.form
              onSubmit={handleSubmit}
              className="panel relative overflow-hidden p-7 sm:p-10"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
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
                    <option className="bg-[#f8f5f0]">Business website</option>
                    <option className="bg-[#f8f5f0]">LMS / E-learning</option>
                    <option className="bg-[#f8f5f0]">Performance audit</option>
                    <option className="bg-[#f8f5f0]">Other</option>
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
                  <p className="text-xs text-[#615b57]">
                    Or email me directly at{" "}
                    <a
                      href="mailto:usmanblaze01@gmail.com"
                      data-cursor="hover"
                      className="text-[#171615] underline decoration-[#8e6e4a] decoration-2 underline-offset-4"
                    >
                      usmanblaze01@gmail.com
                    </a>
                  </p>

                  <MagneticButton onClick={() => {}} showArrow={false} className="bg-[#171615] text-[#f8f5f0] hover:bg-[#8e6e4a]">
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
              </div>
            </motion.form>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex h-full flex-col gap-5">
              <div className="panel p-7">
                <p className="font-mono text-[10px] tracking-[0.22em] text-[#8e6e4a] uppercase">
                  Availability
                </p>
                <h3 className="mt-3 text-2xl font-medium tracking-[-0.06em] text-[#171615]">
                  Currently booking Q2 / Q3 — 2026
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#615b57]">
                  I take on a limited number of WordPress and LMS engagements each quarter to
                  ensure every build receives the architectural care it deserves.
                </p>
              </div>

              <div className="panel grid grid-cols-1 gap-3 p-7 sm:grid-cols-3">
                <ContactLink href="mailto:usmanblaze01@gmail.com" icon={Mail} label="Email" value="usmanblaze01@gmail.com" />
                <ContactLink href="https://github.com/USBLAZE12" icon={Github} label="GitHub" value="@USBLAZE12" />
                <ContactLink href="https://www.linkedin.com/in/usblaze" icon={Linkedin} label="LinkedIn" value="in/usblaze" />
              </div>

              <div className="panel mt-auto p-7">
                <p className="font-mono text-[10px] tracking-[0.22em] text-[#615b57] uppercase">
                  What I’ll need
                </p>
                <ul className="mt-4 space-y-2.5 text-sm text-[#615b57]">
                  {[
                    "Project goals & success metrics",
                    "Existing assets / brand guidelines",
                    "Approximate budget & timeline",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-[#8e6e4a]" />
                      <span className="text-[#171615]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <style jsx>{`
        :global(.input) {
          width: 100%;
          background-color: rgba(255, 255, 255, 0.66);
          border: 1px solid rgba(23, 22, 21, 0.12);
          border-radius: 0.85rem;
          padding: 0.85rem 1rem;
          color: #171615;
          font-size: 0.95rem;
          outline: none;
          transition: border-color 180ms ease, box-shadow 180ms ease, background-color 180ms ease;
        }
        :global(.input::placeholder) {
          color: rgba(97, 91, 87, 0.8);
        }
        :global(.input:focus) {
          border-color: rgba(142, 110, 74, 0.45);
          box-shadow: 0 0 0 3px rgba(142, 110, 74, 0.12);
          background-color: rgba(255, 255, 255, 0.9);
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
      <span className="font-mono text-[10px] tracking-[0.2em] text-[#615b57] uppercase">
        {label}
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
      className="group flex flex-col gap-2 rounded-2xl border border-[#171615]/10 bg-[#f9f6f2] p-4 transition-colors hover:border-[#8e6e4a]/30 hover:bg-[#f3eee7]"
    >
      <Icon className="h-4 w-4 text-[#8e6e4a]" strokeWidth={1.7} />
      <span className="font-mono text-[10px] tracking-[0.18em] text-[#615b57] uppercase">
        {label}
      </span>
      <span className="text-sm font-medium text-[#171615]">{value}</span>
    </a>
  )
}
