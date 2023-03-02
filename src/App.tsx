import React from 'react';
import Header from "./widgets/Header";
import AppRouter from "./provider/router/component/AppRouter";
import Footer from "./widgets/Footer";

const App = () => {
    return (
        <div className={'App'}>
            <Header/>
            <AppRouter />
            <Footer />
        </div>
    );
};

export default App;