import { createSlice } from '@reduxjs/toolkit';


const CartItemSlice = createSlice({
  name: "cartItems",
  initialState: {
    item:[],
    quantity:0
  },
  reducers: {
    addCartItem(state, action) {
      state.item.push(action.payload)
    },

    removeCartItem(state, action) {
     
     state.item= state.item.filter((item, index) => item.id !== action.payload.id)
      
    },
  }

})

export const { addCartItem, removeCartItem } = CartItemSlice.actions

export default CartItemSlice.reducer;