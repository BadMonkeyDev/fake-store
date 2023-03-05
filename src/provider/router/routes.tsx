import React, {lazy, ReactElement} from "react";
import {
    CART_ROUTE,
    HOME_ROUTE,
    LOGIN_ROUTE,
    PERSONAL_ROUTE, PRODUCT_ROUTE,
    PRODUCTS_ROUTE,
    REGISTRATION_ROUTE
} from "../../utils/consts";

const MainPage = lazy(() => import('pages/MainPage'))
const PersonalPage = lazy(() => import('pages/PersonalPage'))
const OrderPage = lazy(() => import('pages/OrderPage'))
const AuthenticationPage = lazy(() => import('pages/AuthenticationPage'))
const ProductListPage = lazy(() => import('pages/ProductListPage'))
const ProductPage = lazy(() => import('pages/ProductPage'))

const routeCreator = (id: number, label: string | ReactElement, path: string, pageComponent: ReactElement) => {
    return {
        id,
        label,
        path,
        pageComponent,
    }
}

export const authRoutes = [
    {
        path: PERSONAL_ROUTE,
        Component: PersonalPage
    },
    {
        path: CART_ROUTE,
        Component: OrderPage
    },
]
export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: MainPage
    },
    {
        path: PRODUCTS_ROUTE,
        Component: ProductListPage
    },
    {
        path: PRODUCT_ROUTE + '/:id',
        Component: ProductPage
    },
    {
        path: LOGIN_ROUTE,
        Component: AuthenticationPage
    },
    {
        path: REGISTRATION_ROUTE,
        Component: AuthenticationPage
    },
]

export const routes = {
    home: routeCreator(1, 'Home', '/', <MainPage />),
    auth: routeCreator(2, 'Auth', '/auth', <AuthenticationPage />),
    products: routeCreator(3, 'Products', '/products', <ProductListPage />),
    // product: routeCreator(4, 'Product', '/products/:id', <ProductPage />),
    cart: routeCreator(5, 'Cart', '/cart', <OrderPage/>),
    personal: routeCreator(6, 'Personal', '/personal', <PersonalPage/>),
}
