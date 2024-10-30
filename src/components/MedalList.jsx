import React from 'react'
import Button from './ui/Button'
import styles from '../styles/MedalList.module.css'

export default function MedalList({ medals, setMedals }) {
  const sortedMedals = [...medals].sort((a, b) => b.gold - a.gold)

  const handleDelete = (country) => {
    setMedals(medals.filter((medal) => medal.country !== country))
  }

  return (
    <>
      {!medals.length > 0 && (
        <p className={styles.empty}>아직 추가된 국가가 없습니다!!</p>
      )}
      {medals.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>국가명</th>
              <th>금메달</th>
              <th>은메달</th>
              <th>동메달</th>
              <th>액션</th>
            </tr>
          </thead>
          <tbody>
            {sortedMedals.map((medal) => (
              <tr key={medal.country}>
                <td>{medal.country}</td>
                <td>{medal.gold}</td>
                <td>{medal.silver}</td>
                <td>{medal.bronze}</td>
                <td>
                  <Button
                    id="remove"
                    onClick={() => handleDelete(medal.country)}
                  >
                    삭제
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  )
}
