"use client"

import axios from "axios"
import { useEffect, useState } from "react"
import Card from "./Card/Card"
import styles from './page.module.css'

export default function Home() {

  const[movie, setMovie] = useState([])

  useEffect(()=>{
    axios.get('https://www.omdbapi.com/?apikey=45f0782a&s=war')
    .then(res => setMovie(res.data.Search))
    .catch(err => console.log(err))
  }, [])

  return (
    <main className={styles.container}>
      {
        movie.length > 0 && movie.map((item, idx) => <Card movieCard = {item} key = {idx}/>)
      }
    </main>
  )
}
