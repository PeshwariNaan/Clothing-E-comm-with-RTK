import { createSlice } from '@reduxjs/toolkit';
//import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

const initialState = {
  categories: [],
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const { setCategories } = categorySlice.actions;

//export const selectCategories = (state) => state.category.categories;

export const selectCategoriesMap = (state) =>
  state.category.categories.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

export default categorySlice.reducer;
