import React from 'react';
import StoreMallDirectoryTwoToneIcon from '@mui/icons-material/StoreMallDirectoryTwoTone';
import styled from "styled-components";

const StyledLogo = styled.div`
  filter: invert(56%) sepia(82%) saturate(376%) hue-rotate(125deg) brightness(83%) contrast(90%);

`

const Logo = () => {
    return (
        <StyledLogo >
            <StoreMallDirectoryTwoToneIcon sx={{width: 40, height: 40}} />
        </StyledLogo>
    );
};

export default Logo;