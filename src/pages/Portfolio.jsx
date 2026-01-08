import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <>
      <div>
        <center>
          <div id="portIcons">
            <div className="pIcons">
              <Link to="/animation">
                <img className="portIcons" src="/images/digital-drawing/Dinosaur Icon.png" alt="animation icon" />
                <h3>animation</h3>
              </Link>
            </div>

            <div className="pIcons">
              <Link to="/design">
                <img className="portIcons" src="/images/digital-drawing/Blooming Hands.jpg" alt="design icon" />
                <h3>design</h3>
              </Link>
            </div>

            <div className="pIcons">
              <Link to="/photography">
                <img className="portIcons" src="/images/photography/still-life/Flowers and Water.jpg" alt="photography icon" />
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

