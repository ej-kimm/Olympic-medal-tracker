import React from 'react'

const MedalFormInput = ({ id, label, type, placeholder, value, onChange }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  )
}

export default MedalFormInput
