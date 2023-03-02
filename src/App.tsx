import React, {lazy} from 'react';
import {Route, Routes} from 'react-router-dom';
import Header from "./components/widgets/Header";

const MainPage = lazy(() => import('./components/pages/MainPage'))
const PersonalPage = lazy(() => import('./components/pages/PersonalPage'))

const App = () => {
    return (
        <div className={'App'}>
            <Header />
            <Routes>
                <Route path={'/'} element={<MainPage />}/>
                <Route path={'/personal'} element={<PersonalPage />}/>
            </Routes>
        </div>
    );
};

export default App;