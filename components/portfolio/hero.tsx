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
          scrolled ? "shadow-[0_12px_28px_-22px_rgba(23,22,21,0.35)]" : ""
        }`}
      >
        <a href="#top" className="flex items-center gap-2 pl-2" data-cursor="hover">
          <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#171615] text-[11px] font-medium tracking-[0.12em] text-[#f5f1ea]">
            U
          </span>
          <span className="hidden font-mono text-[10px] tracking-[0.22em] text-[#615b57] sm:inline">
            USMAN.DEV
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                data-cursor="hover"
                className="rounded-full px-3 py-1.5 text-sm text-[#615b57] transition-colors hover:text-[#171615]"
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
          className="rounded-full border border-[#171615]/10 bg-[#171615] px-4 py-1.5 text-[10px] font-medium tracking-[0.18em] text-[#f5f1ea] uppercase transition-colors hover:bg-[#8e6e4a] hover:text-[#f8f5f0] sm:text-[11px]"
        >
          Hire me
        </a>
      </nav>
    </motion.header>
  )
}
