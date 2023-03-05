import {createSelector, createSlice} from '@reduxjs/toolkit';
import {RootState} from "../store";

interface IUser{
    isAuth: boolean;
    info: string[]
}

interface UserState {
    data: IUser;
    loading: boolean;
    error: string | null;
}

const initialState: UserState = {
    data: {isAuth: false, info: []},
    loading: false,
    error: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        toggleAuth: (state, action) => {
            state.data.isAuth = action.payload
        }
    },
});

export const selectUser = createSelector(
    (state: RootState) => state.user.data,
    (user: IUser) => user
);

export const {toggleAuth} = userSlice.actions

export default userSlice.reducer;
