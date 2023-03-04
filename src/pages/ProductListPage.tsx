import React from 'react';
import {useSetTabOnMount} from "../hooks/useSetTabOnMount";
import {routes} from "../provider/router/routes";

const ProductListPage = () => {
    useSetTabOnMount(routes.products.id)
    return (
        <div>
            ProductList
        </div>
    );
};

export default ProductListPage;