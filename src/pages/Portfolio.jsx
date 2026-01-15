import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const [currentIndices, setCurrentIndices] = useState({videos: 0, design: 0, photography: 0});
  const [fading, setFading] = useState(false);

  const imageRotations = {
    videos: [
      "/images/digital-drawing/Dinosaur Icon.webp",
      "/images/digital-drawing/Blooming Hands.webp",
    ],
    design: [
      "/images/digital-drawing/Blooming Hands.webp",
    ],
    photography: [
      "/images/photography/still-life/Flowers and Water.jpg",
    ],
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrentIndices(prev => ({
          videos: (prev.videos + 1) % imageRotations.videos.length,
          design: (prev.design + 1) % imageRotations.design.length,
          photography: (prev.photography + 1) % imageRotations.photography.length,
        }));
        setFading(false);
      }, 500); 
      
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div>
        <center>
          <div id="portIcons">
            <div className="pIcons">
              <Link to="/videos">
                <img className="portIcons" src={imageRotations.videos[currentIndices.videos]} alt="animation icon" style={{ 
                  opacity: fading ? 0 : 1,
                  transition: 'opacity 0.5s ease-in-out'
                }} />
                <h3>videos</h3>
              </Link>
            </div>

            <div className="pIcons">
              <Link to="/design">
                <img className="portIcons" src={imageRotations.design[currentIndices.design]} alt="design icon" />
                <h3>design</h3>
              </Link>
            </div>

            <div className="pIcons">
              <Link to="/photography">
                <img className="portIcons" src={imageRotations.photography[currentIndices.photography]} alt="photography icon" />
                <h3>photography</h3>
              </Link>
            </div>
          </div>
        </center>
      </div>
    </>
  );
};

export default Portfolio;

