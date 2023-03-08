import React, {MouseEvent} from 'react';
import styled from "styled-components";
import {Button, Card, Modal, Rating, Typography, useTheme} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {selectProducts} from "store/reducers/productsSlice";
import {CATEGORY_ROUTE, HOME_ROUTE, LOGIN_ROUTE, PRODUCT_ROUTE} from "../utils/consts";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import {Link, Navigate, useLocation} from "react-router-dom";
import {selectUser} from "store/reducers/userReducer";
import {addCartItem} from "../store/reducers/cartSlice";

const StyledProductPage = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledProductContent = styled.div`
  display: flex;

  & > div {
    width: 50%;
  }
`

const StyledMedia = styled.div`
  padding-right: 24px;
`

const StyleImage = styled.img`
  width: 100%;
  height: 100%;
`

const StyleContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-left: 24px;
`

const StyledModalContent = styled.div`  
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 400px;
`

const ProductPage = () => {
    const [open, setOpen] = React.useState(false);
    const location = useLocation()
    const products = useSelector(selectProducts)
    const user = useSelector(selectUser)
    const theme = useTheme()

    const dispatch = useDispatch()

    const productId = location.pathname.slice(PRODUCT_ROUTE.length + 1)
    const product = products && products.length && products.find(product => product.id === Number(productId))

    if (product === undefined) {
        console.log('product === undefined')
        return (
            <Navigate to={HOME_ROUTE}/>
        )
    } else if (product !== 0) {

        const handleAddToCart = (e: MouseEvent) => {
            e.stopPropagation()
            if (user.isAuth && product) {
                dispatch(addCartItem({product, quantity: 1}))
            } else {
                setOpen(true)
            }
        }
        return (
            <>
                {product &&
                    <StyledProductPage>
                        <Link to={`${CATEGORY_ROUTE}/${product.category}`}>
                            {product.category.charAt(0).toUpperCase() + product.category.substring(1)}
                        </Link>
                        <Typography variant={"h4"} component={"h2"}>{product.title}</Typography>
                        <div style={{display: "flex", justifyContent: "space-between", marginBottom: "24px"}}>
                            <Rating value={product.rating.rate} readOnly precision={0.1} size="small"/>
                            <div>
                                <Typography component={"span"} color={'gray'}>Code:</Typography> {product.id}
                            </div>
                        </div>
                        <StyledProductContent>
                            <StyledMedia>
                                <StyleImage src={product.image} alt={product.title}/>
                            </StyledMedia>
                            <StyleContent>
                                <Card sx={{padding: "16px"}}>
                                    <Typography
                                        variant={"h5"}
                                        color={theme.palette.error.main}
                                        sx={{alignItems: "center", display: "flex", textAlign: "center"}}>
                                        {product.price} <AttachMoneyIcon/>
                                    </Typography>
                                    <Typography color={theme.palette.success.light}>Available</Typography>
                                    <Button
                                        onClick={handleAddToCart}
                                        fullWidth
                                        variant="contained"
                                        sx={{paddingTop: "8px"}}
                                        color={"success"}>
                                            <ShoppingCartOutlinedIcon/> Buy
                                    </Button>
                                </Card>
                                <Card sx={{padding: "16px"}}>
                                    <Typography>
                                        {product.description}
                                    </Typography>
                                </Card>
                            </StyleContent>
                        </StyledProductContent>
                    </StyledProductPage>
                }
                <Modal
                    open={open}
                    onClose={() => setOpen(false)}
                >

                    <StyledModalContent>
                        <Card sx={{padding: "48px", width: '100%', height: '100%'}}>
                            You must be <Link to={LOGIN_ROUTE}>logged in</Link> to add products to cart.
                        </Card>
                    </StyledModalContent>

                </Modal>
            </>
        )
    } else {
        return <></>
    }
}

export default ProductPage;