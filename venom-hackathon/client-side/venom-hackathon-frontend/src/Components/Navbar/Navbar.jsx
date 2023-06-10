import React from 'react'
import './Navbar.scss'
import PageButton from '../PageButton/PageButton'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <div id='navbar'>
        <PageButton title={'Logo'} link={'/'} />

        <nav>
          <LinkObjects to={'/'} title={'Services'} />
          <LinkObjects to={'/'} title={'Who are we'} />
          <LinkObjects to={'/'} title={'Help'} />
          <LinkObjects to={'/'} title={'Language'} />
        </nav>

        <span>
          <PageButton title={"Sign Up"} link={'/signup'} id={'sgu-btn'}/>
          <PageButton title={"Sign In"} link={'/signin'}/>
        </span>
    </div>
  )

  function LinkObjects({title, className, to}) {
    return(
      <Link to={to} className={className} id='link'>
        {title}
      </Link> 
    )
  }
}

export default Navbar