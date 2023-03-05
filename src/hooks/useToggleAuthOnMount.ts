import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {toggleAuth} from "store/reducers/userReducer";

export function useToggleAuthOnMount() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(toggleAuth(false));
    }, [dispatch]);
}
