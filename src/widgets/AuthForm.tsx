import React, {useRef, useState} from 'react';
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {signInWithEmailAndPassword} from "firebase/auth";
import {firebaseAuth} from "../firebase";
import {toggleAuth} from "store/reducers/userReducer";
import {useNavigate} from "react-router-dom";
import TestInput from "ui/TestInput";
import {Box, Button, Checkbox, FormControlLabel} from "@mui/material";
import Link from "@mui/material/Link";

const StyledForm = styled.form`
  margin-top: 8px;
`

enum AuthAction {
    SIGN_IN = "sign_in",
    SIGN_UP = "sign_up"
}

const AuthForm = () => {
    const [authType, setAuthType] = useState<AuthAction>(AuthAction.SIGN_IN)

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

    const toggleAuthType = () => {
        setAuthType(prevState => prevState === AuthAction.SIGN_IN ? AuthAction.SIGN_UP : AuthAction.SIGN_IN)
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
                {authType === AuthAction.SIGN_IN ? `SIGN IN` : `SIGN UP`}
            </Button>
            <Box sx={{cursor: "pointer", display: "flex", justifyContent: "flex-end", userSelect: "none"}}>
                <Link onClick={toggleAuthType}>
                    {authType === AuthAction.SIGN_IN ? `Don't have an account? Sign Up` : `Already have an account? Sign In`}
                </Link>
            </Box>


        </StyledForm>
    );
};

export default AuthForm;