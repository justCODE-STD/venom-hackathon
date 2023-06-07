import React from 'react'
import './Input.scss'

const Input = ({name, placeholder, type, value, onChange}) => {
  return (
    <input type={type} 
      placeholder={placeholder} 
      name={name} 
      value={value} 
      onChange={onChange}
    />
  )
}

export default Input