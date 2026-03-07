import Header from "../Header/Header"
import ProjectCard from "./ProjectCard"


const ProjectsSection = () => {
  return (
    <section id="projects" className="">
      <Header title="Recent Projects" as="h1" />
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 overflow-hidden">
        <div data-aos="fade-right">
          <ProjectCard 
            title="Modern Dashboard UI"
            imagePath="/images/p1.webp"
            description="Responsive admin dashboard with data visualization charts, user management and real-time analytics. Built with React, tailwindCSS, and Recarts."
          />
        </div>
        <div data-aos="fade-left">   
          <ProjectCard 
            title="Modern Barbershop Admin Client Booking"
            imagePath="/images/p2.webp"
            description="Responsive admin dashboard with data visualization charts, user management and real-time analytics. Built with React, tailwindCSS, and Recarts."
          />
        </div>
        <div data-aos="fade-right">  
          <ProjectCard 
            title="Modern SAAS Landing page"
            imagePath="/images/p3.webp"
            description="Responsive admin dashboard with data visualization charts, user management and real-time analytics. Built with React, tailwindCSS, and Recarts."
          />
        </div>
        <div data-aos="fade-left">   
          <ProjectCard 
            title="System Platform Management"
            imagePath="/images/p4.webp"
            description="Responsive admin dashboard with data visualization charts, user management and real-time analytics. Built with React, tailwindCSS, and Recarts."
          />
        </div>
      </div>


    </section>
  )
}

export default ProjectsSection
