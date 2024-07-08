import { FiSearch } from "react-icons/fi";

const HeroSection = () => {
  return (
    <>
    <div className="h-[56vh] flex justify-center items-center overflow-clip">
     <form action="" className="flex justify-between items-center">
        <input type="search" placeholder="Search Your Product..."  className="w-[68vw] px-2 py-3 sm:py-4 text-2xl sm:text-3xl  shadow-md outline-none border-b-2 bg-bgColor"/>
        <FiSearch className="text-3xl sm:text-4xl text-gray-500 sm:-ml-16 -ml-10" />
     </form>
     </div>
    </>
  )
}

export default HeroSection