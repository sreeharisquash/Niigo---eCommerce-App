import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../cartreducer/CartReducer";
import WishlistSlice from "../wishlistslice/WishlistSlice";

export default configureStore ({
    reducer: {
        cart: CartReducer,
        wishlist: WishlistSlice
    }
})