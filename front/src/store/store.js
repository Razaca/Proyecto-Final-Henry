import { configureStore } from "@reduxjs/toolkit";
import { products } from "./api/productsQuery";
import { cartSlice } from "./slices/cartSlice";

export default configureStore({
  reducer: {
    products: products.reducer,
    cart: cartSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      products.middleware
    ),
});
