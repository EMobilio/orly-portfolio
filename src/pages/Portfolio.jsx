import { Link } from 'react-router-dom';
import dinosaurIcon from '../assets/images/digital-drawing/Dinosaur Icon.png';
import bloomingHands from '../assets/images/digital-drawing/Blooming Hands.jpg';
import flowersWater from '../assets/images/photography/still-life/Flowers and Water.jpg';

const Portfolio = () => {
  return (
    <>
      <div>
        <center>
          <div id="portIcons">
            <div className="pIcons">
              <Link to="/animation">
                <img className="portIcons" src={dinosaurIcon} alt="animation icon" />
                <h3>animation</h3>
              </Link>
            </div>

            <div className="pIcons">
              <Link to="/design">
                <img className="portIcons" src={bloomingHands} alt="design icon" />
                <h3>design</h3>
              </Link>
            </div>

            <div className="pIcons">
              <Link to="/photography">
                <img className="portIcons" src={flowersWater} alt="photography icon" />
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

