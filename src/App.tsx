import React from 'react';
import Header from "./widgets/Header";
import AppRouter from "./provider/router/component/AppRouter";

const App = () => {
    return (
        <div className={'App'}>
            <Header/>
            <AppRouter />
        </div>
    );
};

export default App;