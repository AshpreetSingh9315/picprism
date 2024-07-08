import {Link} from "react-router-dom";

const Login = () => {
  return (
    <>
       <div className="  flex flew-col justify-center items-end w-full sm:mt-28 mt-36 ">
      
      <div className="px-5 py-6 bg-white sm:w-[32vw] w-full flex flex-col justify-center items-center rounded-2xl shadow-lg">
        <p className="text-3xl font-semibold">Log In</p>

        <form action="" className="py-6 ">
          
          <div className="flex justify-center items-center flex-col py-3">
          <label htmlFor="mail" className="justify-self-start">Email Address: </label>
          <input type="text" placeholder="Enter Email" id="mail" className="outline-0 shadow-md  sm:w-[25vw] w-[300px] py-2 px-2 text-xl rounded-lg" />
          </div>

          <div className="flex justify-center items-center flex-col pt-3 pb-2">
          <label htmlFor="password" className="justify-self-start">Password: </label>
          <input type="text" placeholder="Enter Password" id="password" className="outline-0 shadow-md  sm:w-[25vw] w-[300px] py-2 px-2 text-xl rounded-lg" />
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
