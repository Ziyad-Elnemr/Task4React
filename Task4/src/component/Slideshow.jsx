import React, { useState, useEffect } from "react";

const Slideshow = ({ images = [] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageErrors, setImageErrors] = useState({});

  // Default images if none provided
  const defaultImages = [
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&h=400&fit=crop",
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=400&fit=crop",
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=400&fit=crop",
    "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=400&fit=crop",
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=400&fit=crop",
  ];

  const slideImages = images.length > 0 ? images : defaultImages;

  const fallbackImage =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI2NjY2NjYyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjI0IiBmaWxsPSIjNjY2NjY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iMC4zZW0iPkZlYXR1cmVkIFByb2R1Y3Q8L3RleHQ+PC9zdmc+";

  const handleImageError = (index) => {
    setImageErrors((prev) => ({
      ...prev,
      [index]: true,
    }));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(timer);
  }, [slideImages.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + slideImages.length) % slideImages.length
    );
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slideImages.length);
  };

  return (
    <div className="slideshow-container position-relative mb-5">
      <div
        id="productCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          {slideImages.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#productCarousel"
              data-bs-slide-to={index}
              className={index === currentSlide ? "active" : ""}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>

        <div className="carousel-inner">
          {slideImages.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${
                index === currentSlide ? "active" : ""
              }`}
            >
              <img
                src={imageErrors[index] ? fallbackImage : image}
                className="d-block w-100"
                alt={`Slide ${index + 1}`}
                style={{ height: "400px", objectFit: "cover" }}
                onError={() => handleImageError(index)}
                loading="lazy"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Featured Product {index + 1}</h5>
                <p>Discover our amazing products</p>
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#productCarousel"
          data-bs-slide="prev"
          onClick={goToPrevious}
        >
          <span className="carousel-control-prev-icon"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#productCarousel"
          data-bs-slide="next"
          onClick={goToNext}
        >
          <span className="carousel-control-next-icon"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slideshow;
