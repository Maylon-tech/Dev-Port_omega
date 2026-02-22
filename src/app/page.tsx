import HeroSection from "@/components/home/hero/HeroSection";
import ProjectsSection from "@/components/home/projects/ProjectsSection";
import SkillsSection from "@/components/home/skills/SkillsSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
    </div>
  );
}
