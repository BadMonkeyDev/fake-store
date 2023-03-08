import {createSlice, createSelector, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from "../store";
import {Product} from "./productsSlice";

export interface CartItem {
    product: Product;
    quantity: number;
}

export type CartDataType = CartItem[]

interface CartState {
    data: CartDataType;
    loading: boolean;
    error: string | null;
}

const initialState: CartState = {
    data: [],
    loading: false,
    error: null,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCartItem(state, action: PayloadAction<CartItem>) {
            state.loading = true
            const isProductInCart = state.data[action.payload.product.id]
            if (isProductInCart){
                state.data = state.data.map(cartItem => {
                    if (cartItem.product.id === action.payload.product.id){
                        cartItem.quantity += action.payload.quantity || 1
                    }
                    return cartItem
                })
            } else {
                state.data[action.payload.product.id] = (action.payload)
            }
            state.loading = false
        },
        removeCartItem(state, action: PayloadAction<Product>) {
            // state.data = state.data.filter(cartItem => cartItem.product.id !== action.payload.id)
        },
        clearCart(state) {
            state.data = [];
        }
    },
});

export const selectCart = createSelector(
    (state: RootState) => state.cart.data,
    (productsInCart: CartDataType) => productsInCart
);

export const { addCartItem, removeCartItem, clearCart } = cartSlice.actions;