import { BrowserRouter , Routes , Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Seller from "./Pages/Seller";
import BuyerDashboard from "./Pages/BuyerDashboard";
import SellerDashboard  from "./Pages/SellerDashboard";
import Navbar from "./Components/Navbar";

export default function App() {
  return (
  <>
  <BrowserRouter>
  <Navbar />
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/seller" element={<Seller />} />
      <Route path="/seller/profile" element={<SellerDashboard />} />
      <Route path="/buyer/profile" element={<BuyerDashboard />} />

    </Routes>
  </BrowserRouter>
  </>
  )
} 