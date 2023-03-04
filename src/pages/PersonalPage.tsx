import React from 'react';
import {useSetTabOnMount} from "../hooks/useSetTabOnMount";
import {routes} from "../provider/router/routes";

const PersonalPage = () => {
    useSetTabOnMount(routes.personal.id)
    return (
        <div>
            PersonalPage
        </div>
    );
};

export default PersonalPage;