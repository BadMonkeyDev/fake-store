import React from 'react';
import {useSetTabOnMount} from "hooks/useSetTabOnMount";
import {routes} from "provider/router/routes";
import {useSelector} from "react-redux";
import {selectProducts} from "store/reducers/productsSlice";
import ProductList from "widgets/ProductList";
import {Typography} from "@mui/material";
import DropDown from "../ui/DropDown";




const ProductListPage = () => {
    useSetTabOnMount(routes.products.id)
    const products = useSelector(selectProducts)
    return (
        <>
            <Typography variant="h4" component="h2" sx={{alignSelf: "flex-start", marginBottom: '24px'}}>
                Products
            </Typography>
            <DropDown />
            <ProductList products={products} />
        </>
    );
};

export default ProductListPage;