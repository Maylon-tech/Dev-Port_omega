import Logo from "../Logo"



const Navbar = () => {
  return (
    <nav className="fixed z-50 flex items-center justify-between p-4 bg-green-800 text-white w-full h-15">
      <div className="text-3xl font-semibold">
        <Logo />
      </div>
      
      <ul className="flex gap-6">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Skills</li>
        <li>Contact</li>
      </ul>
      
      <div className="p-2 rounded-lg bg-blue-600 w-30 text-center">
        Social Links
      </div>
    </nav>
  )
}

export default Navbar
