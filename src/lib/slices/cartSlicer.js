import { createSlice } from "@reduxjs/toolkit";

const cartSlicer = createSlice({
  name: "cart",
  initialState: JSON.parse(localStorage.getItem("cart")) || [],
  reducers: {
    addToCart(state, action) {
      if (state.find((product) => product.id == action.payload.id)) {
        return state.map((product) =>
          product.id === action.payload.id
            ? { ...product, qty: product.qty + action.payload.qty }
            : product
        );
      } else {
        state.push(action.payload);
      }
    },
  },
});

export const { addToCart } = cartSlicer.actions;
export default cartSlicer.reducer;
