import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import userReducer from '../features/user/userSlice';
import categoriesReducer from '../features/category/categorySlice'
import cartReducer from '../features/cart/cartSlice'

const reducers = {
    user: userReducer,
    category: categoriesReducer,
    cart: cartReducer
};

export const store = configureStore({
  reducer: reducers,
  middleware: [logger],
});
