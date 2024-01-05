import React from 'react'
import Achievements from './UI/Achievements'
import WhyUsItem from './UI/WhyUsItem'
import './About.sass'

const AchivementsItems = [
  {
    index: 1,
    heading: "+30",
    text: "Счастливых клиентов"
  },
  {
    index: 2,
    heading: "+5",
    text: "Лет опыта"
  },
  {
    index: 3,
    heading: "97%",
    text: "Выйгранных кейсов"
  }
]

const WhyUsItems = [
  {
    index: 1,
    number: "01",
    heading: "Конфиденциальность",
    text: "em ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    index: 2,
    number: "02",
    heading: "Конфиденциальность",
    text: "em ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    index: 3,
    number: "03",
    heading: "Конфиденциальность",
    text: "em ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    index: 4,
    number: "04",
    heading: "Конфиденциальность",
    text: "em ipsum dolor sit amet, consectetur adipiscing elit."
  }
]

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-box">
        <div className="container">
          <div className="about-container">
            <div className="about-items">
              <div className="item">
                <a href='' className="icon-logo">
                  <div className="main-logo">
                      <i className='icon-main-logo'></i>
                  </div>
                  <div className="logo-text">
                      <i className='icon-logo-heading'></i>
                      <i className='icon-logo-text'></i>
                  </div>
                </a>
              </div>
              <div className="item item-box">
                <div className="item-heading">
                  <h3 className='heading-light'>О компании</h3>
                </div>
                <div className="item-text">
                  <p className="text text-primary">Год основания 2010</p>
                </div>
                <div className="item-text">
                  <p className="sub-heading-white">Оказываем юридическую помощь в области административного, жилищного, гражданского и уголовного правываем административного, жилищного, гражданского и уголовного правываем</p>
                </div>
              </div>
              <div className="item">
                {AchivementsItems.map((item) => (
                  <div className="achievements-items" key={item.index}>
                     <Achievements heading={item.heading} text={item.text}/>
                  </div>
                ))}
              </div>
            </div>
            <div className="about-content">
              <div className="item-heading heading-line">
                <h3 className='heading-light'>Почему обращаются к нам</h3>
              </div>
              <div className="item">
                {WhyUsItems.map((item) => (
                  <div className="why-us" key={item.index}>
                    <WhyUsItem number={item.number} heading={item.heading} text={item.text}/>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About