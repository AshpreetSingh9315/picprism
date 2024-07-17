 import {configureStore} from "@reduxjs/toolkit";
 import authSlice from "./slice/auth";
import navSlice from "./slice/navSlice";

 export const store = configureStore({
    reducer:{
    auth : authSlice,
    nav: navSlice,
    }
 })