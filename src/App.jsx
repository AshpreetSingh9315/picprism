import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Gsaptransition from "./Components/Gsaptransition";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Gsaptransition />
        <Footer />
      </BrowserRouter>
    </>
  );
}
