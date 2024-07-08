import { Routes, Route, useLocation } from "react-router-dom";
import Signup  from "./../Pages/Signup";
import Home from './../Pages/Home';
import Login from './../Pages/Login';
import BuyerDashboard from './../Pages/BuyerDashboard';
import SellerDashboard from './../Pages/SellerDashboard';
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Toaster , toast } from "react-hot-toast";

const Gsaptransition = () => {

    const nodeRef = useRef(null);
    const location = useLocation();
    useEffect(()=>{
        if(nodeRef.current){
            gsap.fromTo(nodeRef.current, {opacity: 0} , {opacity: 1, duration: 0.56});
            toast.success(location.pathname)
        }
    },[location])
     
  return (
    <>
    <div ref={nodeRef}  id="target">
        <Toaster />
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/seller/profile" element={<SellerDashboard />} />
        <Route path="/buyer/profile" element={<BuyerDashboard />} />
      </Routes>
      </div>
    </>
  );
};

export default Gsaptransition;
