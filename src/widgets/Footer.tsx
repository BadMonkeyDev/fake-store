import avatar from 'assets/badmonkey.svg'
import styled from "styled-components";
import IconButton from "@mui/material/IconButton";
import Link from '@mui/material/Link';
import GitHub from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Telegram from "@mui/icons-material/Telegram";


const StyledFooter = styled.footer`
  background-color: rgb(18,18,18);
  color: aliceblue;
  padding-top: 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .copy {
    display: flex;
    align-items: center;
    gap: 4px;
  }
`

const Footer = () => {

    return (
        <StyledFooter>
                <div className="copy">
                    <span>Copyright © {new Date().getFullYear()},</span>
                    <img src={avatar} alt="bad monkey logo" width={16}/>
                    <span>Arsenii BadMonkey Aivazian</span>
                </div>
                <div className="follow" style={{display: "flex", alignItems: "center"}}>
                    You can see examples of my code on
                    <Link href={'https://github.com/BadMonkeyDev/'} target={'_blank'}>
                        <IconButton >
                            <GitHub />
                        </IconButton>
                    </Link>
                    and contact me via
                    <Link href={'https://www.linkedin.com/in/bmonkey/'} target={'_blank'}>
                        <IconButton color={'primary'}>
                            <LinkedIn />
                        </IconButton>
                    </Link>
                    or
                    <Link href={'https://t.me/Badmonkeytg'} target={'_blank'}>
                        <IconButton color={'primary'}>
                            <Telegram />
                        </IconButton>
                    </Link>
                </div>
        </StyledFooter>
    );
};

export default Footer;