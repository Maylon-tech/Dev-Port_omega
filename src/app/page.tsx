import HeroSection from "@/components/home/hero/HeroSection";
import ProjectsSection from "@/components/home/projects/ProjectsSection";
import ServiceSection from "@/components/home/services/ServiceSection";
import SkillsSection from "@/components/home/skills/SkillsSection";
import ResumeSection from "@/components/resume/ResumeSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServiceSection />
      <ResumeSection />
      <SkillsSection />
      <ProjectsSection />
    </div>
  );
}
