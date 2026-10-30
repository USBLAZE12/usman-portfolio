"use client"

import {
  Atom,
  Github,
  Triangle,
  Database,
  Code2,
  Boxes,
  PanelsTopLeft,
} from "lucide-react"
import { Reveal } from "./reveal"
import { SectionHeader } from "./expertise"

const stack = [
  { name: "WordPress", Icon: PanelsTopLeft },
  { name: "Elementor", Icon: Boxes },
  { name: "PHP", Icon: Code2 },
  { name: "React", Icon: Atom },
  { name: "MySQL", Icon: Database },
  { name: "GitHub", Icon: Github },
  { name: "Vercel", Icon: Triangle },
]

export function Stack() {
  const items = [...stack, ...stack]

  return (
    <section id="stack" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeader
            label="03 — Tech stack"
            title="Tools I use every day."
            description="From CMS to deployment — battle-tested across dozens of premium builds."
          />
        </Reveal>
      </div>

      <Reveal className="mt-14">
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#f5f1ea] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#f5f1ea] to-transparent" />

          <div className="flex w-max animate-marquee gap-4 py-2">
            {items.map((item, i) => {
              const Icon = item.Icon
              return (
                <div
                  key={`${item.name}-${i}`}
                  className="glass flex items-center gap-3 rounded-2xl px-6 py-4"
                >
                  <Icon className="h-5 w-5 text-[#8e6e4a]" strokeWidth={1.6} />
                  <span className="whitespace-nowrap text-base font-medium tracking-[-0.04em] text-[#171615]">
                    {item.name}
                  </span>
                </div>
              )
            })}
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-4xl px-4">
          <p className="text-center font-mono text-[11px] tracking-[0.22em] text-[#615b57] uppercase">
            Also: Elementor Pro · GitHub · Vercel · XAMPP
          </p>
        </div>
      </Reveal>
    </section>
  )
}
