import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { useState } from "react";

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="main_header">
      <div className="header-area">
        <div className="header-title">
          <div className="container">
            <div className="header-top">
              <div className="header-logo">
                <a href="/">
                  <img src={logo} alt="logo" />
                </a>
              </div>
              <div className={`menu ${isMobileMenuOpen ? "open" : ""}`}>
                <nav>
                  <ul className={`menu-items ${isMobileMenuOpen ? "visible" : ""}`}>
                    <li>
                      <a href="#">Accueil</a>
                    </li>
                    <li>
                      <a href="#">Nos services</a>
                    </li>
                    <li>
                      <a href="#">Média/Presse</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </nav>
                <div className="login">
                  <ul>
                    <li>
                      <Link to="#" className="btn1 active">
                        Se connecter
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="btn1">
                        S'inscrire
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="menu-bar">
                <div
                  id="toggleNav-icon"
                  className={`menu_icon menu-ba ${isMobileMenuOpen ? "open" : ""}`}
                  onClick={toggleMobileMenu}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
