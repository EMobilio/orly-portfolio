import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div id="containerHomEx">
        <div id="homeVid">
          <video autoPlay muted loop id="homeVideo">
            <source src="/videos/Alien Botany.mp4" type="video/mp4" />
          </video>
          <div id="workIcons">
            <Link to="/experience" className="home-button">
              <h3>about</h3>
            </Link>
            <Link to="/reel" className="home-button">
              <h3>reel</h3>
            </Link>
            <Link to="/portfolio" className="home-button">
              <h3>portfolio</h3>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

