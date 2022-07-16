import React from 'react'
import styled from 'styled-components'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const Container = styled.div`
    display : flex;
`

const StyledDiv = styled.div`
    background-image : ${(props) => `url(${props.img})`};
    background-repeat : no-repeat;
    background-position : center; 
    background-size : cover;
    width : 100px;
`

function Arrow(props) {
    return (
        <StyledDiv img={props.img}>

        </StyledDiv>
    )
}

function Carousel(props) {
    return (
        <Container>
            <img src={ChevronLeftIcon} alt='hi'></img>
            <Arrow img='../img/arrow-left.svg'></Arrow>

            {
                props.children
            }
            <Arrow img='../img/arrow-right.svg'></Arrow>

        </Container>
    )
}

export default Carousel