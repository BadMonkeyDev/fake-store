import React, {FC} from 'react';
import {IRating} from "../store/reducers/productsSlice";
import styled from "styled-components";
import {Rating as Rt} from "@mui/material";

const StyledRating = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`

const StyledVotes = styled.div`  
  display: flex;
`

const Rating: FC<IRating> = ({rate, count}) => {
    return (
        <StyledRating>
            <Rt value={rate} readOnly precision={0.1} size="small" />
            <StyledVotes>{count} votes</StyledVotes>
        </StyledRating>
    );
};

export default Rating;