"use client"

export function Footer() {
  return (
    <footer className="border-t border-[#171615]/10 px-4 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-7 w-7 items-center justify-center bg-[#171615] font-mono text-xs font-medium tracking-[0.1em] text-[#f5f1ea]">
            U
          </span>
          <p className="font-mono text-[10px] tracking-[0.2em] text-[#615b57] uppercase">
            Usman.dev · WordPress &amp; LMS architect
          </p>
        </div>

        <p className="text-xs text-[#615b57]">
          © {new Date().getFullYear()} Usman. Crafted with care and coffee.
        </p>
      </div>
    </footer>
  )
}
