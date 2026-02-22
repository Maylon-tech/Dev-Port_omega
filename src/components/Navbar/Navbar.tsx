"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Logo from "../Logo"
import LinkButton from "../LinkButton"
import { LuDownload, LuMenu, LuX } from "react-icons/lu"
import MobileNav from "./MobileNav"

export const navLinks = [
  {
    url: "#home",
    label: "Home"
  },
  {
    url: "#services",
    label: "Services"
  },
  {
    url: "#resume",
    label: "Resume"
  },
  {
    url: "#projects",
    label: "Projects"
  },
  {
    url: "#skills",
    label: "Skills"
  },
  {
    url: "#testimonials",
    label: "Testimonials"
  },
  {
    url: "#contact",
    label: "Contact"
  },
]

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false)
  const [navBackground, setNavBackground] = useState(false)

  useEffect(() => {
    const navHandler = () => {
      if (window.scrollY >= 90) setNavBackground(true)
      if(window.scrollY < 90) setNavBackground(false)
    }
    
    window.addEventListener("scroll", navHandler)

    return () => {
      return window.removeEventListener("scroll", navHandler)
    }
  }, [])

  return (
    <nav className={`fixed z-50 flex items-center justify-between p-4 bg-green-800 text-white w-full h-15 ${navBackground ? "bg-slate-900 shadow-md" : ""}`} >
      {/* LOGO */}
      <div className="text-3xl font-semibold">
        <Logo />
      </div>
      
      {/* Nav-links */}
      <ul className="hidden lg:flex space-x-10">
        {
          navLinks.map((link) => {
            return (
              <li key={link.url}>
                <Link
                  href={link.url}
                  className="text-gray-200 hover:text-cyan-300 font-medium tansition-colors duration-300"
                >
                  {link.label}
                </Link>
              </li>
            )
          })
        }
      </ul>
      
      {/* Link Button */}
      
      <div className="hidden lg:block">
        <LinkButton
          href="/document/cd.pdf"
          text="Download CV"
          download 
          icon={LuDownload}
          iconPosition="left"
        />
      </div>

      <button
        onClick={() => setNavOpen(!navOpen)}
        className="w-8 h-8 cursor-pointer text-white z-100 lg:hidden"
      >
        {
          navOpen ? <LuX size={30} /> : <LuMenu size={30} />
        }
      </button>
      <MobileNav
        navOpen={navOpen}
      />

    </nav>
  )
}

export default Navbar
