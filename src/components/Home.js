import React from 'react'
import Layout from './Layout'
import styled from 'styled-components'
import flag2 from "../img/flag2.jpg";
import HeroImage from "./HeroImage";
import { Typography } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
const HeroContainer = styled.div`

`
const StyledLink = styled(Link)`
 color : white;
 text-decoration: none;
`   
function Home() {
    return (
        <Layout>
            <HeroImage src={flag2}>
                <Typography variant="h2" color='white' sx={{ paddingTop: '7%', fontWeight: 'bold' }}>Viitorii Cetateni</Typography>
                <Typography variant="h5" color='white'>Educatie civica pe intelesul tuturor</Typography>
                <ButtonGroup sx={{marginTop : '25px'}}>
                    <StyledLink to="/articole/introducere/introducere">
                        <Button  size="large">Articole</Button>
                    </StyledLink>
                    <StyledLink to="/despre-noi">
                        <Button variant='contained' size="large">Despre noi</Button>
                    </StyledLink>
                </ButtonGroup>
            </HeroImage>
        </Layout>
    )
}

export default Home