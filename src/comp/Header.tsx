import '../Header.css'; // Importiere die CSS-Datei für die Header-Komponente
import Image from '../images/Logo.png';
import { Link } from 'react-router-dom';


export function Header() {

  return (
    <div id="header" className="hidden">
      <div className="container">
        <nav>
          <img src={Image} className="logo" alt="Logo" /> {/* Logo */}
          <ul id="sidemenu" className="hidden"> {/* Make sure the menu is initially hidden */}
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/experience">EXPERIENCE</Link></li>
            <li><Link to="/contact">CONTACT</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;