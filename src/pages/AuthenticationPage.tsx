import React from 'react';
import {Container} from "@mui/material";
import AuthForm from "widgets/AuthForm";
import {useDispatch, useSelector} from "react-redux";
import {selectUser, toggleAuth} from "../store/reducers/userReducer";


const AuthenticationPage = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser)
    if (user.isAuth) {
        dispatch(toggleAuth(false));
    }
    return (
            <Container maxWidth={"xs"}>
                <AuthForm />
            </Container>
    );
};

export default AuthenticationPage;