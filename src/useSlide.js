import { useRef } from 'react';


// Custom hook for handling slide functionalities
const useSlide = (totalSlides, setCurrentSlide) => {

    // Refrence to hold the interval for auto-scrolling
    const intervalRef = useRef(null);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const startAutoScroll = () => {
        if (intervalRef.current) return;
        // Run the function every 2000ms (2 seconds)
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