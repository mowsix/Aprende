import React from "react";
import { useNavigate } from "react-router-dom";

export const Navigation = () => {
  const navigate = useNavigate();

  const handleHomeClick = (e) => {
    e.preventDefault();
    navigate("/"); // Redirige a la página principal
  };

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
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

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">SERVICIOS</a>
            </li>
            <li>
              <a href="#about" className="page-scroll">Nosotros</a>
            </li>
            <li>
              <a href="#services" className="page-scroll">CLASES</a>
            </li>
            <li>
              <a href="#team" className="page-scroll">Equipo</a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">Contactanos</a>
            </li>
            <li>
              <a id="login-button" href="/login" className="page-scroll">
                LOGIN
              </a>
            </li>
            <li>
              {/* Contenedor del widget de Google Translate */}
              <div id="google_translate_element"></div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
