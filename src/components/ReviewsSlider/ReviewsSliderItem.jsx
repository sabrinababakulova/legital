import React from 'react'
import StarRating from '../UI/StarRating'
import './ReviewsSliderItem.sass'

const ReviewsSliderItem = () => {
  return (
    <div className='reviews-slider-item'>
        <div className="reviews-slider-item-container">
            <StarRating/>
            <div className="reviews-slider-item-content">
                <div className="item-heading sub-heading-white">
                    <h3 className='heading'>Отличная работа</h3>
                </div>
                <div className="item-text">
                    <p className="text">magna pellentesque, sed feugiat nisi blandit. Nunc tristique nulяmst. Donec accumsan augue sed magna</p>
                </div>
            </div>
            
            <div className="item-name">
                <p className="name">-Aртем И</p>
            </div>
        </div>
        
    </div>
  )
}

export default ReviewsSliderItem