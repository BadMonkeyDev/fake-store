import React, {useEffect, useState} from 'react';
import {Link, useLocation} from "react-router-dom";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import {AppBar, Tab, Tabs} from "@mui/material";
import {authRoutes, publicRoutes, routes} from "../provider/router/routes";
import LogoWithText from "../ui/LogoWithText";
import {useSelector} from "react-redux";
import {selectUser} from "../store/reducers/userReducer";
import {CART_ROUTE, HOME_ROUTE, LOGIN_ROUTE, PERSONAL_ROUTE, PRODUCTS_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";


const Header = () => {
    const [tab, setTab] = useState<string>(HOME_ROUTE)
    const location = useLocation()
    const user = useSelector(selectUser)

    useEffect(() => {
        let allowedTabs = publicRoutes.map(publicRoute => publicRoute.path)
        if (user.isAuth){
            allowedTabs = [...allowedTabs, ...authRoutes.map(authRoute => authRoute.path)]
        }
        const tab = '/' + location.pathname.split('/')[1] || '/';
        if (allowedTabs.includes(tab)){
            (location.pathname === LOGIN_ROUTE || location.pathname === REGISTRATION_ROUTE) ? setTab(LOGIN_ROUTE) : setTab(tab)
        } else {
            setTab(HOME_ROUTE)
        }
    }, [location.pathname])

    return (
        <AppBar position="static" sx={{ position: "fixed", top: 0, padding: "0 32px", zIndex: 1}}>
            <Tabs
                value={tab}
                aria-label="Navigation"
                indicatorColor="primary"
                textColor="primary"
                sx={{display: "flex"}}
            >
                <Tab label={<LogoWithText />} component={Link} to={HOME_ROUTE} value={HOME_ROUTE} />
                <Tab label={routes.products.label} component={Link} to={PRODUCTS_ROUTE} value={PRODUCTS_ROUTE} />

                {user.isAuth ?
                        <Tab label={<LogoutIcon />} component={Link} to={LOGIN_ROUTE} sx={{order: 2}} value={LOGIN_ROUTE} state={{ from: 'authorized'}} />
                        :
                        <Tab label={routes.auth.label} component={Link} to={LOGIN_ROUTE} value={LOGIN_ROUTE} />
                }
                <Tab label={<ShoppingCartOutlinedIcon />} component={Link} to={CART_ROUTE} sx={{marginLeft: "auto", order: 1}} value={CART_ROUTE} />
                {user.isAuth &&
                    <Tab label={routes.personal.label} component={Link} to={PERSONAL_ROUTE} value={PERSONAL_ROUTE} />
                }
            </Tabs>
        </AppBar>
    );
};

export default Header;