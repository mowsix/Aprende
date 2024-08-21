import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher"; // Importa el componente LanguageSwitcher

export const Navigation = () => {
  const { t } = useTranslation();
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
            {" "}
            <span className="sr-only">{t('Toggle navigation')}</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="/" onClick={handleHomeClick}>
            A+PRENDE
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
                {t('SERVICIOS')}
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                {t('Nosotros')}
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                {t('CLASES')}
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                {t('Gallery')}
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                {t('Equipo')}
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                {t('Contactanos')}
              </a>
            </li>
            <li>
              <div className="language-switcher">
                <LanguageSwitcher /> {/* Añade el componente LanguageSwitcher aquí */}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
