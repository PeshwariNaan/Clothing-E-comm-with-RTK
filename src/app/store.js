import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import userReducer from '../features/user/userSlice';
import categoriesReducer from '../features/category/categorySlice'

const reducers = {
    user: userReducer,
    category: categoriesReducer
};

export const store = configureStore({
  reducer: reducers,
  middleware: [logger],
});
