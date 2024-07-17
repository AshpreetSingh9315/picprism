import { IoMdPhotos } from "react-icons/io";
import { MdAnalytics } from "react-icons/md";
import { IoReorderFourSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setTab } from "../../store/slice/navSlice";
import { logout } from "../../store/slice/auth";
import { useNavigate } from "react-router-dom";

function DashboardSidebar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const sidebar = useSelector((state) => state.nav.sidebar);
  const tab = useSelector((state) => state.nav.tab);
  const author = localStorage.getItem("author");

  return (
    <>
      <div className={`fixed z-10 ${!sidebar ? "-translate-x-[500px] sm:translate-x-0" : "translate-x-0"} min-h-screen w-fit shadow-lg py-6 px-5 flex flex-col gap-4 items-start text-md sm:text-lg`}>
        <div className="text-lg text-bold text-white bg-black rounded-full ml-3 py-3 px-5 justify-start">
          {author && author.charAt(0).toUpperCase()}
        </div>
        <div className="h-[85vh] w-fit flex justify-between items-start flex-col">
          <div className="flex justify-between items-start flex-col gap-2">
            <div
              className={`flex justify-center w-full items-center text-md sm:text-lg font-semibold hover:bg-black hover:text-white transition-all ease-linear duration-150 transform py-2 px-4 rounded-lg cursor-pointer ${tab === "photos-management" ? "bg-black text-white" : ""}`}
              onClick={() => dispatch(setTab("photos-management"))}
            >
              <IoMdPhotos className="mr-2" /> {pathname === '/seller/profile' ? "Photo Management" : "Photo Purchased"}
            </div>
            <div
              className={`flex justify-start w-full items-center text-md sm:text-lg font-semibold hover:bg-black hover:text-white transition-all ease-linear duration-150 transform py-2 px-4 rounded-lg cursor-pointer ${tab === "analytics" ? "bg-black text-white" : ""}`}
              onClick={() => dispatch(setTab("analytics"))}
            >
              <MdAnalytics className="mr-2" /> Analytics
            </div>
            <div
              className={`flex justify-start w-full items-center text-md sm:text-lg font-semibold hover:bg-black hover:text-white transition-all ease-linear duration-150 transform py-2 px-4 rounded-lg cursor-pointer ${tab === "orders" ? "bg-black text-white" : ""}`}
              onClick={() => dispatch(setTab("orders"))}
            >
              <IoReorderFourSharp className="mr-2" /> Orders
            </div>
            <div
              className={`flex justify-start w-full items-center text-md sm:text-lg font-semibold hover:bg-black hover:text-white transition-all ease-linear duration-150 transform py-2 px-4 rounded-lg cursor-pointer ${tab === "favourites" ? "bg-black text-white" : ""}`}
              onClick={() => dispatch(setTab("favourites"))}
            >
              <FaHeart className="mr-2" /> Favourites
            </div>
            <div
              className={`flex justify-start w-full items-center text-md sm:text-lg font-semibold hover:bg-black hover:text-white transition-all ease-linear duration-150 transform py-2 px-4 rounded-lg cursor-pointer ${tab === "home" ? "bg-black text-white" : ""}`}
              onClick={() => dispatch(setTab("home"))}
            >
              <FaHome className="mr-2" /> Home
            </div>
          </div>
          <div>
            <div
              className="flex justify-center w-full items-center text-md sm:text-lg font-semibold hover:bg-black hover:text-white transition-all ease-linear duration-150 transform py-2 px-4 rounded-lg cursor-pointer"
              onClick={() => {
                dispatch(logout());
                navigate('/login');
              }}
            >
              <IoMdPhotos className="mr-2" /> LogOut
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardSidebar;
