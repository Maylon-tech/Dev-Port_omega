"use client"

import Image from "next/image"
import AnimatedIntro from "./AnimatedIntro"
import LinkButton from "@/components/LinkButton"
import { LuArrowBigRight } from "react-icons/lu"
import Particles from './Particles';

const HeroSection = () => {
  return (
    <section
      id="home"
      className='h-screen relative flex justify-center items-center overflow-hidden flex-col'
    >
        {/* Particles  */}
      <div style={{ width: '100%', height: '600px', position: 'relative' }}>
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>

      <div className="absolute z-10 flex flex-col items-center">
        {/* glowing image */}
        <div className="w-45 h-45 relative" data-aos="fade-up">
          <div className="absolute inset-0 rounded-full bg-linear-to-r from-blue-500 to-purple-600 animate-pulse opacity-50">
            <Image
              src="/images/nemoto.jpg"
              alt="image"
              fill
              className="rounded-full object-cover"
            />
          </div>
        </div>

        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl my-6 font-bold tracking-wide text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-gray-300" data-aos="fade-up" data-aos-delay="200">
          Hello! I &apos; a Web Developer
        </h1>

        <AnimatedIntro />
        <LinkButton
          href="#projects"
          text="See My Work"
          icon={LuArrowBigRight}
          rounded
          aosType="fade-up"
          aosDelay={600}
          animate
        />
      </div>


    </section>
  )
}

export default HeroSection
