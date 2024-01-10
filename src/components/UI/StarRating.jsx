import React, { useState } from 'react'
import './StarRating.sass'

const StarRating = () => {
    const [rating, setRating] = useState(null)
    const [rateColor, setColor] = useState(null)
  return (
    <div className='star-rating'>
        {[...Array(5)].map((star, index) => {
            const currentRate = index + 1
            return(
                <div className='star-item' key={index}>
                    <label>
                        <input className='input-star' type="radio" name='rate' value={currentRate} onClick={() => setRating(currentRate)}/>
                        <i  className={`icon-star-full ${currentRate <= (rateColor || rating) ? "active" : ' '}`}></i>
                    </label>
                </div>
                
            )
        })}
    </div>
  )
}

export default StarRating