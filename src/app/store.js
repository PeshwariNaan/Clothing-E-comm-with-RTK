import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import userReducer from '../features/user/userSlice';

const reducers = {
    user: userReducer,
};

export const store = configureStore({
  reducers,
  middleware: [logger],
});
