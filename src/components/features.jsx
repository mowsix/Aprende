import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Features = (props) => {
  const { t } = useTranslation();

  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>{t('features_title')}</h2> {/* Título traducido */}
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                  <Link to={`/${d.title.replace(/ /g, "-").toLowerCase()}`}>
                    <i className={d.icon} style={{ fontSize: '50px', color: '#000' }}></i>
                    <h3>{t(d.title)}</h3> {/* Título del servicio traducido */}
                  </Link>
                  <p>{t(d.text)}</p> {/* Descripción del servicio traducida */}
                </div>
              ))
            : t('loading')}
        </div>
      </div>
    </div>
  );
};
