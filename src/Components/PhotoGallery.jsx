import { IoIosCart } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";

import Cards from "./Cards"
const PhotoGallery = () => {
  return (
    <div className="bg-white flex flex-col justify-center items-center sm:my-20">
      <h3 className="text-4xl font-semibold py-10">Photos Gallery</h3>
      <div className="flex flex-row sm:gap-5  flex-wrap justify-center items-center">
        
      <Cards
        id = {1}
        title = "The Future Me"
        img = "https://images.pexels.com/photos/15804651/pexels-photo-15804651/free-photo-of-people-together-on-motorcycle-on-road-in-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        author = "AshSingh"
        price = {29}
        icon1 = {<IoIosCart className="text-3xl  cursor-pointer" />}
        icon2 = {<IoMdHeart className="text-3xl text-red-600 cursor-pointer" />}
      />

      <Cards
        id = {2}
        title = "The Better Trip"
        img = "https://images.pexels.com/photos/26754397/pexels-photo-26754397/free-photo-of-sunrise-praia-do-felix.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        author = "GameFix"
        price = {23}
        icon1 = {<IoIosCart className="text-3xl  cursor-pointer" />}
        icon2 = {<IoMdHeart className="text-3xl text-red-600 cursor-pointer" />}
      />
      <Cards
        id = {2}
        title = "The Better Trip"
        img = "https://images.pexels.com/photos/26754397/pexels-photo-26754397/free-photo-of-sunrise-praia-do-felix.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        author = "GameFix"
        price = {23}
        icon1 = {<IoIosCart className="text-3xl  cursor-pointer" />}
        icon2 = {<IoMdHeart className="text-3xl text-red-600 cursor-pointer" />}
      />
      <Cards
        id = {2}
        title = "The Better Trip"
        img = "https://images.pexels.com/photos/26754397/pexels-photo-26754397/free-photo-of-sunrise-praia-do-felix.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        author = "GameFix"
        price = {23}
        icon1 = {<IoIosCart className="text-3xl  cursor-pointer" />}
        icon2 = {<IoMdHeart className="text-3xl text-red-600 cursor-pointer" />}
      />
      <Cards
        id = {2}
        title = "The Better Trip"
        img = "https://images.pexels.com/photos/26754397/pexels-photo-26754397/free-photo-of-sunrise-praia-do-felix.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        author = "GameFix"
        price = {23}
        icon1 = {<IoIosCart className="text-3xl  cursor-pointer" />}
        icon2 = {<IoMdHeart className="text-3xl text-red-600 cursor-pointer" />}
      />
      <Cards
        id = {2}
        title = "The Better Trip"
        img = "https://images.pexels.com/photos/26754397/pexels-photo-26754397/free-photo-of-sunrise-praia-do-felix.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        author = "GameFix"
        price = {23}
        icon1 = {<IoIosCart className="text-3xl  cursor-pointer" />}
        icon2 = {<IoMdHeart className="text-3xl text-red-600 cursor-pointer" />}
      />
 
      </div>
    </div>
  );
};

export default PhotoGallery;
