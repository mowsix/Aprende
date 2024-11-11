// src/components/views/MisClases.jsx
import React, { useEffect, useState, useContext } from 'react';
import { GlobalContext } from '../../GlobalContext';

export const MisClases = () => {
  const { user } = useContext(GlobalContext); // Usamos el contexto global para obtener el usuario
  const [myClasses, setMyClasses] = useState([]);
  const [enrolledClasses, setEnrolledClasses] = useState([]);

  useEffect(() => {
    const fetchMyClasses = async () => {
      const url = "https://getmylessons-ckxakdbjmq-uc.a.run.app"; // Endpoint de tus clases
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user),
        });
        const result = await response.json();
        if (result.success) setMyClasses(result.data);
      } catch (error) {
        console.error("Error fetching my classes:", error);
      }
    };

    const fetchMySubscriptions = async () => {
      const url = "https://getmysubs-ckxakdbjmq-uc.a.run.app"; // Endpoint de tus suscripciones
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user),
        });
        const result = await response.json();
        if (result.success) setEnrolledClasses(result.data);
      } catch (error) {
        console.error("Error fetching my subscriptions:", error);
      }
    };

    fetchMyClasses();
    fetchMySubscriptions();
  }, [user]);

  return (
    <div className="mis-clases-container">
      <h2 className="mis-clases-title">Mis Clases</h2>

      <section className="clases-section">
        <h3>Clases que voy a dar</h3>
        {myClasses.length > 0 ? (
          <ul className="clases-list">
            {myClasses.map((clase, index) => (
              <li key={index} className="clase-item">
                <strong>{clase.title}</strong> - {clase.description}
              </li>
            ))}
          </ul>
        ) : (
          <p>No tienes clases para dar.</p>
        )}
      </section>

      <section className="clases-section">
        <h3>Clases en las que me inscribí</h3>
        {enrolledClasses.length > 0 ? (
          <ul className="clases-list">
            {enrolledClasses.map((clase, index) => (
              <li key={index} className="clase-item">
                <strong>{clase.title}</strong> - {clase.description}
              </li>
            ))}
          </ul>
        ) : (
          <p>No estás inscrito en ninguna clase.</p>
        )}
      </section>
    </div>
  );
};

