import React, {FC} from 'react';
import {Card, Tooltip, Typography, useTheme} from "@mui/material";
import {Product} from "store/reducers/productsSlice";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import styled from "styled-components";
import Rating from "../widgets/Rating";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import IconButton from "@mui/material/IconButton";

// id: number;
// title: string;
// price: number;
// description: string;
// category: string;
// image: string;
// "rating": Rating

const StyledMedia = styled.div`
  position: relative;

  &:before {
    display: block;
    padding-top: 66%;
    padding-bottom: 66%;
    content: "";
  }
`

const StyledContent = styled.div`  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 16px;
  height: 100%;
`

const StyleImage = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 100%;
  max-height: 100%;
`

const StyledPrice = styled.div`
  display: flex;
  justify-content: space-between;
`
const StyledActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export interface ProductCardProps {
    product: Product
}

const ProductCard: FC<ProductCardProps> = ({product}) => {
    const {id, title, price, description, category, image, rating} = product
    const theme = useTheme()

    return (
        <Card sx={{padding: "16px", height: "100%", display: "flex", flexDirection: "column"}}>
            <StyledMedia>
                <StyleImage src={image} alt={title}/>
            </StyledMedia>
            <StyledContent>
                <Tooltip title={title} followCursor>
                    <Typography>{title}</Typography>
                </Tooltip>
                <StyledActions>
                    <Rating rate={rating.rate} count={rating.count} />
                    <StyledPrice>
                        <Typography color={theme.palette.error.main} sx={{alignItems: "center", display: "flex", textAlign: "center"}}>
                            {price} <AttachMoneyIcon />
                        </Typography>
                        <IconButton sx={{color: theme.palette.success.main}} >
                            <ShoppingCartOutlinedIcon />
                        </IconButton>
                    </StyledPrice>
                </StyledActions>
            </StyledContent>
        </Card>
    );
};

export default ProductCard;