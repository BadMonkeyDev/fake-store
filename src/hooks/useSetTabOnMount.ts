import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {setTab} from "store/reducers/tabsReducer";

export function useSetTabOnMount(tabId: number) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setTab(tabId));
    }, [dispatch]);
}