import React from 'react'
import './Timeline.sass'

const timelineItems = [
    {
        heading: "01",
        content: "Бесплатная консультация"
    },
    {
        heading: "02",
        content: "Заключение соглашения"
    },
    {
        heading: "03",
        content: "Оценка информации"
    },
    {
        heading: "04",
        content: "Выполнение поручения"
    },

]

const Timeline = () => {
  return (
    <div className='timeline'>
        {timelineItems.map((item, i) => (
            <div className="timeline-content" key={i}>
                <span className='icon'></span>
                <div className="text-box">
                    <h2 className='heading'>{item.heading}</h2>
                    <p className='text'>{item.content}</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Timeline