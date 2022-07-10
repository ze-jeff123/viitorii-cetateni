import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Search from './Search';
import { AppBar } from '@mui/material';
import { Container } from '@mui/system';
import Toolbar from '@mui/material/Toolbar';

const HeaderContainer = styled.div`
    display : flex;
    align-items : center;
`
const StyledLink = styled(Link)`
    
`
const StyledSearch = styled(Search)`
    margin-left : auto;
`

function Header() {
    return (
        <AppBar>
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <StyledSearch></StyledSearch>
                    <StyledLink to="/">Acasa</StyledLink>
                    <StyledLink to="/">Articole</StyledLink>
                    <StyledLink to="/">Despre noi</StyledLink>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header;