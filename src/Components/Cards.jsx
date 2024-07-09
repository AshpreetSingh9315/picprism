/* eslint-disable react/prop-types */
// import { IoIosCart } from "react-icons/io";
// import { IoMdHeart } from "react-icons/io";
 
const Cards = ({id ,img , author , price , title , icon1 , icon2}) => {
  return (
    <>
          <div className="shadow-lg  rounded-lg mb-16"id={id}>
          <div className="w-full h-[200px] overflow-clip rounded-lg ">
            <img
              src={img}
              className="w-full h-full hover:scale-105 transition-all ease-linear transform object-cover"
              alt={title}
            />  
          </div>

          <div className="flex flex-row justify-between items-end px-4 py-2">
            <div className="">
              <p className="py-1 px-5 mt-3 mb-2 bg-black text-white text-1xl w-fit rounded-[20px] font-semibold">
                {'@' + author.charAt(0).toUpperCase() + author.slice(1)}
              </p>
              <p className="font-semibold text-[3vh]">{title}</p>
              <p className="text-gray-500 text-[2xl]">Price: ${price}</p>
            </div>

            <div className="flex justify-center items-center gap-4 pb-3  ">
              {icon1}
              {icon2}
            </div>
          </div>
        </div>
    </>
  )
}

export default Cards
