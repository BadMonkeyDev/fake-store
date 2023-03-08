import React from 'react';
import {Container} from "@mui/material";
import AuthForm from "widgets/AuthForm";
import {useDispatch} from "react-redux";
import {toggleAuth} from "../store/reducers/userReducer";
import {useLocation, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE} from "../utils/consts";
import {signInWithEmailAndPassword} from "firebase/auth";
import {firebaseAuth} from "../firebase";

const AuthenticationPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

    const proceedAuth = async (email: string, password: string) => {
        try {
            if (email && password) {
                const response = await signInWithEmailAndPassword(firebaseAuth, email, password)
                dispatch(toggleAuth(true))
                navigate('/')
            }
        } catch (error) {
            console.log((error as Error).message);
        }
    }

    if (location.state?.action === 'logout') {
        dispatch(toggleAuth(false));
    }


    return (
            <Container maxWidth={"xs"}>
                <AuthForm  isLogin={isLogin} onSubmit={proceedAuth} />
            </Container>
    );
};

export default AuthenticationPage;