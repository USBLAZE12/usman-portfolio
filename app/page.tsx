import { CircleCursor } from "@/components/portfolio/circle-cursor"
import { Nav } from "@/components/portfolio/nav"
import { Hero } from "@/components/portfolio/hero"
import { Expertise } from "@/components/portfolio/expertise"
import { Flagship } from "@/components/portfolio/flagship"
import { Stack } from "@/components/portfolio/stack"
import { Trust } from "@/components/portfolio/trust"
import { Contact } from "@/components/portfolio/contact"
import { Footer } from "@/components/portfolio/footer"

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#0a0a0b] text-foreground">
      <CircleCursor />
      <Nav />
      <Hero />
      <Expertise />
      <Flagship />
      <Stack />
      <Trust />
      <Contact />
      <Footer />
    </main>
  )
}
