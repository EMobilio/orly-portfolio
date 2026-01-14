import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImage from '../../../img/Orm 2022 Logo-19.png';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'linked' : '';
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [menuOpen]);

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

        <button 
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div id="nav" className={menuOpen ? 'open' : ''}>
        <nav>
          <ul>
            <li><Link to="/" className={isActive('/')} onClick={handleLinkClick}>home</Link></li>
            <li><Link to="/experience" className={isActive('/experience')} onClick={handleLinkClick}>experience</Link></li>
            <li><Link to="/video" className={isActive('/video')} onClick={handleLinkClick}>video</Link></li>
            <li><Link to="/design" className={isActive('/design')} onClick={handleLinkClick}>design</Link></li>
            <li><Link to="/photography" className={isActive('/photography')} onClick={handleLinkClick}>photography</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;