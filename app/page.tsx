import Contact from "@/components/main/Contact";
import Hero from "@/components/main/Hero";

import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";

import { WhatsAppToggle } from "@/components/main/WhatsAppToggle";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Projects />
        <Contact/>
        <WhatsAppToggle />
      </div>
    </main>
  )
}