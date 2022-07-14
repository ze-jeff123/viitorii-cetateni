import React from 'react'
import Layout from './Layout'
import styled from 'styled-components'
import flag2 from "../img/flag2.jpg";
import HeroImage from "./HeroImage";
import { Typography } from '@mui/material';
const HeroContainer = styled.div`

`

function Home() {
    return (
        <Layout>
            <HeroImage src={flag2}>
                <Typography variant="h2" color='white' sx={{paddingTop : '7%', fontWeight : 'bold'}}>Viitorii Cetateni</Typography>
                <Typography variant="h5" color='white'>Educatie civica pe intelesul tuturor</Typography>
            </HeroImage>
        </Layout>
    )
}

export default Home