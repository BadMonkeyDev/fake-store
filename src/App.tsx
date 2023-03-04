import React, {useEffect} from 'react';
import Header from "./widgets/Header";
import AppRouter from "./provider/router/component/AppRouter";
import Footer from "./widgets/Footer";
import {createGlobalStyle} from "styled-components";
import {useAppThunkDispatch} from "./store/store";
import {fetchCategories} from "./store/reducers/categoriesSlice";
import {fetchProducts} from "./store/reducers/productsSlice";

const GlobalStyle = createGlobalStyle`

`

const App = () => {
    const thunkDispatch = useAppThunkDispatch()
    useEffect(() => {
        thunkDispatch(fetchCategories())
        thunkDispatch(fetchProducts())
    }, [])

    return (
        <div className={'App'}>
            <Header/>
            <AppRouter />
            <Footer />
        </div>
    );
};

export default App;