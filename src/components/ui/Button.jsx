import React from 'react'
import styles from '../../styles/Button.module.css'

const Button = ({ children, id, onClick }) => {
  return (
    <>
      {id === 'add' && (
        <button className={styles.commonButton} type="submit">
          {children}
        </button>
      )}
      {id !== 'add' && (
        <button
          className={
            id === 'remove' ? styles.removeButton : styles.commonButton
          }
          type="button"
          onClick={onClick}
        >
          {children}
        </button>
      )}
    </>
  )
}

export default Button
