import React, { useState } from 'react'
import AddMedal from './components/AddMedal'

export default function App() {
  const [medals, setMedals] = useState([])

  return (
    <>
      <AddMedal setMedals={setMedals} />
    </>
  )
}
