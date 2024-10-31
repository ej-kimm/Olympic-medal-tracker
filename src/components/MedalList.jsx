import React, { useEffect, useState } from 'react'
import Button from './ui/Button'
import styles from '../styles/MedalList.module.css'

const arrow = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    viewBox="0 0 16 16"
    style={{ marginLeft: '5px', verticalAlign: 'middle' }}
  >
    <path d="M8 12.5l-5-5h10l-5 5z" />
  </svg>
)

export default function MedalList({ medals, setMedals }) {
  const [arrowIndex, setArrowIndex] = useState({
    gold: true,
    silver: false,
    bronze: false,
  })
  const [sortedMedals, setSortedMedals] = useState([])

  const handleDelete = (country) => {
    setMedals(medals.filter((medal) => medal.country !== country))
  }
  const handleArrowClick = (type) => {
    setArrowIndex({
      gold: type === 'gold',
      silver: type === 'silver',
      bronze: type === 'bronze',
    })
  }

  useEffect(() => {
    const type = arrowIndex.gold
      ? 'gold'
      : arrowIndex.silver
      ? 'silver'
      : 'bronze'
    const newSortedMedals = [...medals].sort((a, b) => {
      if (type === 'gold') return b.gold - a.gold
      if (type === 'silver') return b.silver - a.silver
      if (type === 'bronze') return b.bronze - a.bronze
    })
    setSortedMedals(newSortedMedals)
  }, [medals, arrowIndex])

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
              <th>
                <button type="button" onClick={() => handleArrowClick('gold')}>
                  금메달
                  {arrowIndex.gold && arrow}
                </button>
              </th>
              <th>
                <button
                  type="button"
                  onClick={() => handleArrowClick('silver')}
                >
                  은메달
                  {arrowIndex.silver && arrow}
                </button>
              </th>
              <th>
                <button
                  type="button"
                  onClick={() => handleArrowClick('bronze')}
                >
                  동메달
                  {arrowIndex.bronze && arrow}
                </button>
              </th>
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
