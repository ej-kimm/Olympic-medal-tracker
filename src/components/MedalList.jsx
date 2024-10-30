import React from 'react'
import { AddOrUpdateButton } from './ui/Button'

export default function MedalList({ medals }) {
  return (
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
        {medals.map((medal) => (
          <tr key={medal.country}>
            <td>{medal.country}</td>
            <td>{medal.gold}</td>
            <td>{medal.silver}</td>
            <td>{medal.bronze}</td>
            <td>
              <AddOrUpdateButton>삭제</AddOrUpdateButton>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
