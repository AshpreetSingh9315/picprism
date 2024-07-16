import {Link} from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import {login} from "../../store/slice/auth"

const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const checkLogin = async (e)=>{
    e.preventDefault();
    try{
      const res = await axios.post(import.meta.env.VITE_API_URL + '/login' , {
        email,password
      })
      const data = await res.data;
      toast.success(data.message);
      dispatch(login(data));
      navigate(`/${data.role}/profile`)
    }
    catch(error){
      toast.error(error.response.data.message);
    }
  }

  return (
    <>
       <div className="  flex flew-col justify-center items-end w-full sm:mt-28 mt-36 ">
      
      <div className="px-5 py-6 bg-white sm:w-[32vw] w-full flex flex-col justify-center items-center rounded-2xl shadow-lg">
        <p className="text-3xl font-semibold">Log In</p>

        <form onSubmit={checkLogin} className="py-6 ">
          
          <div className="flex justify-center items-center flex-col py-3">
          <label htmlFor="mail" className="justify-self-start">Email Address: </label>
          <input type="text" value={email} onChange={(e)=>{
            setemail(e.target.value)
          }} placeholder="Enter Email" id="mail" className="outline-0 shadow-md  sm:w-[25vw] w-[300px] py-2 px-2 text-xl rounded-lg" />
          </div>

          <div className="flex justify-center items-center flex-col pt-3 pb-2">
          <label htmlFor="password" className="justify-self-start">Password: </label>
          <input type="text" value={password} onChange={(e)=>{
            setpassword(e.target.value);
          }} placeholder="Enter Password" id="password" className="outline-0 shadow-md  sm:w-[25vw] w-[300px] py-2 px-2 text-xl rounded-lg" />
          </div>

          <Link className="text-sm text-gray-500 justify-self-start pl-3 pt-3">Forget Password?</Link>

          <div className="text-end py-3 cursor-pointer">
            <Link to={'/signup'} className="text-sm">New user ? Signup!</Link>
          </div>

          <button type="submit" className="w-full bg-black text-white rounded-md text-center py-2 ">Login</button>

        </form>
      </div>

    </div>
    </>
  )
}

export default Login
