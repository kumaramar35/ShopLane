import { configureStore } from "@reduxjs/toolkit";
import CartItemSlice from "./slices/CartItemSlice";
import FavItemSlice from "./slices/FavItemSlice";
import{ persistReducer} from 'redux-persist'
import { combineReducers } from "@reduxjs/toolkit";

import  storage  from "redux-persist/lib/storage";

let persistConfig = {
    key : "root",
    storage,
}

let rootReducer = combineReducers({
    items:CartItemSlice,
    favItems:FavItemSlice
, 
});
let persistedReducer = persistReducer(persistConfig,rootReducer)

const store = configureStore({
    reducer:persistedReducer
 })
// const store = configureStore({
//     reducer:{
//         items:CartItemSlice,
//         favItems:FavItemSlice
//     }
// });

export default store;