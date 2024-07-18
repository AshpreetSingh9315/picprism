/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import useUpload from "../../../Hooks/useUpload";
import { useSelector } from "react-redux";
import ProgressBar from "@ramonak/react-progress-bar";

const ImageAdd = () => {
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const author = useSelector((state)=>state.auth.author)

  const changeImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const onUploadProgress = (e)=>{
    setProgress(Math.round((e.loaded*100) / e.total))
  }

  const checkSubmit = async (e) => {
    e.preventDefault();

    try {
      const title = e.target.title.value;
      const price = e.target.title.price;

      if(!title || !price){
        return toast.error("Please Fill All the Fields");
      }
      if(title.trim === "" || price.trim === ""){
        return toast.error("Please Fill All the Fields");
      }

      const {public_id, secure_url} = await useUpload({image , onUploadProgress})
      if(!public_id || !secure_url) return toast.error("Iamge Not Uploaded");

      const res = await axios.post(import.meta.env.VITE_API_URL + "/post/create", {
        title,price,image:secure_url, public_id: public_id, author
      } ,{
        headers: {
          'Authorization' : 'Bearer ' + localStorage.getItem("access_token"),
        }
      })

      const data = await res.data;
      if(data.success == true){
        toast.success(data.message);
        e.target.reset();
        setImage(null);
        setProgress(0);
      }

    } catch (error) {
      return toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <div className="sm:my-2 sm:mx-9 my-2 mx-6 sm:w-[26vw] w-[90vw] rounded-xl bg-white">
        <div className="py-3 px-5 shadow-lg ">
          <h1 className="font-bold text-[20px] py-2 ">Add New Product</h1>
          <form onSubmit={checkSubmit}>
            <img
              src={`${
                image
                  ? URL.createObjectURL(image)
                  : "https://dummyimage.com/600x350/d4d4d4/000000"
              }`}
              className="rounded-lg"
              alt="dummy Images"
            />
             
              {
                progress > 0 && 
             <ProgressBar completed={progress} bgColor="black" transitionDuration="ease-in-out"/>
              }
           

            <div className="w-full py-2 px-1 outline-1">
              <label htmlFor="img" className="text-[17px] font-bold ">
                Image
              </label>
              <input
                onChange={changeImage}
                type="file"
                id="img"
                name="img"
                className="w-full outline-2 py-2 outline-none border-b-2 border-gray-300 px-2"
              />
            </div>

            <div className="w-full py-1 px-1 outline-1">
              <label htmlFor="title" className="text-[17px] font-bold ">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="w-full outline-2 py-1 px-2 outline-none border-b-2 border-gray-300"
                placeholder="Flying Jatt"
              />
            </div>

            <div className="w-full py-2 px-1 outline-1">
              <label htmlFor="price" className="text-[17px] font-bold ">
                Price
              </label>
              <input
                type="text"
                id="price"
                name="price"
                className="w-full  py-1 px-2 outline-none border-b-2 border-gray-300"
                placeholder="45"
              />
            </div>

            <button
              type="submit"
              className="py-2  my-2 px-4 bg-black text-gray-100 rounded-lg"
            >
              Add Product
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ImageAdd;
