import React, {FC} from 'react';
import {Product} from "store/reducers/productsSlice";
import ProductCard from "../ui/ProductCard";
import Grid from '@mui/material/Grid';
import {useNavigate} from "react-router-dom";
import {PRODUCT_ROUTE} from "../utils/consts";

interface ProductListProps {
    products: Product[] | undefined
}

const ProductList: FC<ProductListProps> = ({products}) => {
    const navigate = useNavigate()

    return (
        <Grid container>
            {products && products.map(product =>
                <Grid key={product.id} item xs={6} sm={4} md={3} lg={2} onClick={() =>
                    navigate(`${PRODUCT_ROUTE}/${product.id}`)
                }>
                    <ProductCard product={product}/>
                </Grid>
            )}
        </Grid>
    );
};

export default ProductList;