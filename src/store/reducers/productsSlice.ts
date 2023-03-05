import {createSlice, createAsyncThunk, createSelector} from '@reduxjs/toolkit';
import { fetchData, PATHS } from 'http/index';
import {RootState} from "../store";

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await fetchData(PATHS.PRODUCTS);
    return response;
});

export interface IRating {
    "rate": number,
    "count":number
}

export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    "rating": IRating
}

export type ProductsDataType = Product[] | null;

interface ProductsState {
    data: ProductsDataType;
    loading: boolean;
    error: string | null;
}

const initialState: ProductsState = {
    data: [],
    loading: false,
    error: null,
};

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'Failed to fetch products';
            });
    },
});

export const selectProducts = createSelector(
    (state: RootState) => state.products.data,
    (products: ProductsDataType) => products
);
