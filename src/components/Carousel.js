import {useState} from "react";
import ArrowImage from '../assets/right-arrow.png';
import "../styles/components/Carousel.css";

function Carousel({images}) {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const showPreviousImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
        //si l´image précédante est la derniere "images.length - 1" alors on passe a la derniere image "index = 0" sinon on diminue l´index de +1
      );
    };
  
    const showNextImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
        //si l´image suivante est la derniere "images.length - 1" alors on passe a la premiere image "index = 0" sinon on augmente l´index de +1
      );
    };
  
    if (images.length === 1) {
      return <div className="Carousel">
        <img src={images[0]} alt="Carousel" />;
      </div>
    }
  
    return (
      <div className="Carousel">
        <button onClick={showPreviousImage} className="LeftButton">
          <img 
            src={ArrowImage} 
            alt="Image précédante" 
            className="LeftArrow"
          />
        </button>
        <img 
          src={images[currentImageIndex]} 
          alt="Carousel" 
        />
        <button onClick={showNextImage} className="RightButton">
          <img 
            src={ArrowImage} 
            alt="Image suivante"
            className="RightArrow"
          />
        </button>
        <p>{currentImageIndex + 1}/{images.length}</p>
      </div>
    );
  }
  
  export default Carousel;