const useSlide = (totalSlides, setCurrentSlide) => {

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return { nextSlide, prevSlide };
};

export default useSlide;