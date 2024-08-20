import React from "react";
import { Link } from "react-router-dom";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Clases</h2>
          <p>Estas son algunos de los topics más populares de las clases más frecuentes.</p>
        </div>
        <div className="row">
          {props.data ? (
            props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className="col-md-4">
                <Link to="/encuentra-una-clase" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <i className={d.icon} style={{ fontSize: '50px', color: '#000', cursor: 'pointer' }}></i>
                  <h3>{d.name}</h3>
                </Link>
                <p>{d.text}</p>
              </div>
            ))
          ) : (
            "loading"
          )}
        </div>
      </div>
    </div>
  );
};
