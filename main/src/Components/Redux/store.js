import { configureStore } from "@reduxjs/toolkit";
import allcart from "../Redux/Slices/cartSlice.js";


export default configureStore({
  reducer: {
    allcart: allcart,
  },
});
