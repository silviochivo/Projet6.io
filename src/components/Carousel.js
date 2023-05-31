import { useState } from "react";

function Carousel({ images }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    const showPreviousImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };
  
    const showNextImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    if (images.length === 1) {
      return <img src={images[0]} alt="Carousel" />;
    }
  
    return (
      <div className="Carousel">
        <button onClick={showPreviousImage}>&#8249;</button>
        <img src={images[currentImageIndex]} alt="Carousel" />
        <button onClick={showNextImage}>&#8250;</button>
      </div>
    );
  }
  
  export default Carousel;