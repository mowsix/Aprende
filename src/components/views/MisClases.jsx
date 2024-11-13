import React, { useEffect, useState, useContext } from 'react';
import { GlobalContext } from '../../GlobalContext';

export const MisClases = () => {
  const { user } = useContext(GlobalContext);
  const [myClasses, setMyClasses] = useState([]);
  const [mySubs, setMySubs] = useState([]);

  useEffect(() => {
    const fetchMyClasses = async () => {
      const url = "https://getmylessons-ckxakdbjmq-uc.a.run.app";
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
      const url = "https://getmysubs-ckxakdbjmq-uc.a.run.app";
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user),
        });
        const result = await response.json();
        if (result.success) {
          // Modificamos para acceder a classCategory en lugar de classDescription
          const subscriptions = result.data.map(sub => ({
            classTitle: sub.subscriptionClass.classTitle || "Título no disponible",
            classCategory: sub.subscriptionClass.classCategory || "Categoría no disponible",
          }));
          setMySubs(subscriptions);
        }
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
        <h3>Clases que vas a dictar</h3>
        {myClasses.length > 0 ? (
          <div className="class-list">
            {myClasses.map((clase, index) => (
              <div key={index} className="class-card">
                <h3>{clase.classTitle || "Título no disponible"}</h3>
                <p>Categoría: {clase.classCategory || "Categoría no disponible"}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No tienes clases para dictar.</p>
        )}
      </section>

      <section className="clases-section">
        <h3>Clases en las que me inscribí</h3>
        {mySubs.length > 0 ? (
          <div className="sub-list">
            {mySubs.map((sub, index2) => (
              <div key={index2} className="class-card">
                <h3>{sub.classTitle}</h3> {/* Título de la clase */}
                <p>Categoría: {sub.classCategory}</p> {/* Mostramos la categoría de la clase */}
              </div>
            ))}
          </div>
        ) : (
          <p>No estás inscrito en ninguna clase.</p>
        )}
      </section>
    </div>
  );
};