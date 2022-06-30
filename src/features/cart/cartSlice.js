import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  isCartOpen: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const existingCartItem = state.cartItems.find(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (existingCartItem)
        state.cartItems =  state.cartItems.map((cartItem) =>
          cartItem.id === action.payload.id
            ? {...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      state.cartItems = [...state.cartItems, { ...action.payload, quantity: 1 }];
      console.log(state.cartItems)
    },

    removeItemFromCart: (state, { payload }) => {
      const existingCartItem = state.cartItems.find(
        (cartItem) => cartItem.id === payload.id
      );
      if (existingCartItem.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== payload.id
        );
      }
      state.cartItems = state.cartItems.map((cartItem) =>
        cartItem.id === payload.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
    },

    clearItemFromCart: (state, { payload }) => {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== payload.id
      );
    },

    setIsCartOpen: (state, action) => {
      state.isCartOpen = action.payload;
    },
  },
});

const selectCartReducer = (state) => state.cart;

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  )
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);

export const {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
  setIsCartOpen,
} = cartSlice.actions;

export default cartSlice.reducer;
