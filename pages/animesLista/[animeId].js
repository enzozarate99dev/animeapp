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
                margin: 0
            }}>
                <Grid item>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={anime.data.images.jpg.large_image_url}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {anime.data.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {anime.data.synopsis.slice(0, 300)}
                            </Typography>
                        </CardContent>

                    </Card>
                </Grid>
            </Grid>




        </div>
    )
}
export default AnimeDetail