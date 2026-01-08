import { Link, useLocation } from 'react-router-dom';
import vimeoIcon from '../../img/vimeo-icon.png';
import linkedinIcon from '../../img/linkedin-icon.png';
import instagramIcon from '../../img/instagram-icon.png';

const quotes = [
  '"ah but if less is more, then just think how much more \'more\' would be" -frasier crane',
  '“I flew too close to the sun on the wings of pastrami.” -George Costanza'
];

const Footer = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'linked' : '';
  };

  // select daily quote
  const today = new Date().toISOString().split('T')[0];
  const hash = today.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const dailyQuote = quotes[hash % quotes.length];

  return (
      <footer id="foot" className="clearfix">
        <ul>
          <li><Link to="/" className={isActive('/')}>home</Link></li>
          <li><Link to="/experience" className={isActive('/experience')}>experience</Link></li>
          <li><Link to="/animation" className={isActive('/animation')}>animation</Link></li>
          <li><Link to="/design" className={isActive('/design')}>design</Link></li>
          <li><Link to="/photography" className={isActive('/photography')}>photography</Link></li>
        </ul>

        <div id="icons">
          <p>{dailyQuote}</p>
          <a href="https://vimeo.com/user61922079" target="_blank" rel="noopener noreferrer">
            <img className="footpics" src={vimeoIcon} alt="vimeo icon" />
          </a>
          <a href="https://www.linkedin.com/in/orlymobilio/" target="_blank" rel="noopener noreferrer">
            <img className="footpics" src={linkedinIcon} alt="linkedin icon" />
          </a>
          <a href="https://www.instagram.com/ortworks.jpeg/" target="_blank" rel="noopener noreferrer">
            <img className="footpics" src={instagramIcon} alt="instagram icon" />
          </a>
        </div>
      </footer>
  );
};

export default Footer;

