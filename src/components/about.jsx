import React from "react";
import { useTranslation } from "react-i18next";

export const About = (props) => {
  const { t } = useTranslation();

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>{t('about_title')}</h2> {/* Título traducido */}
              <p>{props.data ? props.data.paragraph : t('loading')}</p> {/* Parágrafo dinámico */}
              <h3>{t('why_title')}</h3> {/* Título "¿Por qué usar A+prende?" traducido */}
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li> // Listas dinámicas
                        ))
                      : t('loading')}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li> // Listas dinámicas
                        ))
                      : t('loading')}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
