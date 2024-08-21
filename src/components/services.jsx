import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Services = (props) => {
  const { t } = useTranslation();

  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>{t('Clases')}</h2>
          <p>{t('topics_frecuentes')}</p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className="col-md-4">
                {/* Link para redirigir según la ruta especificada en el JSON */}
                <Link to={d.link}>
                  <img
                    src={d.icon}
                    alt={t(d.name)}
                    style={{
                      width: "120px",
                      height: "120px",
                      borderRadius: "50%",
                      background: "linear-gradient(to right, #6372ff 0%, #5ca9fb 100%)",
                      boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.05)",
                      objectFit: "cover",
                      padding: "20px",
                      cursor: "pointer"
                    }}
                  />
                </Link>
                <div className="service-desc">
                  <h3>{t(d.name)}</h3>
                  <p>{t(d.text)}</p>
                </div>
              </div>
            ))
            : t('loading')}
        </div>
      </div>
    </div>
  );
};
