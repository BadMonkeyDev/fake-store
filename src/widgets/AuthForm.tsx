import React, {useRef} from 'react';
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {signInWithEmailAndPassword} from "firebase/auth";
import {firebaseAuth} from "../firebase";
import {toggleAuth} from "store/reducers/userReducer";
import {useLocation, useNavigate} from "react-router-dom";
import TestInput from "ui/TestInput";
import {Box, Button, Checkbox, FormControlLabel} from "@mui/material";
import Link from "@mui/material/Link";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";

const StyledForm = styled.form`
  margin-top: 8px;
`

const AuthForm = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

    const emailRef = useRef<HTMLInputElement | null>(null)
    const passwordRef = useRef<HTMLInputElement | null>(null)

    const dispatch = useDispatch()

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const email = emailRef.current?.value
        const password = passwordRef.current?.value
        // console.log(emailRef.current?.value + ' | ' + passwordRef.current?.value)

        try {
            if (email && password) {
                await signInWithEmailAndPassword(firebaseAuth, email, password)
                dispatch(toggleAuth(true))
                navigate('/')
            }
        } catch (error) {
            console.log((error as Error).message);
        }
    }

    return (
        <StyledForm onSubmit={handleSubmit}>
            <TestInput id={'email'} label={'Email'} type={'email'} ref={emailRef}/>
            <TestInput id={'password'} label={'Password'} type={'password'} ref={passwordRef}/>
            <FormControlLabel control={<Checkbox/>} label="Remember me"/>
            <Button
                sx={{marginTop: "24px", marginBottom: "16px"}}
                type="submit"
                variant="contained"
                fullWidth
            >
                {isLogin ? `SIGN IN` : `SIGN UP`}
            </Button>
            <Box sx={{cursor: "pointer", display: "flex", justifyContent: "flex-end", userSelect: "none"}}>
                {isLogin
                    ? <Link href={REGISTRATION_ROUTE}>Don't have an account? Sign Up</Link>
                    : <Link href={LOGIN_ROUTE}>Already have an account? Sign In</Link>
                }
            </Box>


        </StyledForm>
    );
};

export default AuthForm;