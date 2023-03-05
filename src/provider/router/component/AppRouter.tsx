import React, {Suspense, useState} from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import styled from "styled-components";
import {authRoutes, publicRoutes, routes} from "../routes";
import {HOME_ROUTE} from "../../../utils/consts";
import {useSelector} from "react-redux";
import {selectUser} from "../../../store/reducers/userReducer";

const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 96px 24px 24px 24px;
    width: 100%;
    flex: 1;
    background-color: aliceblue;
`

const AppRouter = () => {
    const user = useSelector(selectUser)
    return (
        <StyledContent>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    {user.isAuth && authRoutes.map(({path, Component}) =>
                        <Route key={path} path={path} element={<Component />} />
                    )}
                    {publicRoutes.map(({path, Component}) =>
                        <Route key={path} path={path} element={<Component />} />
                    )}
                    <Route path='*' element={<Navigate to={HOME_ROUTE} replace={true} />} />
                </Routes>
            </Suspense>
        </StyledContent>
    );
};

export default AppRouter;