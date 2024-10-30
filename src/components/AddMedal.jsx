import React, { useState } from 'react'
import MedalFormInput from './MedalFormInput'
import Button from './ui/Button'

export default function AddMedal({ medals, setMedals }) {
  const [currentMedal, setCurrentMedal] = useState({
    country: '',
    gold: 0,
    silver: 0,
    bronze: 0,
  })

  const handleInputChange = (e) => {
    const { id, value } = e.target
    if (id === 'country' || (Number(value) >= 0 && Number(value) <= 99)) {
      setCurrentMedal({
        ...currentMedal,
        [id]: id === 'country' ? value : Number(value),
      })
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    if (!currentMedal.country) {
      alert('국가명을 입력해주세요!')
      return
    }
    if (medals.some((medal) => medal.country === currentMedal.country)) {
      alert('이미 존재하는 국가입니다')
      return
    }

    setMedals([...medals, currentMedal])
    setCurrentMedal({ country: '', gold: 0, silver: 0, bronze: 0 })
  }
  const handleUpdate = () => {
    if (!currentMedal.country) {
      alert('국가명을 입력해주세요!')
      return
    }
    setMedals(
      medals.map((medal) =>
        medal.country === currentMedal.country ? currentMedal : medal
      )
    )
    setCurrentMedal({ country: '', gold: 0, silver: 0, bronze: 0 })
  }

  return (
    <form onSubmit={handleSubmit}>
      <MedalFormInput
        id="country"
        label="국가명"
        type="text"
        value={currentMedal.country}
        placeholder="국가 입력"
        onChange={handleInputChange}
      />
      <MedalFormInput
        id="gold"
        label="금메달"
        type="number"
        value={currentMedal.gold}
        onChange={handleInputChange}
      />
      <MedalFormInput
        id="silver"
        label="은메달"
        type="number"
        value={currentMedal.silver}
        onChange={handleInputChange}
      />
      <MedalFormInput
        id="bronze"
        label="동메달"
        type="number"
        value={currentMedal.bronze}
        onChange={handleInputChange}
      />

      <Button id="add">국가 추가</Button>
      <Button id="update" onClick={handleUpdate}>
        업데이트
      </Button>
    </form>
  )
}
