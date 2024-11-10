import React from "react";
import { useLocation } from "react-router-dom";

export const ClaseDetalle = () => {
  const location = useLocation();
  console.log(location);
  const { classTitle, classCategory, classPrice, classOwner, classDescription } = location.state || {};
        console.log(classTitle);
  return (
    <div className="clase-detalle-container">
      <button className="back-button" onClick={() => window.history.back()}>Volver</button>
      <div className="clase-detalle-card">
        <h2 className="clase-title">{classTitle}</h2>
        <p className="clase-category"><strong>Categoría:</strong> {classCategory}</p>
        <p className="clase-price"><strong>Precio:</strong> {classPrice}</p>
        <p className="clase-owner"><strong>Profesor:</strong> {classOwner}</p>
        <p className="clase-description"><strong>Descripción:</strong> {classDescription}</p>
        <button className="inscribirse-button">Inscribirse</button>
      </div>
    </div>
  );
};
