import React, { useState } from 'react'
import AddMedal from './components/AddMedal'
import MedalList from './components/MedalList'
import styles from './App.module.css'

export default function App() {
  const [medals, setMedals] = useState([])

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>2024 파리 올림픽</h1>
      <AddMedal medals={medals} setMedals={setMedals} />
      <MedalList medals={medals} setMedals={setMedals} />
    </section>
  )
}
