import React, { useContext} from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../GlobalContext";



export const Features = (props) => {
  const { user} = useContext(GlobalContext);
  const navigate = useNavigate();

  const navigateTo = (path) => {

    if (user) {
      navigate(path);
    } else {
      navigate("/login");
  }
  };

  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Servicios</h2>
        </div>


        <div className="row">
      {props.data
        ? props.data.map((d, i) => (
            <div
              key={`${d.title}-${i}`}
              className="col-xs-6 col-md-3 feature-box"
              onClick={() => navigateTo(d.link ? d.link : `/${d.title.replace(/ /g, "-").toLowerCase()}`)}
              style={{ cursor: "pointer" }}
            >
              <div className="icon-container">
                <i
                  className={d.icon}
                  style={{ fontSize: "50px", color: "#000" }}
                ></i>
              </div>
              <h3>{d.title}</h3>
              <p>{d.text}</p>
            </div>
          ))
        : "Loading..."}
    </div>


      </div>
    </div>
  );
};
