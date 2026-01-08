import { Link } from 'react-router-dom';
import homeVideo from '../../img/Alien Botany.mp4';

const Home = () => {
  return (
    <>
      <div id="containerHomEx">
        <div id="homeVid">
          <video autoPlay muted loop id="homeVideo">
            <source src={homeVideo} type="video/mp4" />
          </video>
        </div>

        <center>
          <div id="workIcons">
            <div className="icons">
              <Link to="/experience">
                <h3>about</h3>
              </Link>
            </div>

            <div className="icons">
              <Link to="/reel">
                <h3>reel</h3>
              </Link>
            </div>

            <div className="icons">
              <Link to="/portfolio">
                <h3>portfolio</h3>
              </Link>
            </div>
          </div>
        </center>
      </div>
    </>
  );
};

export default Home;

