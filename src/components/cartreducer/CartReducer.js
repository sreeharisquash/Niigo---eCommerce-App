import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";


export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity += 1;
      } else {
        state.cart.push(
            {...action.payload, quantity:1}
        );
      }
    },
    removeFromCart: (state, action) => {
      const removeFromCart = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      state.cart = removeFromCart;
    },
    incrementQuantity: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {

      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart && itemInCart.quantity === 1) {
        const removeFromCart = state.cart.filter(
          (item) => item.id !== action.payload.id
        );
        state.cart = removeFromCart;
      } else if (itemInCart) {
        itemInCart.quantity -= 1;
      }
    },
    removeAllItems: (state) => {
        state.cart = [];
      },
    
  },
});

export const selectCartItems = (state) => state.cart.cart;

export const selectTotalAmount = (state) => {
  const cartItems = selectCartItems(state);
  return cartItems.reduce(
    (total, item) => total + item.productprice * item.quantity,
    0
  );
};

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  removeAllItems
} = cartSlice.actions;
export default cartSlice.reducer;
