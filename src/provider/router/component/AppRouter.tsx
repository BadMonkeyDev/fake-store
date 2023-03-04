import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import styled from "styled-components";
import {routes} from "../routes";



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
    return (
        <StyledContent>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    {Object.values(routes).map(route =>
                        <Route key={route.id} path={route.path} element={route.pageComponent}/>
                    )}
                </Routes>
            </Suspense>
        </StyledContent>
    );
};

export default AppRouter;