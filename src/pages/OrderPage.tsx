import React from 'react';
import {useSelector} from "react-redux";
import {selectCart} from "../store/reducers/cartSlice";
import {Button, Typography} from "@mui/material";
import CartProduct from "../ui/CartProduct";
import styled from "styled-components";

const StyledActionBar = styled.div`
  display: flex;
  align-items: center;
  padding: 24px;
  border-radius: 4px;
`
const StyledSum = styled.div`
  margin-right: 24px;  
`

const StyledProceedAction = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  padding: 24px;
  border: 1px solid green;
  background-color: rgba(0, 255, 0, 0.1);
  border-radius: 4px;
`

const OrderPage = () => {
    const cartItems = useSelector(selectCart)
    return (
        <div style={{width: '100%'}}>
            <Typography variant="h4" component="h2" sx={{alignSelf: "flex-start", marginBottom: '24px'}}>Cart</Typography>
            {cartItems.map((cartItem, index) =>
                <CartProduct key={cartItem.product.id} product={cartItem.product} quantity={cartItem.quantity} />
            )}
            <StyledActionBar>
                <Button variant={"outlined"} color={"info"}>Continue shopping</Button>
                <StyledProceedAction>
                    <StyledSum>234234</StyledSum>
                    <Button variant={"contained"} color={"success"}>Buy All</Button>
                </StyledProceedAction>
            </StyledActionBar>
        </div>
    );
};

export default OrderPage;