import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import useAuth from '../../hooks/useAuth'
import axios from 'axios'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
const AnimeDetail = () => {
    const router = useRouter()
    const { animeId } = router.query //ver mentoria router query
    const auth = useAuth()
    const [anime, setAnime] = useState(undefined)

    useEffect(() => {
        const user = auth.getUserData()
        if (user === null) router.push('/login')
    }, [])

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

    return anime === undefined ? <p>loading...</p> : (
        <div>
            <Grid container sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                marginTop: 5
            }}>
                <Grid item>
                    <Card sx={{ maxWidth: 345,  backgroundColor:'#7D1935'}}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="300"
                            image={anime.data.images.jpg.large_image_url}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" color="white">
                                {anime.data.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {anime.data.synopsis.slice(0, 300)}
                            </Typography>
                            <Grid container 
                            sx={{display: 'flex',
                             justifyContent: 'space-between'}}>
                            <IconButton aria-label="ArrowBackIosNewIcon" onClick={() => router.push('../')}>
                                <ArrowBackIosNewIcon />
                            </IconButton>
                            <IconButton aria-label="Play" onClick={() => router.push(anime.data.trailer.url)}>
                                <PlayCircleIcon />
                            </IconButton>
                        </Grid>
                    </CardContent>

                </Card>
            </Grid>
        </Grid>




        </div >
    )
}
export default AnimeDetail