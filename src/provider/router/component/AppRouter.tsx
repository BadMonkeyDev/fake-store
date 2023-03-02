import React, {lazy, Suspense} from 'react';
import {Route, Routes} from "react-router-dom";

const MainPage = lazy(() => import('pages/MainPage'))
const PersonalPage = lazy(() => import('pages/PersonalPage'))

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path={'/'} element={<MainPage/>}/>
                <Route path={'/personal'} element={<PersonalPage/>}/>
            </Routes>
        </Suspense>
    );
};

export default AppRouter;