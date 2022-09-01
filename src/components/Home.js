import React from 'react'
import Layout from './Layout'
import styled from 'styled-components'
import flag2 from "../img/flag2.jpg";
import HeroImage from "./HeroImage";
import { Typography } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import ArticleCard from "./ArticleCard";
import MyCarousel from './MyCarousel';
import Divider from '@mui/material/Divider';
import flatPosts from "../flatPosts.js";
import { v4 as uuidv4 } from 'uuid';
import theme from '../global/theme';
import bookshelfImg from '../img/bookshelf.jpg';
import interviewImg from '../img/interview1.jpg';
const StyledLink = styled(Link)`
 color : white;
 text-decoration: none;
`

const ColoredDiv = styled.div`
    background-color : ${theme.backgroundLightBlue};
    padding : 20px;
`

const CardsContainer = styled.div`
    padding : 50px;
    display : flex;
    justify-content : space-around;
`

const InfoCard = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
    max-width : 20vw;
`

const InfoImg = styled.div`
    height : 20vw;
    width : 20vw;
    background-color : gray;
    background-image : ${(props) => `url(${props.backgroundImage})`};
    background-size : cover;
    background-position : center;
    color : white;
    font-size : 2.3vw;
    font-weight : bold;
    display : flex;
    justify-content : center;
    align-items : center;
`

const Overlay = styled.div`
    background-color : rgba(137, 100, 19,0.4);
    height : 100%;
    width : 100%;
    position : abslute;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    p {
        margin : 0px;
        padding : 0px;
    }
`
const OverlayedImg = (props) => {
    return (
        <InfoImg {...props}>
            <Overlay>
                {
                    props.children
                }
            </Overlay>
        </InfoImg>
    )
}

function Home() {
    return (
        <>
            {
                <Layout>
                    <HeroImage src={flag2}>
                        <Typography alignCenter variant="h2" color='white' sx={{ paddingTop: '7%', fontWeight: 'bold' }}>Hai Sa Fim Cetateni Model</Typography>
                        <Typography variant="h5" alignCenter color='white'>Educatie civica pe intelesul tuturor</Typography>
                        <ButtonGroup sx={{ marginTop: '25px' }}>
                            <StyledLink to="/articole">
                                <Button size="large">Articole</Button>
                            </StyledLink>
                            <StyledLink to="/despre-noi">
                                <Button variant='contained' size="large" sx={{ boxShadow: 'none' }}>Despre noi</Button>
                            </StyledLink>
                        </ButtonGroup>
                    </HeroImage>

                    <CardsContainer>
                        <InfoCard>
                            <OverlayedImg backgroundImage={bookshelfImg}>
                                Articole
                            </OverlayedImg>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                            </p>
                        </InfoCard>
                        <InfoCard>
                            <OverlayedImg backgroundImage={interviewImg}>
                                <p>Videoclipuri</p>
                                <p>informative</p>
                            </OverlayedImg>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                            </p>
                        </InfoCard>
                        <InfoCard>
                            <InfoImg></InfoImg>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                            </p>
                        </InfoCard>
                    </CardsContainer>

                    <ColoredDiv>
                        <Typography variant='h2' color='white' align='center' sx={{ marginBottom: '15px' }}>Articole</Typography>
                        <Divider sx={{ marginBottom: '30px' }}></Divider>
                        <MyCarousel>
                            {
                                flatPosts.filter((article) => article.content.metadata.featured === true).map((article) => <ArticleCard key={uuidv4()} article={article} />)
                            }
                        </MyCarousel>
                    </ColoredDiv>
                </Layout>
            }
        </>
    )
}

export default Home