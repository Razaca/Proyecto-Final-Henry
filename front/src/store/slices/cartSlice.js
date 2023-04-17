import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",

  initialState: {
    cart: [],
  },

  reducers: {
    setCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
  },
});

export const { setCart } = cartSlice.actions;
