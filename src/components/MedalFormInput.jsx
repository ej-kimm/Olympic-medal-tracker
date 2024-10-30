import React from 'react'
import styles from '../styles/MedalFormInput.module.css'

const MedalFormInput = ({ id, label, type, placeholder, value, onChange }) => {
  return (
    <div className={styles.inputGroup}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default MedalFormInput
