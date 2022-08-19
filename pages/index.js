import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import Card from '../components/Card'

import Link from 'next/link'
export default function Home() {
  const [animes, setAnimes] = useState([])

  const fetchAnimes = async () => {
    const { data: response } = await axios.get('https://api.jikan.moe/v4/anime')

    setAnimes(response.data)
  }

  useEffect(() => {
    fetchAnimes()
  }, [])

  return (
    <div>
      {animes.map((anime) => (
        <Link href={`animesLista/${anime.mal_id}`}
          key={anime.mal_id}>
          <div>
            <h1>{anime.title}</h1>
            <img src={anime.images_url}></img>
          </div>
        </Link>
      ))}
    </div>
  )
}