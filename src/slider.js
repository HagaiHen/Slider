import React, { useState, useEffect } from 'react';
import useSlide from './useSlide';
import './slider.css';

const slides = [
    { id: 1, content: 'Slide 1' },
    { id: 2, content: 'Slide 2' },
    { id: 3, content: 'Slide 3' },
  ];


const Slider = () => {

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoScroll, setIsAutoScroll] = useState(false);
  
  const { nextSlide, prevSlide, startAutoScroll, stopAutoScroll } = useSlide(slides.length, setCurrentSlide);

  useEffect(() => {
    if (isAutoScroll) {
      startAutoScroll();
    } else {
      stopAutoScroll();
    }
  }, [isAutoScroll]);

  return (
    <div className="slider">
      <div className="slide">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            style={{ display: index === currentSlide ? 'block' : 'none' }}
          >
            {slide.content}
          </div>
        ))}
      </div>
      <div className="controls">
        <button onClick={prevSlide}>Prev</button>
        <button onClick={nextSlide}>Next</button>
        <button onClick={() => setIsAutoScroll(!isAutoScroll)}>
          {isAutoScroll ? 'Stop' : 'Auto'}
        </button>
      </div>
    </div>
  );
};

export default Slider;