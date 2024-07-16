/* eslint-disable no-unused-vars */
import { Link , useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";


const Signup = () => {
  const navigate = useNavigate()
  const [username , setusername] = useState('');
  const [email , setemail] = useState('');
  const [password , setpassword] = useState('');
  const [accountType , setaccountType] = useState('');

 
  const dataSubmition = async (e)=>{
    e.preventDefault()
    try {
      const res = await axios.post(import.meta.env.VITE_API_URL + "/signup" , {
        username , password , email ,  accountType
        
      })
      const data = await res.data
      if(data.success){
        setusername("");
        setemail("");
        setpassword("");
        setaccountType("");
        toast.success(data.message);
        navigate("/login");
      }
    } catch (error) {
      toast.error(error.response.data.value)
    }
  }

  return (
    <div className="  flex flew-col justify-center items-end w-full sm:mt-28 mt-36 ">
      
      <div className="px-5 py-6 bg-white sm:w-[32vw] w-full flex flex-col justify-center items-center rounded-2xl shadow-lg">
        <p className="text-3xl font-semibold">Let&apos;s Connect!</p>

        <form action="" onSubmit={dataSubmition} className="py-6 ">
          <div className="flex justify-center items-center flex-col py-3">
          <label htmlFor="name" className="justify-self-start ">username: </label>
          <input type="text" value={username} onChange={(e)=>{
            setusername(e.target.value)
          }}   placeholder="Enter Name" id="name" className="outline-0 shadow-md sm:w-[25vw] w-[300px] py-2 px-2 text-xl rounded-lg"/>
          </div>

          <div className="flex justify-center items-center flex-col py-3">
          <label htmlFor="email" className="justify-self-start">Email Address: </label>
          <input type="text" value={email} onChange={(e)=>{
            setemail(e.target.value)
          }} placeholder="Enter Email" id="email" className="outline-0 shadow-md  sm:w-[25vw] w-[300px] py-2 px-2 text-xl rounded-lg" />
          </div>

          <div className="flex justify-center items-center flex-col py-3">
          <label htmlFor="password" className="justify-self-start">Password: </label>
          <input type="text" value={password} onChange={(e)=>{
            setpassword(e.target.value)
          }} placeholder="Enter Password" id="password" className="outline-0 shadow-md  sm:w-[25vw] w-[300px] py-2 px-2 text-xl rounded-lg" />
          </div>

          <div className="flex justify-center items-center flex-col py-3">
          <label htmlFor="account" className="justify-self-start">Select Your Account Type: </label>
          <select onChange={(e)=>{
            setaccountType(e.target.value)
          }} name="account" value={accountType} className="outline-0 shadow-md  sm:w-[25vw] w-[300px] py-2 px-2 text-xl rounded-lg" id="account">
            {/* <option value="Account Type" >Select Account Type</option> */}
            <option value="Buyer">Buyer</option>
            <option value="Seller">Seller</option>
          </select>
          </div>

          <div className="text-end py-3 cursor-pointer">
            <Link to={'/login'} className="text-sm">Log In With Your Account!</Link>
          </div>

          <button type="submit" className="w-full bg-black text-white rounded-md text-center py-2 ">Signup</button>

        </form>
      </div>

    </div>
  )
}

export default Signup
