import React, {useEffect} from 'react';
import Header from "./widgets/Header";
import AppRouter from "./provider/router/component/AppRouter";
import Footer from "./widgets/Footer";
import styled, {createGlobalStyle} from "styled-components";
import {useAppThunkDispatch} from "./store/store";
import {fetchCategories} from "./store/reducers/categoriesSlice";
import {fetchProducts} from "./store/reducers/productsSlice";

const GlobalStyle = createGlobalStyle`
  .App {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    position: relative;
  }
`

const App = () => {
    const thunkDispatch = useAppThunkDispatch()
    useEffect(() => {
        thunkDispatch(fetchCategories())
        thunkDispatch(fetchProducts())
    }, [])

    return (
        <>
            <div className={'App'}>
                <Header/>
                <AppRouter/>
                <Footer/>
            </div>
            <GlobalStyle/>
        </>
    );
};

export default App;