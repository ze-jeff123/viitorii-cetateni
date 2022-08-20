import React from 'react'
import DOMPurify from 'dompurify';
import styled from 'styled-components';
import "../styles.css";

const StyledImage = styled.img`
    width : ${({post})=> ('image width' in post.content.metadata) ? `${post.content.metadata['image width']}%` : '50%'};
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
    if (!("skip featured image in post" in article.content.metadata)) {
        return false;
    }
    return article.content.metadata['skip featured image in post'];
}
function Article({ post }) {
    return (
        <StyledDiv>
            {
                post &&
                <>
                    {
                        <StyledHeader>{post.content.metadata.title}</StyledHeader>
                    }

                    {
                        (("featured image" in post.content.metadata) && !shouldSkipFeaturedImage(post)) &&
                        <StyledImage post={post} src={post.content.metadata['featured image']} alt={("featured image alt" in post.content.metadata) ? post.content.metadata['featured image alt'] : 'featured image of the post'}></StyledImage>
                    }
                    <div className="markdown-container" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content.content) }}></div>
                </>
            }
        </StyledDiv>
    )
}

export default Article