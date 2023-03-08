import React, {FC} from 'react';
import styled from "styled-components";

interface BannerProps {
    background: string
    children: React.ReactNode
}

const StyledBanner = styled.div<BannerProps>`
  position: relative;
  height: 300px;
  background: url(${props => props.background}) no-repeat top center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  &::before{
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(0,0,0,0.4);
    transition:  0.3s;
  }
  &:hover{
    &:before{
      //width: 0;
      //height: 0;
      background-color: rgba(0,0,0,0.0)
    }
  }
`

const StyledChildren = styled.div`
  background-color: black;
  padding: 10px;
  font-size: 36px;
  color: aliceblue;
`

const Banner: FC<BannerProps> = ({background, children}) => {
    return (
        <StyledBanner background={background}><StyledChildren>{children}</StyledChildren></StyledBanner>
    );
};

export default Banner;