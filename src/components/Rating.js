import Star from "../assets/Orange-Star.png"
import Star2 from '../assets/Grey-Star.png'

function Rating ({ Note }) {
    const stars = [];
    const stars2 = [];
  
    // Afficher les étoiles
    for (let i = 0; i < Note; i++) {
      stars.push(<img key={i} src={Star} alt="Star" />);
    }
  
    // Afficher les étoiles2
    const totalStars2 = 5 - Note;
    for (let i = 0; i < totalStars2; i++) {
      stars2.push(<img key={i} src={Star2} alt="Star2" />);
    }

    console.log(stars)
  
    return (
      <div className="Rating">
        {stars}
        {stars2}
      </div>
    );
  }
export default Rating ;