import React from 'react'
import AdbIcon from '@mui/icons-material/Adb';
import { Typography } from '@mui/material';
import styled from "styled-components";
import {Link} from "react-router-dom";

const StyledLink = styled(Link)`
    text-decoration : none;
    color : white;
`

const StyledDiv = styled.div`
    display : flex;
    align-items : center;
`

function Logo(props) {
    const display = props.responsive ? { xs: 'none', md: 'flex' } : 'block';
    return (
        <StyledDiv>
            <AdbIcon sx={{ display: display, mr: 1 }} />
            <StyledLink to="/">
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    sx={{
                        mr: 2,
                        display: display,
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    LOGO
                </Typography>
            </StyledLink>
        </StyledDiv >
    )
}

export default Logo