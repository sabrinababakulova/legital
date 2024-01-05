import React from 'react'
import './Achievements.sass'

const Achievements = ({heading, text}) => {
  return (
    <div className="achievements">
      <div className="achievements-box">
        <div className="box-heading">
          <h3 className="heading text-primary">{heading}</h3>
        </div>
        <div className="box-text">
          <p className="text">{text}</p>
        </div>
      </div>
    </div>
  )
}

export default Achievements