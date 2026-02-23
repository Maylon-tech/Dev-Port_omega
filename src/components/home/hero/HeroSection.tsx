import Image from "next/image"


const HeroSection = () => {
  return (
    <section id="home" className='h-screen relative flex justify-center items-center overflow-hidden flex-col'>
      <div className="absolute z-10 flex flex-col items-center">
        {/* glowing image */}
        <div className="w-37.5 h-37.5 relative">
          <div className="absolute inset-0 rounded-full bg-linear-to-r from-blue-500 to-purple-600 blur-lg animate-pulse opacity-50">
            <Image
              src="/images/image.png"
              alt="image"
              fill
              className="rounded-full object-cover"
            />
          </div>
        </div>

        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl my-6 font-bold tracking-wide text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-gray-300">
        Hello! I &apos; a Web Developer
      </h1>
      </div>


    </section>
  )
}

export default HeroSection
