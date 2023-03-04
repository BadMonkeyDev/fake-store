import React, {lazy, ReactElement} from "react";

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

export const routes = {
    home: routeCreator(1, 'Home', '/', <MainPage />),
    auth: routeCreator(2, 'Auth', '/auth', <AuthenticationPage />),
    products: routeCreator(3, 'Products', '/products', <ProductListPage />),
    product: routeCreator(4, 'Product', '/products/:id', <ProductPage />),
    cart: routeCreator(5, 'Cart', '/cart', <OrderPage/>),
    personal: routeCreator(6, 'Personal', '/personal', <PersonalPage/>),
}
