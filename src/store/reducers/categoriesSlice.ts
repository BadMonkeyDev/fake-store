import {createAsyncThunk, createSelector, createSlice} from '@reduxjs/toolkit';
import {fetchData, PATHS} from 'http/index';
import {RootState} from "../store";

export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
    return await fetchData(PATHS.CATEGORIES);
});

export type CategoriesDataType = string[] | null

export interface CategoriesState {
    data: CategoriesDataType;
    loading: boolean;
    error: string | null;
}

const initialState: CategoriesState = {
    data: [],
    loading: false,
    error: null,
};

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'Failed to fetch categories';
            });
    },
});

export const selectCategories = createSelector(
    (state: RootState) => state.categories.data,
    (categories: CategoriesDataType) => categories
);

export default categoriesSlice.reducer;
