import React from 'react'
import DOMPurify from 'dompurify';
import styled from 'styled-components';

const StyledImage = styled.img`
    min-width : 50%;
    max-width : 100%;
`

const StyledHeader = styled.h1`
    font-size : 3rem;
    border-bottom : 2px solid gray;
`
const StyledDiv = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
    padding : 10px 50px;
`

function shouldSkipFeaturedImage(article) {
    if (!("skipFeaturedImage" in article)) {
        return false;
    }
    return article.skipFeaturedImage;
}
function Article({ post }) {
    return (
        <StyledDiv>
            {
                post&&
                <>
                {
                    <StyledHeader>{post.content.metadata.title}</StyledHeader>
                }
                {<></>
                    //   (("featuredImage" in article) && !shouldSkipFeaturedImage(article)) &&
                    //  <StyledImage src={article.featuredImage} alt={("featuredImageAlt" in article) ? article.featuredImageAlt : 'featured image of the post'}></StyledImage>
                }
                <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content.content) }}></div>
            </>
            }
        </StyledDiv>
    )
}

export default Article