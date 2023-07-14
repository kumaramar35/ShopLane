import { configureStore } from "@reduxjs/toolkit";
import CartItemSlice from "./slices/CartItemSlice";
import FavItemSlice from "./slices/FavItemSlice";

const store = configureStore({
    reducer:{
        items:CartItemSlice,
        favItems:FavItemSlice
    }
});

export default store;