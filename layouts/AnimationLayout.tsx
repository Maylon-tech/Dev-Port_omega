"use client";

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const AnimationLayout = ({ children }: { children: React.ReactNode }) => {

    useEffect(() => {
        const initAOS = async () => {
            await import("aos")
            AOS.init({
                duration: 1000,
                easing: "ease",
                once: true,
                anchorPlacement: 'top-center'
            })
        }

        initAOS()
    }, [])


  return (
    <>
        { children } 
    </>
  )
}

export default AnimationLayout
;