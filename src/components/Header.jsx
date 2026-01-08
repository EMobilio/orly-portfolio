import { Link, useLocation } from 'react-router-dom';
import logoImage from '../../img/Orm 2022 Logo-19.png';

const Header = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'linked' : '';
  };

  return (
    <header>
      <div id="secFlex">
        <div id="logo">
          <Link to="/">
            <img src={logoImage} alt="Orly Mobilio Logo" />
          </Link>
        </div>

        <div id="name">
          <em>
            <h2>orly mobilio</h2>
            <div className="lilBox">
              <h3>artist & animator</h3>
            </div>
          </em>
        </div>
      </div>

      <div id="nav">
        <nav>
          <ul>
            <li><Link to="/" className={isActive('/')}>home</Link></li>
            <li><Link to="/experience" className={isActive('/experience')}>experience</Link></li>
            <li><Link to="/animation" className={isActive('/animation')}>animation</Link></li>
            <li><Link to="/design" className={isActive('/design')}>design</Link></li>
            <li><Link to="/photography" className={isActive('/photography')}>photography</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

