import React from 'react';
import Logo from "./Logo";
import styled from "styled-components";

const StyledLogoWithText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`

const LogoWithText = () => {
    return (
        <StyledLogoWithText>
           <Logo />
            Fake Store
        </StyledLogoWithText>
    );
};

export default LogoWithText;