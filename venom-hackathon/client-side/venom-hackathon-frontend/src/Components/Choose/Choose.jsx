import React from 'react'
import './Choose.scss'
import choose from '../../Data/Choose.json'

const Choose = () => {
  return (
    <div id='choose'>
        <h1 id='ch-h1'>Why Choose Us?</h1>

        <span>
            {choose.map((items, index) => (
                <div className="ch-content" key={index} id={items.id}>
                    <img src={items.image} alt={items.title} />
                    <h1>{items.title}</h1>
                    <p>{items.text}</p>
                </div>
            ))}
        </span>
    </div>
  )
}

export default Choose