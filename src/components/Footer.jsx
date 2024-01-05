import React from 'react'
import './Footer.sass'

const links = [
  {
      index: "about",
      title: "О нас",
      link: "#about"
  },
  {
      index: "services",
      title: "Услуги",
      link: "#services"
  },
  {
      index: "team",
      title: "Команда",
      link: "#team"
  },
  {
      index: "reviews",
      title: "Отзывы",
      link: "#reviews"
  },
  {
      index: "contacts",
      title: "Контакты",
      link: "#contacts"
  },
]

const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
        <div className="footer-box">
          <div className="footer-left-side">
            <div className="footer-logo">
                <a href='' className="logo">
                    <div className="main-logo">
                        <i className='icon-main-logo'></i>
                    </div>
                    <div className="logo-text">
                        <i className='icon-logo-heading'></i>
                        <i className='icon-logo-text'></i>
                    </div>
                </a>
            </div>
            <div className="footer-text">
              <p className="text">“mst. Donec accumsan augue sed magna pellentesque, sed feugiat nisi blandit. Nunc</p>
            </div>
            <div className="icons-group">
              <a href='#' className="icon">
                <i className='icon-telegram'></i>
              </a>
              <a href='#' className="icon">
                <i className='icon-facebook'></i>
              </a>
              <a href='#' className="icon">
                <i className='icon-instagram'></i>
              </a>
            </div>
          </div>
          <div className="footer-right-side">
            <div className="footer-connect margin-right">
              <div className="connect-heading">
                <h3 className="heading sub-heading-back">Связаться</h3>
              </div>
              <div className="connect-text">
                <div className="text-box">
                  <div className="text-box-title">
                    <p className='title'>A:</p>
                  </div>
                  <div className="text-box-text">
                    <p className="title">Ул 1 accumsan augue sed magna pellentesque,</p>
                  </div>
                </div>
                <div className="text-box">
                  <div className="text-box-title">
                    <p className="title">Е:</p>
                  </div>
                  <div className="text-box-text">
                    <p className="text">example@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="phone-box">
                <a href="" className="phone">+012932 238928 320</a>
              </div>
            </div>
            <div className="footer-navigation">
              <div className="navigation-heading">
                <h3 className="heading sub-heading-back">Навигация</h3>
              </div>
              <nav className="nav">
                  <div className="nav-box">
                      {links.map((item) => (
                          <a key={item.index} href={item.link} className="nav-link">{item.title}</a>
                      ))}
                  </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer