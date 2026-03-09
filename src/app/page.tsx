import HeroSection from "@/components/home/hero/HeroSection"
import ProjectsSection from "@/components/projects/ProjectsSection"
import ServiceSection from "@/components/home/services/ServiceSection"
import SkillsSection from "@/components/skills/SkillsSection"
import ResumeSection from "@/components/resume/ResumeSection"
import TestimonialsSection from "@/components/testimonial/TestimonialsSection"
import ContactSection from "@/components/contact/ContactSection"
import AnimationLayout from "../../layouts/AnimationLayout"
import { Toaster } from "react-hot-toast"

export default function Home() {
  return (
    <AnimationLayout>
      <HeroSection />
      <ServiceSection />
      <ResumeSection />
      <ProjectsSection />
      <SkillsSection />
      <TestimonialsSection />
      <ContactSection />
      <Toaster />
    </AnimationLayout>
  );
}
