import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const AnimeDetail = () => {
    const router = useRouter()
    const { animeId } = router.query

    const [anime, setAnime] = useState(undefined)

    useEffect(() => {
        if (animeId !== undefined) {
            axios
                .get(`https://api.jikan.moe/v4/anime/${animeId}`)
                .then((res) => {
                    setAnime(res.data)
                })
                .catch((err) => console.log(err))
        }
    }, [animeId])
    console.log(anime)

    return anime === undefined ? <p>loading...</p> : (
        <div>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={anime.data.images.jpg.image_url}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {anime.data.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {anime.data.synopsis}
                    </Typography>
                </CardContent>

            </Card>



        </div>
    )
}
export default AnimeDetail