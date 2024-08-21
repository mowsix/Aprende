import { Image } from "./image";
import React from "react";
import { useTranslation } from "react-i18next";

export const Gallery = (props) => {
  const { t } = useTranslation();

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>{t('gallery_title')}</h2> {/* Título traducido */}
          <p>
            {t('gallery_description')} {/* Descripción traducida */}
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <Image
                      title={t(d.title)}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                ))
              : t('loading')}
          </div>
        </div>
      </div>
    </div>
  );
};
