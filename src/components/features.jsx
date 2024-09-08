import React from "react";
import { Link } from "react-router-dom";

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Servicios</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                  <Link to={`/${d.title.replace(/ /g, "-").toLowerCase()}`}>
                    <i className={d.icon} style={{ fontSize: '50px', color: '#000' }}></i>
                    <h3>{d.title}</h3>
                  </Link>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};

