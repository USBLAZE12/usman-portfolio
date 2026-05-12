"use client"

export function Footer() {
  return (
    <footer className="border-t border-border px-4 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-brand font-mono text-xs font-bold text-primary-foreground">
            U
          </span>
          <p className="font-mono text-xs tracking-widest text-muted-foreground">
            USMAN.DEV · WORDPRESS &amp; LMS ARCHITECT
          </p>
        </div>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Usman. Crafted with care &amp; coffee.
        </p>
      </div>
    </footer>
  )
}
