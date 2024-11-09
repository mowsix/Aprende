import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleHomeClick = (e) => {
    e.preventDefault();
    navigate("/"); // Redirige a la página principal
  };

  // Verifica si la ruta actual no es la principal
  const isMainPage = location.pathname === "/";

  return (
    <nav
      id="menu"
      className={`navbar navbar-default navbar-fixed-top ${!isMainPage ? "center-navbar" : ""}`}
    >
      <div className="container">
        <div className={`navbar-header ${!isMainPage ? "center-navbar-header" : ""}`}>
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand page-scroll" href="/" onClick={handleHomeClick}>
            A+PRENDE
          </a>
        </div>

        {isMainPage && (
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#features" className="page-scroll">
                  SERVICIOS
                </a>
              </li>
              <li>
                <a href="#about" className="page-scroll">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#services" className="page-scroll">
                  CLASES
                </a>
              </li>
              <li>
                <a href="#team" className="page-scroll">
                  Equipo
                </a>
              </li>
              <li>
                <a href="#contact" className="page-scroll">
                  Contactanos
                </a>
              </li>
              <li>
                <Link
                    to="login"
                    className="feature-link"
                  >
                   LOGIN
        
                  </Link>
              </li>
              <li>
                <div id="google_translate_element"></div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
