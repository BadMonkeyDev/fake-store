import React from 'react';
import {useSetTabOnMount} from "../hooks/useSetTabOnMount";
import {routes} from "../provider/router/routes";

const OrderPage = () => {
    useSetTabOnMount(routes.cart.id)
    return (
        <div>
            Cart
        </div>
    );
};

export default OrderPage;