import {createAsyncThunk, createSelector, createSlice} from '@reduxjs/toolkit';
import {fetchData, PATHS} from 'http/index';
import {RootState} from "../store";

export type CategoriesType = "electronics" | "jewelery" | "men's clothing" | "women's clothing"

export type CategoriesDataType = CategoriesType[] | null

export interface CategoriesState {
    data: CategoriesDataType;
    loading: boolean;
    error: string | null;
}

const initialState: CategoriesState = {
    data: null,
    loading: false,
    error: null,
};


export const fetchCategories = createAsyncThunk(
    'categories/fetchCategories',
    async () => {
        const response = await fetchData(PATHS.CATEGORIES)
        return  response
    }
)

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
            })
    },
});


export const selectCategories = createSelector(
    (state: RootState) => state.categories.data,
    (categories: CategoriesDataType) => categories
);