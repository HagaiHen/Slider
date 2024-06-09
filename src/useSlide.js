import { useRef } from 'react';

const useSlide = (totalSlides, setCurrentSlide) => {
  const intervalRef = useRef(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const startAutoScroll = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(nextSlide, 2000);
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return { nextSlide, prevSlide, startAutoScroll, stopAutoScroll };
};

export default useSlide;