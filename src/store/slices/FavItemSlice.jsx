import { createSlice } from "@reduxjs/toolkit";

const FavItemSlice = createSlice({
    name:"favItems",
    initialState:[],
    reducers:{
        addFavItem(state,action){
            state.push(action.payload)
        },
        removeFavItem(state,action){
            return state.filter((favItem,index) => favItem.id !==  action.payload.id)
        }
    }
})

export const {addFavItem,removeFavItem} = FavItemSlice.actions;

export default FavItemSlice.reducer;