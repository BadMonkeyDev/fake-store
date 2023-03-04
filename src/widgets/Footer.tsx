import avatar from 'assets/badmonkey.svg'
import styled from "styled-components";
import IconButton from "@mui/material/IconButton";
import Link from '@mui/material/Link';
import GitHub from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Telegram from "@mui/icons-material/Telegram";
import {useTheme} from "@mui/material";
import {HTMLAttributes} from "react";
import AppIconButton from "ui/AppIconButton";

interface StyledFooterProps extends HTMLAttributes<HTMLElement> {
    bgColor?: string;
    color?: string;
}

const StyledFooter = styled.footer<StyledFooterProps>`
  height: 80px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor && props.bgColor};
  color: ${props => props.color && props.color};
  
  .copy {
    display: flex;
    align-items: center;
    gap: 4px;
  }
`



const Footer = () => {
    const theme = useTheme()

    return (
        <StyledFooter bgColor={theme.palette.dark.main} color={theme.palette.darkText.main}>
            <div className="copy">
                <span>Copyright © {new Date().getFullYear()},</span>
                <img src={avatar} alt="bad monkey logo" width={24}/>
                <span>Arsenii BadMonkey Aivazian</span>
            </div>
            <div className="follow" style={{display: "flex", alignItems: "center"}}>
                You can see examples of my code on
                <Link href={'https://github.com/BadMonkeyDev/'} target={'_blank'}>
                    <AppIconButton variant="dark" >
                        <GitHub/>
                    </AppIconButton>
                </Link>
                and contact me via
                <Link href={'https://www.linkedin.com/in/bmonkey/'} target={'_blank'}>
                    <AppIconButton variant="dark" >
                        <LinkedIn/>
                    </AppIconButton>
                </Link>
                or
                <Link href={'https://t.me/Badmonkeytg'} target={'_blank'}>
                    <AppIconButton variant="dark" >
                        <Telegram/>
                    </AppIconButton>
                </Link>
            </div>
        </StyledFooter>


    );
};

export default Footer;