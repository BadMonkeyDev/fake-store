import React, {useRef} from 'react';
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import TestInput from "ui/TestInput";
import {Box, Button, Checkbox, FormControlLabel} from "@mui/material";
import Link from "@mui/material/Link";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";

const StyledForm = styled.form`
  margin-top: 8px;
`

interface AuthFormProps {
    isLogin: boolean;
    onSubmit: (email: string, password: string) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({isLogin, onSubmit}) => {
    const navigate = useNavigate();

    const emailRef = useRef<HTMLInputElement | null>(null)
    const passwordRef = useRef<HTMLInputElement | null>(null)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const email = emailRef.current?.value || ''
        const password = passwordRef.current?.value || ''
        // console.log(emailRef.current?.value + ' | ' + passwordRef.current?.value)
        onSubmit(email, password)
    }

    const toggleAuthMode = (isLogin: boolean) => {
        navigate(isLogin ? REGISTRATION_ROUTE : LOGIN_ROUTE)
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
                <Link
                    onClick={() => toggleAuthMode(isLogin)}>
                    {isLogin
                        ? "Don't have an account? Sign Up"
                        : "Already have an account? Sign In"}
                </Link>

            </Box>


        </StyledForm>
    );
};

export default AuthForm;