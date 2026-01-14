import { Link, useLocation } from 'react-router-dom';
import vimeoIcon from '../../assets/icons/vimeo-icon.png';
import linkedinIcon from '../../assets/icons/linkedin-icon.png';
import instagramIcon from '../../assets/icons/instagram-icon.png';
import './Footer.css';

const quotes = [
  '"Ah but if less is more, then just think how much more \'more\' would be" -Frasier Crane',
  '“I flew too close to the sun on the wings of pastrami.” -George Costanza',
  '“Using mainly spoons, we dig a tunnel under the city and release it into the wild.” -Mike Wazowski',
  '“All right that’s enough, I gotta go home and take a nap.” -George Costanza',
  '“A person should not believe in an ‘ism,’ he should believe in himself.” -Ferris Bueller',
  '“Let’s see, where were we? In the pit of despair.” -Grandpa',
  '“The song was catchy but the choreography was terrible.” -Wolf W. Wolf',
  '“She can’t sing, she can’t act, and she can’t dance. A triple threat.” -Singin in the Rain',
  '“What’s the point of a helmet in skydiving? In case you land on your head?” Crow T. Robot',
  '“I got responsibilities now. That means I’m not allowed to have fun anymore for the rest of my life.” -Angelica Pickles',
  '“You heard about Pluto? That’s messed up right?” -Burton Guster',
  '“I worked myself up from nothing to a state of extreme poverty.” -Groucho Marx',
  '“I came down here for a party, what happens? Nothing. Not even ice cream. The gods look down and laugh.” -Groucho Marx',
  '“Don’t take life too seriously. You’ll never get out of it alive.” -Bugs Bunny',
  '“What do you say you and me go to a place where we’ll never see each other again?” -Davy Jones',
  '“Due to a lack of interest, tomorrow has been cancelled.” -Michael Nesmith',
  '“Why should I speak, since I know nothing?” -Peter Tork',
  '“Leave the gun, take the cannolis.” -Peter Clemenza',
  '"Tony, I’m gonna need to leave early today for Rosh Hashanah." -Paulie Walnuts'
];

const Footer = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'linked' : '';
  };

  const scrollUp = () => {
    setActiveTab(id);
    window.scrollTo({
        top: 0,
        behavior: "auto"
    });
  };

  // select daily quote
  const today = new Date().toISOString().split('T')[0];
  const hash = today.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const dailyQuote = quotes[hash % quotes.length];

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/" className={isActive('/')} onClick={() => scrollUp()}>Home</Link></li>
              <li><Link to="/experience" className={isActive('/experience')} onClick={() => scrollUp()}>Experience</Link></li>
              <li><Link to="/video" className={isActive('/video')} onClick={() => scrollUp()}>Video</Link></li>
              <li><Link to="/design" className={isActive('/design')} onClick={() => scrollUp()}>Design</Link></li>
              <li><Link to="/photography" className={isActive('/photography')} onClick={() => scrollUp()}>Photography</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <div className="footer-social">
              <a href="https://vimeo.com/user61922079" target="_blank" rel="noopener noreferrer" aria-label="Vimeo">
                <img src={vimeoIcon} alt="Vimeo" />
              </a>
              <a href="https://www.linkedin.com/in/orlymobilio/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
              <a href="https://www.instagram.com/ortworks.jpeg/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <img src={instagramIcon} alt="Instagram" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-quote">
          <p>{dailyQuote}</p>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Orly Mobilio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;