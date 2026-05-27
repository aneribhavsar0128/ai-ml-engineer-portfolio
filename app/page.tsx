import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Certifications } from "@/components/certifications";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
