import './TeamSliderItem.sass'

const TeamSliderItem = ({ name }) => {
  return (
    <div className="team-slider-item">
      <div className="slider-content">
        <div className="content-name">
          <h3 className="name">{name}</h3>
        </div>
        <div className="content-list">
          <ul className="list">
            <li className="list-item">Адвокат по уголовной практике в адвокатской фирме “LEGITAL”; </li>
            <li className="list-item">Опыт работы в уголовных делах и расследованиях - более 16 лет</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TeamSliderItem
