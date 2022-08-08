import React from 'react'
import Layout from './Layout'
import styled from 'styled-components'
import flag2 from "../img/flag2.jpg";
import HeroImage from "./HeroImage";
import { Typography } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import ArticleCard from "./ArticleCard";
import MyCarousel from './MyCarousel';
import Container from '@mui/material/Container';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Divider from '@mui/material/Divider';
import flatPosts from "../flatPosts.js";

const HeroContainer = styled.div`

`
const StyledLink = styled(Link)`
 color : white;
 text-decoration: none;
`

const ColoredDiv = styled.div`
    background-color : #c8d6f7;
    padding : 20px;
`

function Home() {
    return (
        <>
            {
                <Layout>
                    <HeroImage src={flag2}>
                        <Typography alignCenter variant="h2" color='white' sx={{ paddingTop: '7%', fontWeight: 'bold' }}>Viitorii Cetateni</Typography>
                        <Typography variant="h5" alignCenter color='white'>Educatie civica pe intelesul tuturor</Typography>
                        <ButtonGroup sx={{ marginTop: '25px' }}>
                            <StyledLink to="/articole/introducere/introducere">
                                <Button size="large">Articole</Button>
                            </StyledLink>
                            <StyledLink to="/despre-noi">
                                <Button variant='contained' size="large" sx={{ boxShadow: 'none' }}>Despre noi</Button>
                            </StyledLink>
                        </ButtonGroup>
                    </HeroImage>
                    <ColoredDiv>
                    <Typography variant='h2' color='white' align='center' sx={{marginBottom:'15px'}}>Articole</Typography>
                        <Divider sx={{marginBottom:'30px'}}></Divider>
                        <MyCarousel>
                            {
                                flatPosts.filter((article) => article.content.metadata.featured === true).map((article) => <ArticleCard article={article} />)
                            }
                        </MyCarousel>
                    </ColoredDiv>
                </Layout>
            }
        </>
    )
}

export default Home