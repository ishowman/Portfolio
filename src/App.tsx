import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ProjectSection from "./components/ProjectSection";
import SkillSection from "./components/SkillSection";
import Stats from "./components/Stats";
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/ui/dot-pattern";
import BlogSection from "./components/BlogSection";
import { FadeIn } from "./components/FadeIn";

const App = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col relative">
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <DotPattern
          glow={true}
          width={32}
          height={32}
          cr={1.5}
          className={cn(
            "mask-[radial-gradient(ellipse_at_center,white,transparent)]",
          )}
        />
      </div>
      <div className="relative z-10 flex flex-col flex-1">
        <main className="mx-auto flex w-full max-w-3xl flex-col gap-20 px-6 pb-12 sm:gap-20 sm:pb-20 overflow-hidden">
          <Hero />
          <FadeIn delay={0.2}>
            <SkillSection />
          </FadeIn>
          <FadeIn delay={0.1}>
            <ProjectSection />
          </FadeIn>
          <FadeIn delay={0.1}>
            <BlogSection />
          </FadeIn>
          <FadeIn delay={0.1}>
            <Stats />
          </FadeIn>
          <FadeIn delay={0.1}>
            <Footer />
          </FadeIn>
        </main>
      </div>
    </div>
  );
};

export default App;
