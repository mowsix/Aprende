import React from "react";
import { useTranslation } from "react-i18next";

export const Image = ({ title, largeImage, smallImage }) => {
  const { t } = useTranslation();

  return (
    <div className="portfolio-item">
      <div className="hover-bg">
        {" "}
        <a href={largeImage} title={t(title)} data-lightbox-gallery="gallery1">
          <div className="hover-text">
            <h4>{t(title)}</h4> {/* Título traducido */}
          </div>
          <img src={smallImage} className="img-responsive" alt={t(title)} />{" "} {/* Alt de la imagen traducido */}
        </a>{" "}
      </div>
    </div>
  );
};
