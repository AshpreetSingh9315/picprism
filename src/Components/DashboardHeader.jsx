import { useSelector, useDispatch } from "react-redux";
import { RiMenu3Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { toggleSidebar } from "../../store/slice/navSlice";

const DashboardHeader = () => {
  const author = useSelector((state) => state.auth.author);
  const role = useSelector((state) => state.auth.role);
  const sidebar = useSelector((state) => state.nav.sidebar);

  const dispatch = useDispatch();
  // const author = localStorage.getItem('author')
  return (
    <>
      
        <div className="flex flex-row justify-between sm:w-[80vw] w-full">

        <div className="flex flex-col sm:my-4 sm:mx-9 my-4 mx-5 sm:static leading-5">
          <div className=" text-2xl sm:text-3xl font-bold">
            Hello {author.charAt(0).toUpperCase() + author.slice(1)},
          </div>
          <div>Welcome to your {role} dashboard</div>
        </div>

        <RiMenu3Fill className={`text-2xl sm:mx-6 sm:my-6  my-6 mx-5 ${sidebar === true ? 'hidden': 'block sm:hidden'}`} onClick={()=> dispatch(toggleSidebar())}  />
        <IoClose className={`text-2xl sm:mx-6 sm:my-6  my-6 mx-5 ${sidebar === true ? 'block sm:hidden': ' hidden'}`} onClick={()=> dispatch(toggleSidebar())} />
        </div>
    </>
  );
};

export default DashboardHeader;
