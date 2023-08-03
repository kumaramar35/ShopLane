import { configureStore } from "@reduxjs/toolkit";
import CartItemSlice from "./slices/CartItemSlice";
import FavItemSlice from "./slices/FavItemSlice";
import persistReducer from "redux-persist/es/persistReducer";
import storage from 'redux-persist/lib/storage';
import { combineReducers } from "@reduxjs/toolkit";

// let persistConfig = {
//     key : "root",
//     storage,
// }
// let rootReducer = combineReducers({
//     items : CartItemSlice,
//     favItems : FavItemSlice, 
// });

// let persistedReducer = persistReducer(persistConfig,rootReducer)



// const store = configureStore({
//    reducer:persistedReducer
// })
const store = configureStore({
    reducer:{
        items:CartItemSlice,
        favItems:FavItemSlice
    }
});

export default store;