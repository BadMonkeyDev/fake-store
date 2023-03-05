import React, {FC} from 'react';
import {ProductsDataType} from "store/reducers/productsSlice";
import ProductCard from "../ui/ProductCard";
import Grid from '@mui/material/Grid';

interface ProductListProps {
    products: ProductsDataType
}

const ProductList: FC<ProductListProps> = ({products}) => {
    return (
        <Grid container>
            {products && products.map(product =>
                <Grid key={product.id} item xs={6} sm={4} md={3} lg={2}>
                    <ProductCard product={product}/>
                </Grid>
            )}
        </Grid>
    );
};

export default ProductList;