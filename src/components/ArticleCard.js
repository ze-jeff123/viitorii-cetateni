import React from 'react'
import { CardMedia, Typography, CardContent, Card } from '@mui/material'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import htmlToPlain from "../global/htmlToPlain";
const StyledCard = styled(Card)`
    max-width : 300px;
    height : 300px;
    text-overflow : ellipsis;
    background-color : #c8d6f7;
    &:hover {
        filter : brightness(0.8);
        cursor : pointer;
    }
`
const StyledLink = styled(Link)`
    text-decoration : none;
    color : black;
`

function ArticleCard({ article }) {
    return (
        <div>
            <StyledLink to={`/${article.slug}`}>
                <StyledCard>
                    <CardMedia
                        component="img"
                        height="140"
                        image={article.content.metadata['featured image']}
                        alt={article.content.metadata['featured image'] || "imagine pentru articol"}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component='div'>
                            {article.content.metadata.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {htmlToPlain(article.content.content, {wordwrap:130}).slice(0,80)+'...'}
                        </Typography>
                    </CardContent>
                </StyledCard>
            </StyledLink>
        </div>
    )
}

export default ArticleCard