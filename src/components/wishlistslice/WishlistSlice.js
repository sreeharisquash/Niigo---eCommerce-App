import { createSlice } from "@reduxjs/toolkit";

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlist: [],
  },
  reducers: {
    addToWishlist: (state, action) => {
      const wishlistItemIndex = state.wishlist.findIndex(
        (item) =>
          item.id === action.payload.id &&
          item.pageIdentifier === action.payload.pageIdentifier
      );

      if (wishlistItemIndex !== -1) {
        // If item is already in wishlist, remove it
        const newWishlist = [...state.wishlist];
        newWishlist.splice(wishlistItemIndex, 1);
        state.wishlist = newWishlist;
      } else {
        // If item is not in wishlist, add it
        state.wishlist.push(action.payload);
      }
    },
    removeFromWishlist: (state, action) => {
      const removefromWishlist = state.wishlist.filter(
        (item) => item.id !== action.payload.id
      );
      state.wishlist = removefromWishlist;
    },
  },
});

export const selectWishlistItems = (state) => state.wishlist.wishlist;

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
