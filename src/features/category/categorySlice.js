import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';


const initialState = {
    categoriesMap: [],

}

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setCategoriesMap: (state, action) => {
            state.categoriesMap = action.payload
        }
    }
})

export const { setCategoriesMap } = categorySlice.actions

export const selectCategoriesMap = (state) => state.category.categoriesMap

export default categorySlice.reducer