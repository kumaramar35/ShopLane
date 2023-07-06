import {createSlice} from '@reduxjs/toolkit';


const CartItemSlice = createSlice({
    name:"cartItems",
    initialState: [],
    reducers:{
        addCartItem(state,action){
          state.push(action.payload)
        },

        removeCartItem(state,action){
          return state.filter((item,index) => item.id !== action.payload.id)
        }
    }
})

export const {addCartItem,removeCartItem} =CartItemSlice.actions

export default CartItemSlice.reducer;