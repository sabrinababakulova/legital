import React from 'react'
import './Reviews.sass'
import ReviewsSlider from './ReviewsSlider/ReviewsSlider'
import Button from './UI/Button'

const Reviews = () => {
  return (
    <section className="reviews" id="reviews">
      <div className="container">
        <div className="reviews-box">
          <div className="reviews-heading">
            <h3 className="heading">Отзывы от наших клиентов</h3>
          </div>
          <div className="reviews-content">
            <div className="content-heading">
              
            </div>
            <div className="content-body">
              <ReviewsSlider/>
            </div>
            <div className="riwiews-button">
              <Button className="md" text="Оставить отзыв"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reviews