"use client"

import { useState } from "react"
import Link from "next/link"
import Logo from "../Logo"
import LinkButton from "../LinkButton"
import { LuDownload } from "react-icons/lu"
import MobileNav from "./MobileNav"

const navLinks = [
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



  return (
    <nav className="fixed z-50 flex items-center justify-between p-4 bg-green-800 text-white w-full h-15">
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

      <MobileNav
        navOpen={navOpen}
      />

    </nav>
  )
}

export default Navbar
