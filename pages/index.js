import Head from 'next/head'
import Header from '../components/Header/Header'
import MyHome from '../components/Home/MyHome'
import { useEffect, useState } from 'react'
import axios from 'axios'
import AnimeCard from '../components/Card/Card'
import Link from 'next/link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import styles from '../styles/Home.module.css'
export default function Home() {
  const [animes, setAnimes] = useState([])

  const fetchAnimes = async () => {
    const { data: response } = await axios.get('https://api.jikan.moe/v4/anime') //desestructuracion del objeto

    setAnimes(response.data)
  }

  useEffect(() => {
    fetchAnimes()
  }, [])

  return (
    <div className={styles.body}>
      <Head>
        <title>AnimesFlix</title>
      </Head>
      <Header></Header>
      <MyHome></MyHome>
      <Grid container sx={{
        width:'100%',
        padding: 10,
        marginTop: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap'

      }}>
        {animes.map((anime) => (
          <Link href={`animesLista/${anime.mal_id}`}
            key={anime.title} >

            <Grid item xs={12} sm={6} md={4} lg={4} >
              <Box sx={{padding: 5}}>
                <AnimeCard

                  titulo={anime.title}
                  rating={anime.rating}
                  imagen={anime.images.webp.image_url}
                />
              </Box>
            </Grid>
          
        </Link>
      ))}
      </Grid>
    </div>
  )
}