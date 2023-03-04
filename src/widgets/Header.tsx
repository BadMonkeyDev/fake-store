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


const Header = () => {
    const user = useSelector(selectUser)
    const tab = useSelector(selectTab)
    // const [value, setValue] = useState(1);

    // const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    //     setValue(newValue);
    // };

    return (
        <AppBar position="static" sx={{ position: "fixed", top: 0, padding: "0 32px" }}>
            <Tabs
                value={tab}
                // onChange={handleChange}
                aria-label="Navigation"
                indicatorColor="primary"
                textColor="primary"
                sx={{display: "flex"}}
            >
                <Tab label={<LogoWithText />} component={Link} to={routes.home.path} value={routes.home.id} />
                <Tab label={routes.products.label} component={Link} to={routes.products.path} value={routes.products.id} />

                {user.isAuth ?
                        <Tab label={<LogoutIcon />} component={Link} to={routes.auth.path} sx={{order: 2}} value={routes.auth.id}/>
                        :
                        <Tab label={routes.auth.label} component={Link} to={routes.auth.path} value={routes.auth.id} />
                }
                <Tab label={<ShoppingCartOutlinedIcon />} component={Link} to={routes.cart.path} sx={{marginLeft: "auto", order: 1}} value={routes.cart.id} />
                {user.isAuth &&
                    <Tab label={routes.personal.label} component={Link} to={routes.personal.path} value={routes.personal.id} />
                }
            </Tabs>
        </AppBar>
    );
};

export default Header;