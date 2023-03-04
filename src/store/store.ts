import {Action, configureStore, ThunkDispatch} from "@reduxjs/toolkit";
import {LocalStorageWorker} from "utils/LocalStorageWorker";
import {categoriesSlice} from "store/reducers/categoriesSlice";
import {productsSlice} from "store/reducers/productsSlice";
import {userSlice} from "./reducers/userReducer";
import {useDispatch} from "react-redux";
import {tabsSlice} from "./reducers/tabsReducer";

const store = configureStore({
    reducer: {
        categories: categoriesSlice.reducer,
        products: productsSlice.reducer,
        user: userSlice.reducer,
        tabs: tabsSlice.reducer,
    }
});
// Define the root state type
export type RootState = ReturnType<typeof store.getState>;

// subscribe to the store and save the categories and products to local storage on changes
store.subscribe(() => {
    const state = store.getState();

    LocalStorageWorker.setItem("categories", state.categories.data);
    LocalStorageWorker.setItem("products", state.products.data);

});

export type ThunkAppDispatch = ThunkDispatch<RootState, void, Action>;
export const useAppThunkDispatch = () => useDispatch<ThunkAppDispatch>();

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export default store;