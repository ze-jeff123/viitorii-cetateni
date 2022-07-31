import React from 'react'
import Article from './Article'
import { CardMedia, Typography, CardContent, Card } from '@mui/material'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { slugifyArticle } from '../global/articlesUtility'
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
            <StyledLink to={`/articole/${slugifyArticle(article)}`}>
                <StyledCard>
                    <CardMedia
                        component="img"
                        height="140"
                        image={article.featuredImage}
                        alt={article.featuredImageAlt || "imagine pentru articol"}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component='div'>
                            {article.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {article.excerpt || article.content.slice(0,80)+'...'}
                        </Typography>
                    </CardContent>
                </StyledCard>
            </StyledLink>
        </div>
    )
}

export default ArticleCard