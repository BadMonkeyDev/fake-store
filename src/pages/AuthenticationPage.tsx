import React from 'react';
import {useSetTabOnMount} from "../hooks/useSetTabOnMount";
import {routes} from "../provider/router/routes";
import {Container} from "@mui/material";
import AuthForm from "widgets/AuthForm";
import {useToggleAuthOnMount} from "../hooks/useToggleAuthOnMount";


const AuthenticationPage = () => {
    useSetTabOnMount(routes.auth.id)

    useToggleAuthOnMount()
    return (
            <Container maxWidth={"xs"}>
                <AuthForm />
            </Container>
    );
};

export default AuthenticationPage;