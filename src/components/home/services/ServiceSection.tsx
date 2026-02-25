import Header from "@/components/Header/Header"
import ServiceCard from "./ServiceCard"

const ServiceSection = () => {
  return (
    <section
        id="services"
        className='h-screen relative flex overflow-hidden flex-col bg-slate-800'
    >
          {/* header */}
          <Header title="What I Offer" />
          <div className="w-[90%] sm:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-20">
              <ServiceCard
                  name="UI and UX"
                  icon="/images/s1.png"
                  description="Designing intuitive interfaces and seamless user experiences."
              />
              <ServiceCard
                  name="Web and Creative"
                  icon="/images/s2.png"
                  description="Building responsive web apps and cross-platform mobile solutions."
              />
              <ServiceCard
                  name="Design and Creative"
                  icon="/images/s3.png"
                  description="Creating unique brand identities and compelling visual designs."
              />
              <ServiceCard
                  name="Mobile & Development"
                  icon="/images/s4.png"
                  description="Full-Stack development with modern frameworks and best practices."
              />
          </div>
    </section>
  )
}

export default ServiceSection
