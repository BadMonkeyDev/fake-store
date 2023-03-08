import React, {FC, useState} from 'react';
import {CartItem} from "../store/reducers/cartSlice";
import styled from "styled-components";
import {Typography} from "@mui/material";

const StyledCartProduct = styled.div`
    padding: 20px 30px;
  
`
const StyledProductHeader = styled.div`
    display: flex;
  
`
const StyledProductImageLink = styled.a`
    width: 96px;
    height: 96px;
    margin-right: 16px;
    img {
      max-height: 100%;
      max-width: 100%;
    }
`
const StyledProductButton = styled.a`
    display: flex;
    width: 40px;
    height: 40px;
    text-align: center;
`
const StyledProductFooter = styled.div`
  padding-left: 112px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
const StyledProductActions = styled.div`
  display: flex;
  align-items: center;
`
const StyledProductPrice = styled.div`
  text-align: right;
  width: 28%;
`

const CartProduct: FC<CartItem> = ({product, quantity}) => {
    const [productQuantity, setProductQuantity] = useState(quantity)
    return (
        <StyledCartProduct>
            <StyledProductHeader>
                <StyledProductImageLink>
                    <img src={product.image} alt={product.title}/>
                </StyledProductImageLink>
                <Typography sx={{flex: 1}}>
                    <a href="#">{product.title}</a>
                </Typography>
                <StyledProductButton>...</StyledProductButton>
            </StyledProductHeader>
            <StyledProductFooter>
                <StyledProductActions>
                    <StyledProductButton>+</StyledProductButton>
                    <StyledProductButton>{productQuantity}</StyledProductButton>
                    <StyledProductButton>-</StyledProductButton>
                </StyledProductActions>
                <StyledProductPrice>{product.price}</StyledProductPrice>
            </StyledProductFooter>
        </StyledCartProduct>
    );
};

export default CartProduct;