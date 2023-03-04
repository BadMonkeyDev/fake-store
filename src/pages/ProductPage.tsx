import React from 'react';
import {useSetTabOnMount} from "../hooks/useSetTabOnMount";
import {routes} from "../provider/router/routes";

const ProductPage = () => {
    useSetTabOnMount(routes.product.id)
    return (
        <div>
            ProductPage
        </div>
    );
};

export default ProductPage;