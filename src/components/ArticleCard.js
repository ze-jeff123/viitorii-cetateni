import React from 'react'
import Article from './Article'
import { CardMedia, Typography, CardContent, Card } from '@mui/material'
function ArticleCard({ article }) {
    return (
        <Card>
            <CardMedia
                component="img"
                height="140"
                image={article.image}
                alt={article.featuredImageAlt || "imagine pentru articol"}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component='div'>
                    {article.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {article.excerpt || article.content} 
                </Typography>
            </CardContent>
        </Card>
    )
}

export default ArticleCard