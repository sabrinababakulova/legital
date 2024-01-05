import React from 'react'
import './Form.sass'

const Form = () => {
  return (
    <form className="form">
        <div className="form-heading">
            <h1 className="heading">Записаться на консультацию</h1>
        </div>
        <div className="form-inputs">
            <div className="input-box">
                <div className="box">
                <input type="text" className="input" required />
                <span className='label'>Ваше имя</span>
                </div>
                <div className="box">
                <input type="text" className="input" required />
                <span className='label'>Ваша фамилия</span>
                </div>
            </div>
            <div className="input-box">
                <div className="box">
                <input type="text" className="input" required />
                <span className='label'>E-mail</span>
                </div>
                <div className="box">
                <input type="text" className="input" required />
                <span className='label'>Телефон</span>
                </div>
            </div>
            <div className="input-box">
                <div className="box w-full">
                <input type="text" className="input" required />
                <span className='label'>Ваше сообщение</span>
                </div>
            </div>
            <div className="submit-button">
                <button className='button btn' type='submit'>
                <p className="text">попробуйте нас</p>
                <p className="heading">в деле</p>
                </button>
            </div>
        </div>
  </form>
  )
}

export default Form