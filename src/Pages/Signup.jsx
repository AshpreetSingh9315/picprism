import { Link } from "react-router-dom"

const Seller = () => {
  return (
    <div className="  flex flew-col justify-center items-end w-full sm:mt-28 mt-36 ">
      
      <div className="px-5 py-6 bg-white sm:w-[32vw] w-full flex flex-col justify-center items-center rounded-2xl shadow-lg">
        <p className="text-3xl font-semibold">Let&apos;s Connect!</p>

        <form action="" className="py-6 ">
          <div className="flex justify-center items-center flex-col py-3">
          <label htmlFor="name" className="justify-self-start ">Username: </label>
          <input type="text" placeholder="Enter Name" id="name" className="outline-0 shadow-md sm:w-[25vw] w-[300px] py-2 px-2 text-xl rounded-lg"/>
          </div>

          <div className="flex justify-center items-center flex-col py-3">
          <label htmlFor="email" className="justify-self-start">Email Address: </label>
          <input type="text" placeholder="Enter Email" id="email" className="outline-0 shadow-md  sm:w-[25vw] w-[300px] py-2 px-2 text-xl rounded-lg" />
          </div>

          <div className="flex justify-center items-center flex-col py-3">
          <label htmlFor="password" className="justify-self-start">Password: </label>
          <input type="text" placeholder="Enter Password" id="password" className="outline-0 shadow-md  sm:w-[25vw] w-[300px] py-2 px-2 text-xl rounded-lg" />
          </div>

          <div className="flex justify-center items-center flex-col py-3">
          <label htmlFor="account" className="justify-self-start">Select Your Account Type: </label>
          <select name="account" className="outline-0 shadow-md  sm:w-[25vw] w-[300px] py-2 px-2 text-xl rounded-lg" id="account">
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

export default Seller
