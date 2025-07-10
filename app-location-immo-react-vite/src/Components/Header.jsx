import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo-kasa.png';

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Kasa logo" className="header__logo" />
      <nav className="header__nav">
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? "active" : ""}
        >
          Accueil
        </NavLink>
        <NavLink 
          to="/about" 
          className={({ isActive }) => isActive ? "active" : ""}
        >
          A Propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
