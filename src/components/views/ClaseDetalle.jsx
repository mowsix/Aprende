import React, { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { GlobalContext } from "../../GlobalContext";

export const ClaseDetalle = () => {
  const { user } = useContext(GlobalContext);
  const location = useLocation();
  const { classTitle, classCategory, classPrice, classOwner, classDescription, classId } = location.state || {};

  // Estado para controlar el mensaje de éxito
  const [subscriptionSuccess, setSubscriptionSuccess] = useState(false);

  const handleSubs = async () => {
    if (!user || !classId) {
      console.error("Faltan datos para la suscripción.");
      return;
    }

    // Crea el objeto de suscripción
    const subscriptionData = {
      subscriptionId: classId,
      subscriptionUser: user,
      subscriptionClass: location.state
    };

    const url = "https://subscribe-ckxakdbjmq-uc.a.run.app"; // Cambia por tu endpoint
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(subscriptionData),  // Envía el objeto de suscripción
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Response:", result);
        
        if (result.success) {
          setSubscriptionSuccess(true); // Actualiza el estado de éxito
        } else {
          console.error("Error en la respuesta del servidor:", result.message);
          setSubscriptionSuccess(false); // En caso de fallo, se asegura de que el mensaje no se muestre
        }
      } else {
        console.error("HTTP Error:", response.status);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  return (
    <div className="clase-detalle-container">
      <button className="back-button" onClick={() => window.history.back()}>Volver</button>
      <div className="clase-detalle-card">
        <h2 className="clase-title">{classTitle}</h2>
        <p className="clase-category"><strong>Categoría:</strong> {classCategory}</p>
        <p className="clase-price"><strong>Precio:</strong> {classPrice}</p>
        <p className="clase-owner"><strong>Profesor:</strong> {classOwner}</p>
        <p className="clase-description"><strong>Descripción:</strong> {classDescription}</p>
        <button className="inscribirse-button" onClick={handleSubs}>Suscribirse</button>
        
        {/* Muestra el mensaje de éxito si subscriptionSuccess es true */}
        {subscriptionSuccess && (
          <p className="success-message">¡Te has suscrito correctamente!</p>
        )}
      </div>
    </div>
  );
};
