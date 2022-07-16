import React from 'react'
import styled from 'styled-components'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Container = styled.div`
    display : flex;
`

const StyledDiv = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
    width : 25px;
    &:hover {
        background-color : #cccccc;
    }
`

function Arrow(props) {
    return (
        <StyledDiv>
            {
                props.children
            }
        </StyledDiv>
    )
}

function Carousel(props) {
    return (
        <Container>
            <Arrow><ChevronLeftIcon/></Arrow>

            {
                props.children
            }
            <Arrow><ChevronRightIcon/></Arrow>

        </Container>
    )
}

export default Carousel