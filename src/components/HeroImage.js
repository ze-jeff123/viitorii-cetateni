import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width : 100%;
    background-image : ${(props) => (`url(${props.src})`)};
    height : 80vh;
    background-size : cover;
    background-repeat: no-repeat;
`
const Overlay = styled.div`
    background-color : rgba(32,88,223,0.4);
    height : 100%;
    width : 100%;
    position : abslute;
    display : flex;
    flex-direction : column;
    align-items : center;
`
function HeroImage(props) {
    return (
        <Container src={props.src}>
            <Overlay>
                {
                    props.children
                }
            </Overlay>
        </Container>
    )
}

export default HeroImage