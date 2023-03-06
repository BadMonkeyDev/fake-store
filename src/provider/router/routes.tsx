import React, {lazy, ReactElement} from "react";
import {
    CART_ROUTE,
    CATEGORY_ROUTE,
    HOME_ROUTE,
    LOGIN_ROUTE,
    PERSONAL_ROUTE,
    PRODUCT_ROUTE,
    PRODUCTS_ROUTE,
    REGISTRATION_ROUTE
} from "../../utils/consts";

const MainPage = lazy(() => import('pages/MainPage'))
const PersonalPage = lazy(() => import('pages/PersonalPage'))
const OrderPage = lazy(() => import('pages/OrderPage'))
const AuthenticationPage = lazy(() => import('pages/AuthenticationPage'))
const ProductListPage = lazy(() => import('pages/ProductListPage'))
const ProductPage = lazy(() => import('pages/ProductPage'))

const routeCreator = (id: number, label: string | ReactElement) => {
    return {
        id,
        label,
    }
}

export const authRoutes = [
    {
        path: PERSONAL_ROUTE,
        Component: <PersonalPage/>
    },
    {
        path: CART_ROUTE,
        Component: <OrderPage/>
    },
]
export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: <MainPage/>
    },
    {
        path: PRODUCTS_ROUTE,
        Component: <ProductListPage/>
    },
    {
        path: PRODUCT_ROUTE + '/:id',
        Component: <ProductPage/>
    },
    {
        path: CATEGORY_ROUTE + '/:id',
        Component: <ProductListPage/>
    },
    {
        path: LOGIN_ROUTE,
        Component: <AuthenticationPage/>
    },
    {
        path: REGISTRATION_ROUTE,
        Component: <AuthenticationPage/>
    },
]

export const routes = {
    home: routeCreator(1, 'Home'),
    auth: routeCreator(2, 'Auth'),
    products: routeCreator(3, 'Products'),
    product: routeCreator(4, 'Product'),
    cart: routeCreator(5, 'Cart'),
    personal: routeCreator(6, 'Personal'),
}
