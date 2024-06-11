import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  quantity: 0,
  totalPrice: 0,
  count: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existedItem = state.cart.find((exist) => exist.id === item.id);

      if (existedItem) {
        existedItem.quantity += 1;
      } else {
        state.cart.push({ ...item, quantity: 1 });
        state.count += 1;
      }

      state.quantity += 1;
      state.totalPrice += item.caloriesPerServing;
    },
    removeFromCart: (state, action) => {
      const { itemId } = action.payload;
      const itemIndex = state.cart.findIndex((item) => item.id === itemId);

      if (itemIndex !== -1) {
        const itemToRemove = state.cart[itemIndex];
        state.quantity -= itemToRemove.quantity;
        state.totalPrice -=
          itemToRemove.caloriesPerServing * itemToRemove.quantity;
        state.cart.splice(itemIndex, 1);
        state.count -= 1;
      }
    },
    updateQuantity: (state, action) => {
      const { itemId, newQuantity } = action.payload;
      const itemToUpdate = state.cart.find((item) => item.id === itemId);

      if (itemToUpdate && newQuantity >= 0) {
        state.quantity += newQuantity - itemToUpdate.quantity;
        state.totalPrice +=
          (newQuantity - itemToUpdate.quantity) *
          itemToUpdate.caloriesPerServing;
        itemToUpdate.quantity = newQuantity;
      }
    },
    updateCart: (state) => {
      state.cart = [];
      state.count = 0;
      state.quantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, updateCart } =
  cartSlice.actions;
export default cartSlice.reducer;
