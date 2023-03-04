import {createSelector, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from "../store";

interface TabsState {
    value: number;

}

const initialState: TabsState = {
    value: 1
};

export const tabsSlice = createSlice({
    name: 'tabs',
    initialState,
    reducers: {
        setTab: (state, action: PayloadAction<number>) => {
            state.value = action.payload
        }
    },
});

export const selectTab = createSelector(
    (state: RootState) => state.tabs.value,
    (value: number) => value
);

export const {setTab} = tabsSlice.actions