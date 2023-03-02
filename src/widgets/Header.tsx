import React from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  gap: 16px;
`

const Header = () => {
    return (
        <StyledHeader>
            HEADER
            <Link to={'/'}>Main</Link>
            <Link to={'/personal'}>Personal</Link>
        </StyledHeader>
    );
};

export default Header;