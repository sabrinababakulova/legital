import React from 'react'
import './Stages.sass'
import Timeline from './UI/Timeline'

const Stages = () => {
  return (
    <div className='stages'>
      <div className="container">
        <div className="stages-box">
          <div className="stages-items">
            <div className="content">
              <div className="content-heading">
                <h2 className='heading-light'>Этапы работы</h2>
              </div>
              <div className="content-text">
                <p className='sub-heading-white'>ipiscing elit. Nullam sit amet placerat sem. Integer vel blandit arcu,</p>
              </div>
            </div>
          </div>
          <div className="stages-items">
            <Timeline/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stages