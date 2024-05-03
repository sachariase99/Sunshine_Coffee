import SunshineLogo from "./sunshineLogo"
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-[#111111] h-[116px] text-white flex items-center justify-end">
      <SunshineLogo />
      <div className="border-white border-2 px-6 mr-8 cursor-pointer">
        Europa
      </div>
      <IoCartOutline className="h-[62px] w-auto mr-8 cursor-pointer" />
      <FaRegUser className="h-[62px] w-auto mr-8 cursor-pointer" />
    </nav>
  )
}

export default Navbar
