import React from 'react'
import styled from 'styled-components';
import theme from '../global/theme';
import MailIcon from '@mui/icons-material/Mail';
import YoutubeButton from './YoutubeButton';

const FooterContainer = styled.div`
    background-color : ${theme.headerLighterBlue};
    h1 {
        color:white;
        font-size: 1.2rem;
        margin-bottom:5px;
        padding:0;
    }
    a {
        font-size:0.8rem;
        margin-bottom : 15px;
    }
    p {
        padding : 0;
        margin : 0;
        margin-bottom : 10px;
    }
    color : ${theme.lightLetterBlue};
    padding : 10px 25px;
    padding-bottom : 40px;
    display : flex;
    justify-content:space-evenly;
    gap : 1.2rem;
;
`

const CopyrightFooterContainer = styled.div`
    background-color : ${theme.headerDarkBlue};
    color : ${theme.lightLetterBlue};
    padding : 10px 25px;
    display : flex;
    justify-content:center;
    align-items: center;
;
`

const Container = styled.div`
    display : flex;
    flex-direction:column;
    gap : .3rem;
    max-width : 30%;
`

const Styleda = styled.a`
    text-decoration : none;
    color : ${theme.lightLetterBlue};;
`
const FlexContainer = styled.div`
    display : flex;
    gap : 4px;
`
const ShareContainer = styled.div`
`


export default function Footer() {
    return (
        <>
            <FooterContainer>
                <Container>
                    <h1>Despre Noi</h1>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

                    </p>
                </Container>

                <Container>
                    <h1>Linkuri</h1>
                    <Styleda href='/articole'>Articole</Styleda>
                    <Styleda href='/despre-noi'>Despre noi</Styleda>
                </Container>
                <Container>
                    <h1>Contact</h1>
                    <FlexContainer>
                        <MailIcon style={{ color: 'white' }}></MailIcon>
                        <p>contact@gmail.com</p>
                    </FlexContainer>
                    <ShareContainer>
                        <YoutubeButton color={theme.lightLetterBlue} onClick={() => {window.location.replace('https://youtube.com')}}/>
                    </ShareContainer>
                </Container>
            </FooterContainer>
            <CopyrightFooterContainer>Copyright 2022 © Hai sa fim cetateni model</CopyrightFooterContainer>
        </>
    )
}
