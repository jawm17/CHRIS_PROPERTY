
import React, { useState } from 'react';
import "./slider.css";


const Slider = ({ reviews }) => {

  const [currentReview, setCurrentReview] = useState(0);

  const goToNextReview = () => {
    setCurrentReview((prevReview) => (prevReview === reviews.length - 1 ? 0 : prevReview + 1));
  };

  const goToPrevReview = () => {
    setCurrentReview((prevReview) => (prevReview === 0 ? reviews.length - 1 : prevReview - 1));
  };

  return (
    <div className="review-slider">
      <div className="reviews-container" style={{ transform: `translateX(-${currentReview * 33.333}%)` }}>
        {reviews.map((review, index) => (
          <div className="review" key={index} style={{ backgroundImage: review.color }}>
            <img className="review-icon" src='https://thewallace.com/hs-fs/hubfs/Website/logo-tripadvisor.png?width=136&height=122&name=logo-tripadvisor.png'></img>
            <p className="review-text">{review.text}</p>
            <p className="review-author">- {review.author}</p>
          </div>
        ))}
      </div>
      <div className="slider-arrows">
        <button className="prev-arrow" onClick={goToPrevReview}>
          &lt;
        </button>
        <button className="next-arrow" onClick={goToNextReview}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Slider;
