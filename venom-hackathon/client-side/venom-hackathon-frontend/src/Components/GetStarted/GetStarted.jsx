import React from 'react'
import './GetStarted.scss'
import PageButton from '../PageButton/PageButton'

const GetStarted = () => {
  return (
    <div id='gt-started'>
        <h1>
            Open your doors to <br />
            cryptocurrency payments, <br />
            no matter the location.
        </h1>

        <PageButton link={'/signup'} title={'Get Started'} id={'gt-str-btn'} />
    </div>
  )
}

export default GetStarted