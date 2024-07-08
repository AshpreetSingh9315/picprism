import {Link} from "react-router-dom";


const Navbar = () => {
  return (
    <>
      <nav className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-5 py-5  shadow-md fixed top-0 left-0 right-0 bg-white gap-1 sm:gap-0 z-30">

        <div className="flex justify-center items-center">
        <img src="/picprismlogo.png" alt="" className="w-[50px] "/>       
        <Link to={"/"} className="text-3xl font-bold"> PicPrism </Link>
        </div>

        <ul className="flex flex-row justify-center items-center font-semibold  gap-6 sm:gap-5 text-lg  text-gray-500 ps-4 sm:pe-0  ">
        <Link to={"/"} className="hover:text-black cursor-pointer sm:p-2 transition-all ease-linear transform " >Home</Link>
        <Link to={""} className="hover:text-black cursor-pointer sm:p-2 transition-all ease-linear transform " >About</Link>
        <Link to={"/login"} className="hover:text-black cursor-pointer sm:p-2 transition-all ease-linear transform " >Log In</Link>
        <Link to={"/signup"} className="hover:text-black cursor-pointer sm:p-2 transition-all ease-linear transform " >Sign Up</Link>
        </ul>

      </nav>
    </>
  )
}

export default Navbar
