
import Link from "next/link"
import Logo from "../Logo"

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
      
      <div className="p-2 rounded-lg bg-blue-600 w-30 text-center">
        Social Links
      </div>
    </nav>
  )
}

export default Navbar
