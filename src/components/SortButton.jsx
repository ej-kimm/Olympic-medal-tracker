import React from 'react'

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

const SortButton = ({ medal, sortType, setSortType }) => {
  const handleClick = () => {
    setSortType(medal)
  }

  return (
    <button type="button" onClick={handleClick}>
      {medal === 'gold' ? '금메달' : medal === 'silver' ? '은메달' : '동메달'}
      {sortType === medal && arrow}
    </button>
  )
}

export default SortButton
