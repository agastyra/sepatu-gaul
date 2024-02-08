import { configureStore } from "@reduxjs/toolkit";
import cartSlicer from "./slices/cartSlicer";

const store = configureStore({
  reducer: {
    cart: cartSlicer,
  },
});

store.subscribe(() => {
  console.log("on changed store:", store.getState());
});

export default store;
