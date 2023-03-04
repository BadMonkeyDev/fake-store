import React from 'react';
import {useToggleAuthOnMount} from "../hooks/useToggleAuthOnMount";
import {useSetTabOnMount} from "../hooks/useSetTabOnMount";
import {routes} from "../provider/router/routes";

const AuthenticationPage = () => {
    useToggleAuthOnMount()
    useSetTabOnMount(routes.auth.id)
    return (
        <div>
            
        </div>
    );
};

export default AuthenticationPage;