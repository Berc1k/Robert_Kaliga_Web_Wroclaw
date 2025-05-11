import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CartProduct, CartState } from "../types/interfaces";

const initialState: CartState = {
  cartItems: [],
  totalAmount: 0,
};

const calculateTotalAmount = (cartItems: CartProduct[]) =>
  cartItems.reduce(
    (total, item) =>
      total +
      (item.price.main + (item.price.fractional ?? 0) / 100) *
        (item.quantity || 1),
    0
  );

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartProduct>) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.cartItems.push(action.payload);
      }
      state.totalAmount = calculateTotalAmount(state.cartItems);
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      state.totalAmount = calculateTotalAmount(state.cartItems);
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    increaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
      state.totalAmount = calculateTotalAmount(state.cartItems);
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
      state.totalAmount = calculateTotalAmount(state.cartItems);
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalAmount = 0;
      localStorage.removeItem("cart");
    },
    loadCartFromLocalStorage: (state) => {
      try {
        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
          state.cartItems = JSON.parse(savedCart);
          state.totalAmount = calculateTotalAmount(state.cartItems);
        }
      } catch (error) {
        console.error("Failed to load cart from localStorage:", error);
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
  loadCartFromLocalStorage,
} = cartSlice.actions;

export default cartSlice.reducer;
