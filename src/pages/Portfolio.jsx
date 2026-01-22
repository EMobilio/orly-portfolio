import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const RotatingImage = ({ images, alt, label }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  const nextIndex = (currentIndex + 1) % images.length;

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setFadeOut(true);

      setTimeout(() => {
        setCurrentIndex(nextIndex);
        setFadeOut(false);
      }, 1000);
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex, images.length, nextIndex]);

  return (
    <div className="pIcons">
      <Link to={`/${label.toLowerCase()}`} className="image-wrapper" >
        <div className="image-container">
          <img
            key={currentIndex}
            className="portIcons rotating-image"
            src={images[currentIndex].src}
            alt={alt}
            style={{
              objectPosition: images[currentIndex].pos,
              opacity: fadeOut ? 0 : 1,
              transition: 'opacity 1s ease-in-out',
            }}
          />
          <img
            key={nextIndex}
            className="portIcons rotating-image"
            src={images[nextIndex].src}
            alt={alt}
            style={{
              objectPosition: images[nextIndex].pos,
              opacity: fadeOut ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
            }}
          />
        </div>
        <h3>{label}</h3>
      </Link>
    </div>
  );
};


const Portfolio = () => {
  const imageRotations = {
    videos: [
      { src:"/images/digital-drawing/Dinosaur Icon.webp", pos: "45% 0" },
      { src: "/images/video/What_To_Eat.webp", pos: "50% 0" },
      { src: "/images/video/Pictorus_show.webp", pos: "50% 0" },
    ],
    design: [
      { src: "/images/digital-drawing/Omer_Adam_Tribute.webp", pos: "50% 0" },
      { src: "/images/digital-drawing/Mobilio_Orly_ MeAfela L’Ora_8x10.png", pos: "50% 0" },
      { src: "/images/digital-drawing/Blooming Hands.webp", pos: "50% 0" },
    ],
    photography: [
      { src: "/images/photography/portrait/DSC_0316_edited.webp", pos: "50% 0" },
      { src: "/images/photography/still-life/Flowers and Water.jpg", pos: "50% 0" },
      { src: "/images/photography/portrait/DSC_0412.webp", pos: "50% 0" },
    ],
  };

  return (
    <div>
      <center>
        <div id="portIcons">
          <RotatingImage 
            images={imageRotations.videos} 
            alt="video icon" 
            label="video"
          />
          <RotatingImage 
            images={imageRotations.design} 
            alt="design icon" 
            label="design"
          />
          <RotatingImage 
            images={imageRotations.photography} 
            alt="photography icon" 
            label="photography"
          />
        </div>
      </center>
    </div>
  );
};

export default Portfolio;