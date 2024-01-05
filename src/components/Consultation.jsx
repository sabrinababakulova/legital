import React from 'react'
import Form from './UI/Form'
import './Consultation.sass'


const Consultation = () => {
  return (
    <div className='consultation'>
      <div className="container">
        <div className="consultation-box">
          <div className="consultation-content">
            <div className="consultation-heading">
              <h1 className="heading">Проведем консултацию и составим варианты решения вашего вопроса</h1>
            </div>
            <div className="consultstion-question">
              <p className="question text-primary">Зачем нужна консультация?</p>
            </div>
            <div className="consultation-text">
              <p className="text">Тактика решения вашего вопроса зависит от наличия необходимых документов, легальности решения и других факторов - поэтому мы разрабатываем ее после предварительной консультации</p>
            </div>
          </div>
          <div className="form-box">
            <Form/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Consultation
