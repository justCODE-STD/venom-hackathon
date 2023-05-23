import React from 'react'
import './Navbar.scss'
import PageButton from '../PageButton/PageButton'

const Navbar = () => {
  return (
    <div id='navbar'>
        Navbar

        <PageButton title={"Login"} link={'/login'}/>
    </div>
  )
}

export default Navbar