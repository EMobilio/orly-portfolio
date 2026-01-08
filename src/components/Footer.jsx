import { Link, useLocation } from 'react-router-dom';
import vimeoIcon from '../assets/icons/vimeo-icon.png';
import linkedinIcon from '../assets/icons/linkedin-icon.png';
import instagramIcon from '../assets/icons/instagram-icon.png';

const quotes = [
  '"Ah but if less is more, then just think how much more \'more\' would be" -Frasier Crane',
  '“I flew too close to the sun on the wings of pastrami.” -George Costanza',
  '“Using mainly spoons, we dig a tunnel under the city and release it into the wild.” -Mike Wazowski',
  '“All right that’s enough, I gotta go home and take a nap.” -George Costanza',
  '“A person should not believe in an ‘ism,’ he should believe in himself.” -Ferris Bueller',
  '“Let’s see, where were we? In the pit of despair.” -Grandpa',
  // '“The song was catchy but the choreography was terrible.” -Wolf',
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
  // '“Leave the gun, take the cannolis.” - ',
  '"Tony, I’m gonna need to leave early today for Rosh Hashanah." -Paulie Walnuts'
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

