import cvData from "../data/cv.json";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Experience } from "../components/Experience";
import { Projects } from "../components/Projects";
import { Education } from "../components/Education";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

type CVData = typeof cvData;

export default function Home() {
  const data = cvData as CVData;

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <Navbar title={data.hero.name} />
      <div className="bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950/95">
        <Hero hero={data.hero} />
        <About about={data.about} />
        <Skills skills={data.skills} />
        <Experience experience={data.experience} />
        <Projects projects={data.projects} />
        <Education education={data.education} />
        <Contact contact={data.contact} />
      </div>
      <Footer name={data.hero.name} />
    </main>
  );
}
