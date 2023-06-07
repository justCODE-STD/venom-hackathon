import React from 'react'
import './Features.scss'
import features from '../../Data/Features.json'

const Features = () => {
    
  return (
    <div id='features'>
        <h1>Our Key features</h1>

        {features.map((items, index) => (
            <div className="ft-content" key={index} id={items.id}>
                <i className={items.icon}></i>
                <h1>{items.title}</h1>
            </div>
        ))}
    </div>
  )
}

export default Features