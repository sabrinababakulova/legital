import React from 'react'
import Tab from './UI/Tabs'
import './Services.sass'

const data = [
  {
    id : '1',
    tabNumbers: "01",
    tabTitle: "Проверка недвижимости",
    contentHeading: 'Tab Content 1',
    boxTitle: "Составление договоров",
    boxText: "Описацие процессов em ipsum dolor sit amet, consectetur adipiscing elit. dolor sit amet, consec",
  },
  {
    id : '2',
    tabNumbers: "02",
    tabTitle: "Составление договоров",
    contentHeading: 'Tab Content 2',
    boxTitle: "Составление договоров",
    boxText: "Описацие процессов em ipsum dolor sit amet, consectetur adipiscing elit. dolor sit amet, consec",
  },
  {
    id : '3',
    tabNumbers: "03",
    tabTitle: "Защита интересов в суде",
    contentHeading: 'Tab Content 3',
    boxTitle: "Составление договоров",
    boxText: "Описацие процессов em ipsum dolor sit amet, consectetur adipiscing elit. dolor sit amet, consec",
  },
  {
    id : '4',
    tabNumbers: "04",
    tabTitle: "Семейные споры",
    contentHeading: 'Tab Content 4',
    boxTitle: "Составление договоров",
    boxText: "Описацие процессов em ipsum dolor sit amet, consectetur adipiscing elit. dolor sit amet, consec",
  },
  {
    id : '5',
    tabNumbers: "05",
    tabTitle: "Защита интересов в суде",
    contentHeading: 'Tab Content 5',
    boxTitle: "Составление договоров",
    boxText: "Описацие процессов em ipsum dolor sit amet, consectetur adipiscing elit. dolor sit amet, consec",
 },
 {
    id : '6',
    tabNumbers: "06",
    tabTitle: "Семейные споры",
    contentHeading: 'Tab Content 6',
    boxTitle: "Составление договоров",
    boxText: "Описацие процессов em ipsum dolor sit amet, consectetur adipiscing elit. dolor sit amet, consec",
 }
]


const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services-box">
          <div className="services-block">
            <div className="services-heading">
              <h3 className="heading-dark">Наши услуги</h3>
            </div>
            <div className="services-text">
              <p className="text sub-heading-back">ipiscing elit. Nullam sit amet placerat sem. Integer vel blandit arcu,</p>
            </div>
          </div>
          <div className="services-block">
            <Tab data={data}/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services