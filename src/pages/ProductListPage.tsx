import React, {useEffect, useMemo, useState} from 'react';
import {useSelector} from "react-redux";
import {Product, selectProducts} from "store/reducers/productsSlice";
import ProductList from "widgets/ProductList";
import {Typography} from "@mui/material";
import DropDown from "../ui/DropDown";
import {useLocation} from "react-router-dom";
import {CATEGORY_ROUTE, PRODUCTS_ROUTE} from "../utils/consts";
import sortObjectsArray, {SortType} from "../utils/sortObjectsArray";
import {CategoriesType} from "../store/reducers/categoriesSlice";
import Link from "@mui/material/Link";

export interface ISort {
    key: keyof Product;
    type?: SortType
}

const defaultSortKey = 'BY_POPULARITY';

const ProductSort = {
    BY_PRICE_LOW: {title: "Від дешевих до дорогих", key: 'price', type: 'asc'},
    BY_PRICE_BIG: {title: "Від дорогих до дешевих", key: 'price', type: 'desc'},
    BY_POPULARITY: {title: "По популярності", key: 'rating.count', type: 'desc'},
    BY_RATING: {title: "За рейтингом", key: 'rating.rate', type: 'desc'},
}

export type ProductSortKey = keyof typeof ProductSort;

const ProductListPage = () => {
        const products = useSelector(selectProducts)
        const [filteredProducts, setFilteredProducts] = useState<Product[]>(products as Product[])
        const [category, setCategory] = useState<CategoriesType | null>(null)
        const [selectedSort, setSelectedSort] = useState<ProductSortKey | null>(null)

        const location = useLocation()

        const sortedProducts = useMemo(() => {
            if (selectedSort !== null) {
                if (selectedSort in ProductSort){
                    //@ts-ignore
                    return sortObjectsArray(filteredProducts, ProductSort[selectedSort].key, ProductSort[selectedSort].type)
                }
            } else {
                return filteredProducts
            }
        }, [selectedSort, filteredProducts])

        useEffect(() => {
            const categoryType = location.pathname.slice(CATEGORY_ROUTE.length + 1)
            if (categoryType && products){
                const filtered = products.filter((product) => product.category === categoryType.replace('%20', ' '));
                setFilteredProducts(filtered)
                setCategory(categoryType as CategoriesType)
            } else {
                setFilteredProducts(products as Product[])
                setCategory(null)
            }
        }, [location.pathname, products as Product[]])

    return (
            <>
                {category && <Link href={PRODUCTS_ROUTE} sx={{alignSelf: "flex-start", marginBottom: '24px'}}>&lt; Return to product list</Link>}
                <Typography variant="h4" component="h2" sx={{alignSelf: "flex-start", marginBottom: '24px'}}>
                    Products
                </Typography>
                <DropDown
                    objects={Object.entries(ProductSort).map(([key, value]) => ({ key, title: value.title }))}
                    defaultSortKey={defaultSortKey}
                    //@ts-ignore
                    setSelectedSort={setSelectedSort}
                />
                <ProductList products={sortedProducts}/>
            </>
        );
    }
;

export default ProductListPage;