import Typewriter from 'typewriter-effect'


const AnimatedIntro = () => {
  return (
    <div className="text-lg sm:text-2xl h-30 px-8 text-center font-medium text-gray-400">
      Hi, I&apos;m Nemoto - A Passionate
      <span className="text-indigo-400 font-bold">
        <Typewriter 
            options={{
                strings: [
                    "Fullstack Developer",
                    "Nextjs Developer",
                    "ReactJS Expert",
                    "Tech Enthusiast",
                    "UI/UX Designer",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
                wrapperClassName: "inline-block py-6"
            }}
        />
      </span>
    </div>
  )
}

export default AnimatedIntro
