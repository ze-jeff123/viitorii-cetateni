import React from 'react'
import styled from 'styled-components'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { v4 as uuidv4 } from 'uuid';



const MyDiv = styled.div`
display : flex;
justify-content : center;
`

function divideArray(array, partLength) {
    let resultArray = [];
    let cumulativeArray = [];
    for (let i = 0; i < array.length; i++) {
        if (cumulativeArray.length === partLength) {
            resultArray.push(cumulativeArray);
            cumulativeArray = [];
        }
        cumulativeArray.push(array[i]);
    }
    if (cumulativeArray.length > 0) {
        resultArray.push(cumulativeArray);
    }
    return resultArray;
}

function divideUp(children) {
    return divideArray(children, 3).map((array) => (
        <MyDiv key={uuidv4()}>
            {
                array
            }
        </MyDiv>
    ));
}
function MyCarousel(props) {
    return (
        <Carousel showThumbs={false} showStatus={false} showArrows={true} showIndicators={false}>
            {
                divideUp(props.children)
            }
        </Carousel>
    )
}

export default MyCarousel;