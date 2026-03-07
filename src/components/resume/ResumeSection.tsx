import { LuAward, LuBookOpen, LuGraduationCap, LuPackage, LuServer } from "react-icons/lu"
import Header from "../Header/Header"
import ResumeCard from "./ResumeCard"
import { RiNextjsFill } from "react-icons/ri"


const ResumeSection = () => {
  return (
    <section id="resume" className="my-12">
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* Education Section */}
        <div data-aos="zoom-out">
            <Header
              title="My Education"
              as="h2"
            />
            
            <div className="space-y-6">
              <ResumeCard 
                icon={LuGraduationCap} 
                role="Computer Science Degree"
                description="Bachelor of Science in Software Enginner | University of Unip | Focus on Security and Programming with Algorithms following Web technologies."
                date="Feb 2020 - March 2024"
              />
              
              <ResumeCard 
                icon={LuBookOpen} 
                role="Security Enginner Specialization"
                description="Security Bootcamp in Software Enginner | University of Unip | Focus on Security and Programming with Algorithms following Web technologies."
                date="Feb 2021 - April 2022"
              />
              
              <ResumeCard 
                icon={LuAward} 
                role="Web Design and Develoment Specialization Camp"
                description="Bachelor of Science in Software Enginner | University of Unip | Focus on Security and Programming with Algorithms following Web technologies."
                date="January 2022 - August 2025"
              />
            </div>
        </div>
        
        {/* work Experience */}
        
        <div data-aos="zoom-in" data-aos-delay="200">
          <Header title="My Work Experience" as="h2" />

          <div className="space-y-6">
            <ResumeCard
              icon={RiNextjsFill}
              role="FrontEnd Developer"
              description="Crafting responsivem accessible interface with modern frameworks like React & Nextjs. Fuics on perfomance, UX, and pixel-perfect implementation."
            />

            <ResumeCard
              icon={LuServer}
              role="Backend Developer"
              description="Building scalable APIs, databases, and server infrastructure. Expericed with Node.js, PHP and Cloude Services, and microservices architecture."
            />

            <ResumeCard
              icon={LuPackage}
              role="FullStack Developer"
              description="End-to-end web applicatoin developement. Bridging frontend interfaces with backend systems for cohensive, full-featured digital solutions."
            />
          </div>
        </div>
      </div>
    </section>
  ) 
}

export default ResumeSection
