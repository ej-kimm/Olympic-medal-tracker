import React from 'react'

const Button = ({ children, id, onClick }) => {
  return (
    <>
      {id === 'add' && <button type="submit">{children}</button>}
      {id !== 'add' && (
        <button type="button" onClick={onClick}>
          {children}
        </button>
      )}
    </>
  )
}

export default Button
