import { DiJavascript, DiReact } from "react-icons/di"
import Header from "../Header/Header"
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri"
import { FaNodeJs } from "react-icons/fa"
import { SiTypescript } from "react-icons/si"

const skills = [
    {
        name: "Javascript",
        icon: <DiJavascript />,
        skillLevel: 92,
    },
    {
        name: "React JS",
        icon: <DiReact />,
        skillLevel: 80,
    },
    {
        name: "Next JS",
        icon: <RiNextjsFill />,
        skillLevel: 72,
    },
    {
        name: "Node JS",
        icon: <FaNodeJs />,
        skillLevel: 56,
    },
    {
        name: "Typescript",
        icon: <SiTypescript />,
        skillLevel: 67,
    },
    {
        name: "TailwindCSS",
        icon: <RiTailwindCssFill />,
        skillLevel: 87,
    },
]


const SkillsSection = () => {
  return (
    <section id="skills" className="my-16">
      <Header title="My Skills " as="h1" />
      <div className="flex flex-wrap justify-center gap-6">
        {
            skills.map((skill, index) => {
                return (
                    <div className="" key={index}>

                    </div>
                )
            })
        }
      </div>
    </section>
  )
}

export default SkillsSection
