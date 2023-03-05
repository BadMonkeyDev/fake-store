import React from 'react';
import {Link} from "react-router-dom";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import {AppBar, Tab, Tabs} from "@mui/material";
import {routes} from "../provider/router/routes";
import LogoWithText from "../ui/LogoWithText";
import {useSelector} from "react-redux";
import {selectUser} from "../store/reducers/userReducer";
import {selectTab} from "../store/reducers/tabsReducer";
import {CART_ROUTE, HOME_ROUTE, LOGIN_ROUTE, PERSONAL_ROUTE, PRODUCTS_ROUTE} from "../utils/consts";


const Header = () => {
    const user = useSelector(selectUser)
    const tab = useSelector(selectTab)

    return (
        <AppBar position="static" sx={{ position: "fixed", top: 0, padding: "0 32px", zIndex: 1}}>
            <Tabs
                value={tab}
                aria-label="Navigation"
                indicatorColor="primary"
                textColor="primary"
                sx={{display: "flex"}}
            >
                <Tab label={<LogoWithText />} component={Link} to={HOME_ROUTE} value={routes.home.id} />
                <Tab label={routes.products.label} component={Link} to={PRODUCTS_ROUTE} value={routes.products.id} />

                {user.isAuth ?
                        <Tab label={<LogoutIcon />} component={Link} to={LOGIN_ROUTE} sx={{order: 2}} value={routes.auth.id}/>
                        :
                        <Tab label={routes.auth.label} component={Link} to={LOGIN_ROUTE} value={routes.auth.id} />
                }
                <Tab label={<ShoppingCartOutlinedIcon />} component={Link} to={CART_ROUTE} sx={{marginLeft: "auto", order: 1}} value={routes.cart.id} />
                {user.isAuth &&
                    <Tab label={routes.personal.label} component={Link} to={PERSONAL_ROUTE} value={routes.personal.id} />
                }
            </Tabs>
        </AppBar>
    );
};

export default Header;