import React from 'react';
import {useSetTabOnMount} from "hooks/useSetTabOnMount";
import {routes} from "provider/router/routes";
import {useSelector} from "react-redux";
import {selectProducts} from "store/reducers/productsSlice";
import ProductList from "widgets/ProductList";




const ProductListPage = () => {
    useSetTabOnMount(routes.products.id)
    const products = useSelector(selectProducts)
    return (
        <>
            <ProductList products={products} />
        </>
    );
};

export default ProductListPage;