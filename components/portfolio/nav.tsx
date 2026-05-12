"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const links = [
  { href: "#expertise", label: "Expertise" },
  { href: "#work", label: "Work" },
  { href: "#stack", label: "Stack" },
  { href: "#trust", label: "Trust" },
  { href: "#contact", label: "Contact" },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
    >
      <nav
        className={`glass flex w-full max-w-3xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-300 ${
          scrolled ? "shadow-[0_8px_32px_-12px_rgba(0,0,0,0.6)]" : ""
        }`}
      >
        <a
          href="#top"
          className="flex items-center gap-2 pl-2"
          data-cursor="hover"
        >
          <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-brand text-primary-foreground">
            <span className="font-mono text-xs font-bold">U</span>
            <span className="absolute inset-0 rounded-full ring-1 ring-emerald-brand/40 ring-offset-2 ring-offset-[#0a0a0b]" />
          </span>
          <span className="hidden font-mono text-xs tracking-widest text-muted-foreground sm:inline">
            USMAN.DEV
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                data-cursor="hover"
                className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://www.fiverr.com/wp_builds01"
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="hover"
          className="rounded-full border border-emerald-brand/30 bg-emerald-brand/10 px-4 py-1.5 text-xs font-medium text-emerald-brand transition-colors hover:bg-emerald-brand/20 sm:text-sm"
        >
          Hire me
        </a>
      </nav>
    </motion.header>
  )
}
