import React from 'react'
import './Contacts.sass'

const address = [
  {
    icon:'icon-location-pin',
    heading: 'Адрес',
    text: 'ipiscing elit. Nullam sit amet placerat sem. Integer',
  },
  {
    icon:'icon-phone-call',
    heading: 'Телефон',
    text: '+012 012011 021',
  },
  {
    icon:'icon-email',
    heading: 'Почта',
    text: 'Example@gmail.com',
  },
]

const Contacts = () => {
  return (
    <section className="contacts" id="contacts">
      <div className="container">
        <div className="contacts-box">
          <div className="contacts-block">
            <div className="block-container">
              <div className="block-heading">
                <h3 className="heading">Контактная информация</h3>
              </div>
              <div className="content">
                {address.map((item, index) => (
                  <div className="content-adress" key={index}>
                    <div className="address-top">
                      <div className="contacts-icon">
                        <i className={`icon ${item.icon}`}></i>
                      </div>
                      <p className="text sub-heading-white">{item.heading}</p>
                    </div>
                    <div className="address-bottom">
                      <p className='text'>{item.text}</p>
                    </div>
                </div>
                ))}
              </div>
            </div>
          </div>
          <div className="location">
            <iframe width="578" height="450" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=578&amp;height=450&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Population mapping</a></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts