const pillars = [
  {
    title: "AI web engineering",
    eyebrow: "Build",
    body:
      "Product systems designed for clarity, speed, and operational reliability—frontends, CMS flows, LMS experiences, and conversion-critical user journeys.",
    bullets: ["Next.js architecture", "Conversion UX", "System reliability"],
  },
  {
    title: "Cinematic media direction",
    eyebrow: "Frame",
    body:
      "Narrative-led visuals that make technical work feel tangible: motion systems, campaign storytelling, and brand content with a sharp editorial edge.",
    bullets: ["Creative direction", "Storyboarding", "Edit systems"],
  },
  {
    title: "Execution design",
    eyebrow: "Ship",
    body:
      "From idea to deployment, I turn fragmented requirements into clean interfaces and clear production logic that can be handed off and scaled.",
    bullets: ["Design systems", "Production handoff", "Launch QA"],
  },
]

const stack = [
  "Next.js",
  "TypeScript",
  "Tailwind",
  "React",
  "WordPress",
  "TutorLMS",
  "LearnDash",
  "CMS strategy",
  "SEO",
  "UX systems",
  "AI workflows",
  "Media production",
]

const frames = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
]

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="sticky top-0 z-30 border-b border-black/10 bg-[#FAFAFA]/90 backdrop-blur-sm">
          <div className="mx-auto flex max-w-6xl items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <div className="grid size-8 place-items-center border border-black/15 bg-[#111111] text-[0.56rem] font-medium tracking-[0.28em] text-[#FAFAFA]">
                U
              </div>
              <span className="text-[0.62rem] uppercase tracking-[0.28em] text-black/70">
                Usman
              </span>
            </div>

            <nav className="hidden items-center gap-8 md:flex">
              <a className="text-[0.62rem] uppercase tracking-[0.22em] text-black/55 transition-colors hover:text-black" href="#pillars">
                Pillars
              </a>
              <a className="text-[0.62rem] uppercase tracking-[0.22em] text-black/55 transition-colors hover:text-black" href="#proof">
                Proof
              </a>
              <a className="text-[0.62rem] uppercase tracking-[0.22em] text-black/55 transition-colors hover:text-black" href="#stack">
                Stack
              </a>
              <a className="text-[0.62rem] uppercase tracking-[0.22em] text-black/55 transition-colors hover:text-black" href="#contact">
                Contact
              </a>
            </nav>

            <a
              href="#contact"
              className="border border-black/15 bg-[#111111] px-4 py-2 text-[0.58rem] uppercase tracking-[0.22em] text-[#FAFAFA] transition-colors hover:bg-[#FAFAFA] hover:text-[#111111]"
            >
              Book a call
            </a>
          </div>
        </header>

        <section className="grid max-w-6xl gap-10 pb-14 pt-12 md:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-12 lg:pb-20 lg:pt-20">
          <div className="space-y-8">
            <p className="text-[0.62rem] uppercase tracking-[0.28em] text-black/55">
              Technical Engineer / AI Director
            </p>

            <h1 className="max-w-xl text-5xl leading-[0.88] tracking-[-0.08em] text-[#111111] sm:text-6xl lg:text-[5.15rem]">
              Engineer the product.
              <br />
              Direct the story.
            </h1>

            <p className="max-w-lg text-base leading-7 text-black/70">
              I build fast, reliable web systems and shape their visual narrative—turning complex product work into experiences people understand, trust, and remember.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#proof"
                className="border border-black/15 bg-[#111111] px-5 py-3 text-[0.62rem] uppercase tracking-[0.22em] text-[#FAFAFA] transition-colors hover:bg-[#FAFAFA] hover:text-[#111111]"
              >
                View work
              </a>
              <a
                href="#contact"
                className="border border-black/15 bg-[#FAFAFA] px-5 py-3 text-[0.62rem] uppercase tracking-[0.22em] text-[#111111] transition-colors hover:bg-[#111111] hover:text-[#FAFAFA]"
              >
                Start a project
              </a>
            </div>

            <div className="flex flex-wrap gap-4 pt-2 text-[0.62rem] uppercase tracking-[0.18em] text-black/60">
              <span className="border border-black/10 bg-[#F5F5F3] px-2.5 py-1.5">Next.js</span>
              <span className="border border-black/10 bg-[#F5F5F3] px-2.5 py-1.5">WordPress</span>
              <span className="border border-black/10 bg-[#F5F5F3] px-2.5 py-1.5">LMS</span>
              <span className="border border-black/10 bg-[#F5F5F3] px-2.5 py-1.5">AI workflows</span>
            </div>
          </div>

          <div className="panel overflow-hidden p-3">
            <div className="border border-black/15 bg-[#F0F0EE] p-3">
              <div className="border border-black/15 bg-[#111111] p-3 text-[#FAFAFA]">
                <div className="mb-4 flex items-center justify-between text-[0.56rem] uppercase tracking-[0.18em] text-white/70">
                  <span>Reel</span>
                  <span>01 / 06</span>
                </div>

                <div className="aspect-[4/5] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_rgba(0,0,0,0.0)_42%),linear-gradient(180deg,#18181b_0%,#111111_100%)] p-3">
                  <div className="flex h-full flex-col justify-between border border-white/10 bg-[#0F0F10] p-3">
                    <div className="flex items-center justify-between text-[0.52rem] uppercase tracking-[0.18em] text-white/65">
                      <span>Frame 01</span>
                      <span>00:12</span>
                    </div>

                    <div className="space-y-3">
                      <div className="h-24 border border-white/10 bg-[#1B1B1D]" />
                      <div className="flex gap-2">
                        <div className="h-16 flex-1 border border-white/10 bg-[#232326]" />
                        <div className="h-16 w-20 border border-white/10 bg-[#2B2B2E]" />
                      </div>
                      <div className="h-14 border border-white/10 bg-[#111111]" />
                    </div>

                    <div className="mt-4 flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center border border-white/15 text-[0.45rem] uppercase tracking-[0.2em] text-white/80">
                        ▶
                      </div>
                      <div className="h-px flex-1 bg-white/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between gap-4 border-t border-black/10 pt-3 text-[0.56rem] uppercase tracking-[0.2em] text-black/60">
              <span>Frame scrubber</span>
              <span>00:12 / 00:48</span>
            </div>
            <div className="mt-3 h-1.5 overflow-hidden bg-black/10">
              <div className="h-full w-[33%] bg-[#111111]" />
            </div>
          </div>
        </section>

        <section id="pillars" className="max-w-6xl pb-14 pt-4 lg:pb-20">
          <div className="mb-7 flex items-end justify-between gap-4">
            <div>
              <p className="text-[0.62rem] uppercase tracking-[0.28em] text-black/55">Execution pillars</p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="panel flex h-full flex-col p-5 sm:p-6">
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-[0.56rem] uppercase tracking-[0.2em] text-[#A57B49]">{pillar.eyebrow}</span>
                  <span className="size-2 border border-black/20 bg-[#111111]" />
                </div>

                <h2 className="mb-4 text-2xl leading-tight tracking-[-0.06em] text-[#111111]">
                  {pillar.title}
                </h2>
                <p className="text-sm leading-6 text-black/68">{pillar.body}</p>

                <ul className="mt-6 space-y-3 border-t border-black/10 pt-4 text-[0.62rem] uppercase tracking-[0.18em] text-black/60">
                  {pillar.bullets.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="inline-block size-1.5 bg-[#111111]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="proof" className="max-w-6xl pb-14 lg:pb-20">
          <div className="mb-7 flex items-end justify-between gap-4">
            <div>
              <p className="text-[0.62rem] uppercase tracking-[0.28em] text-black/55">Proof modules</p>
            </div>
            <a href="#contact" className="text-[0.58rem] uppercase tracking-[0.2em] text-black/70 hover:text-black">
              Request case study
            </a>
          </div>

          <div className="grid gap-4 xl:grid-cols-2">
            <article className="panel p-5 sm:p-6">
              <div className="flex items-start justify-between gap-4 border-b border-black/10 pb-4">
                <div>
                  <p className="text-[0.62rem] uppercase tracking-[0.18em] text-black/55">Scholar LMS</p>
                  <h3 className="mt-3 max-w-md text-3xl leading-tight tracking-[-0.06em] text-[#111111]">
                    Course infrastructure that turns attention into completion.
                  </h3>
                </div>
                <span className="border border-[#A57B49]/40 bg-[#F4EADF] px-2 py-1 text-[0.58rem] uppercase tracking-[0.18em] text-[#A57B49]">
                  Case study
                </span>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
                <div className="space-y-4">
                  <div className="border border-black/10 bg-[#F5F5F3] p-4">
                    <p className="text-[0.6rem] uppercase tracking-[0.18em] text-black/50">Challenge</p>
                    <p className="mt-3 text-sm leading-6 text-black/70">
                      A learning brand needed a sharper conversion path, cleaner course journeys, and a system that scaled without sacrificing trust.
                    </p>
                  </div>

                  <ul className="space-y-3 text-sm text-black/72">
                    <li className="flex items-start gap-3">
                      <span className="mt-2 size-1.5 bg-[#111111]" />
                      Rebuilt learner-facing flows to simplify discovery, registration, and lesson navigation.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 size-1.5 bg-[#111111]" />
                      Standardized UX patterns across content, checkout, and engagement components.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 size-1.5 bg-[#111111]" />
                      Reduced friction in admin and content workflows while keeping the platform stable.
                    </li>
                  </ul>
                </div>

                <div className="border border-black/10 bg-[#111111] p-4 text-[#FAFAFA]">
                  <p className="text-[0.6rem] uppercase tracking-[0.18em] text-white/65">Outcome</p>
                  <div className="mt-6 space-y-5">
                    <div>
                      <p className="text-[0.6rem] uppercase tracking-[0.2em] text-white/55">System design</p>
                      <p className="mt-2 text-lg tracking-[-0.05em]">Clear course journeys</p>
                    </div>
                    <div>
                      <p className="text-[0.6rem] uppercase tracking-[0.2em] text-white/55">UX structure</p>
                      <p className="mt-2 text-lg tracking-[-0.05em]">Sharper content flow</p>
                    </div>
                    <div>
                      <p className="text-[0.6rem] uppercase tracking-[0.2em] text-white/55">Production</p>
                      <p className="mt-2 text-lg tracking-[-0.05em]">Reliable launch delivery</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <article className="panel p-5 sm:p-6">
              <div className="flex items-start justify-between gap-4 border-b border-black/10 pb-4">
                <div>
                  <p className="text-[0.62rem] uppercase tracking-[0.18em] text-black/55">Cinematic narratives</p>
                  <h3 className="mt-3 max-w-md text-3xl leading-tight tracking-[-0.06em] text-[#111111]">
                    Frame-led storytelling for product launches and brand moments.
                  </h3>
                </div>
                <span className="border border-black/15 bg-[#F5F5F3] px-2 py-1 text-[0.58rem] uppercase tracking-[0.18em] text-black/60">
                  Edit system
                </span>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-2">
                {frames.map((frame, index) => (
                  <div
                    key={frame}
                    className={`border border-black/10 p-2 ${index === 2 ? "bg-[#111111] text-[#FAFAFA]" : "bg-[#F4F4F2] text-[#111111]"}`}
                  >
                    <div className="aspect-[3/4] border border-current/15 bg-[linear-gradient(180deg,rgba(17,17,17,0.10),rgba(17,17,17,0.02)),#FAFAFA]">
                      <div className="flex h-full items-end justify-between p-2 text-[0.5rem] uppercase tracking-[0.18em]">
                        <span>{frame}</span>
                        <span>scene</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-3 text-sm text-black/72">
                <p className="flex items-start gap-3">
                  <span className="mt-2 size-1.5 bg-[#111111]" />
                  Develop visual rhythm and pacing around product launches instead of generic marketing noise.
                </p>
                <p className="flex items-start gap-3">
                  <span className="mt-2 size-1.5 bg-[#111111]" />
                  Build media systems that translate technical capability into persuasive, cinematic cues.
                </p>
                <p className="flex items-start gap-3">
                  <span className="mt-2 size-1.5 bg-[#111111]" />
                  Keep the story grounded in the product, not decoration or AI-style patterning.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section id="stack" className="max-w-6xl pb-14 lg:pb-20">
          <div className="grid gap-8 border-t border-black/10 pt-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <div>
              <p className="text-[0.62rem] uppercase tracking-[0.28em] text-black/55">Engineering stack</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {stack.map((item) => (
                <span
                  key={item}
                  className="border border-black/10 bg-[#F5F5F3] px-3 py-2 text-[0.62rem] uppercase tracking-[0.16em] text-black/70"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="max-w-6xl pb-16 pt-4 lg:pb-20">
          <div className="border border-black/15 bg-[#111111] p-5 text-[#FAFAFA] sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="text-[0.62rem] uppercase tracking-[0.28em] text-white/60">Contact</p>
                <h2 className="mt-4 max-w-xl text-4xl leading-tight tracking-[-0.08em] text-[#FAFAFA] sm:text-5xl">
                  Ready to ship a sharper product story?
                </h2>
              </div>

              <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                <a
                  href="https://github.com/USBLAZE12"
                  className="border border-white/15 bg-[#FAFAFA] px-4 py-3 text-[0.58rem] uppercase tracking-[0.22em] text-[#111111] transition-colors hover:bg-[#111111] hover:text-[#FAFAFA]"
                >
                  GitHub
                </a>
                <a
                  href="https://github.com/USBLAZE12/usman-portfolio"
                  className="border border-white/15 bg-transparent px-4 py-3 text-[0.58rem] uppercase tracking-[0.22em] text-[#FAFAFA] transition-colors hover:bg-[#FAFAFA] hover:text-[#111111]"
                >
                  Portfolio repo
                </a>
              </div>
            </div>

            <p className="mt-8 max-w-xl text-sm leading-6 text-white/72">
              Available for selected product, LMS, and brand collaboration work where engineering rigor and visual clarity matter.
            </p>
          </div>
        </section>

        <footer className="border-t border-black/10 py-6 text-[0.58rem] uppercase tracking-[0.2em] text-black/55">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <span>Usman</span>
            <span>Engineering. Narrative. Production.</span>
          </div>
        </footer>
      </div>
    </main>
  )
}
