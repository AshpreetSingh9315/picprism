import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Gsaptransition from "./Components/Gsaptransition";
import {Provider} from "react-redux";
import {store} from "../store/store";


export default function App() {
  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Gsaptransition />
        <Footer />
      </BrowserRouter>
      </Provider>
    </>
  );
}
