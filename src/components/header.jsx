import React from "react";
import { useTranslation } from "react-i18next";

export const Header = (props) => {
  const { t } = useTranslation();

  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? t(props.data.title) : t("loading")}
                  <span></span>
                </h1>
                <p>{props.data ? t(props.data.paragraph) : t("loading")}</p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  {t('tutorial')}
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
