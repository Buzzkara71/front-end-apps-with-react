import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Action to add a plant to the cart
    addToCart: (state, action) => {
      const item = action.payload;
    
      const existingItem = state.cartItems.find((i) => i.id === item.id);

      if (existingItem) {
      
        existingItem.quantity += 1;
      } else {
       
        state.cartItems.push({ ...item, quantity: 1 });
      }
    },

 
    incrementQuantity: (state, action) => {
      const id = action.payload;
      const item = state.cartItems.find((i) => i.id === id);
      if (item) {
        item.quantity += 1;
      }
    },

  
    decrementQuantity: (state, action) => {
      const id = action.payload;
      const item = state.cartItems.find((i) => i.id === id);
   
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      state.cartItems = state.cartItems.filter((i) => i.id !== id);
    },
  },
});


export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} = cartSlice.actions;



export const selectCartItems = (state) => state.cart.cartItems;

export const selectTotalCartItems = (state) =>
  state.cart.cartItems.reduce((total, item) => total + item.quantity, 0);


export const selectTotalCartCost = (state) =>
  state.cart.cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );


export default cartSlice.reducer;