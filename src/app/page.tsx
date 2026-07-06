import { Hero } from "@/features/home/components/Hero";
import { About } from "@/features/home/components/About";
import { Projects } from "@/features/home/components/Projects";
import { Skills } from "@/features/home/components/Skills";
import { Contact } from "@/features/home/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
