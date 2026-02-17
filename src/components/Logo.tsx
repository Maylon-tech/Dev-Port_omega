import Link from "next/link"
import { LuCodeXml } from "react-icons/lu"


const Logo = () => {
  return (
    <Link href="/" className="flex gap-2 items-center">
        <span className="w-10 h-10 rounded-full bg-gray-800 grid place-items-center">
          <LuCodeXml />
        </span>
        <h2 className="text-gray-200 font-bold md:text-2xl hidden sm:block">
          NemotoDev
        </h2>
    </Link>
  )
}

export default Logo
