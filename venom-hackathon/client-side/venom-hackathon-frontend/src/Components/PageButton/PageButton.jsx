import React from 'react'
import './PageButton.scss'
import { useNavigate } from 'react-router-dom'

const PageButton = ( {link, id, title, image, children} ) => {
    const navigate = useNavigate()

    function handleClick(){
        navigate(link)
    }
  return (
    <button type='button' className='pagebutton' id={id} onClick={handleClick}>
        {title}
        {children}
        <img src={image} alt="" />
    </button>
  )
}

export default PageButton