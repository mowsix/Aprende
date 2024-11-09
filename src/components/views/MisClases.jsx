// src/components/views/MisClases.jsx
import React, { useEffect, useState } from 'react';

export const MisClases = ({ classes }) => {
  const [myClasses, setMyClasses] = useState([]);
  const [enrolledClasses, setEnrolledClasses] = useState([]);

  useEffect(() => {
    // Filtra las clases que vas a dar y las que estás inscrito.
    const teachingClasses = classes.filter(cl => cl.type === 'teaching'); // Asume que las clases que vas a dar tienen type 'teaching'
    const enrolledClasses = classes.filter(cl => cl.type === 'enrolled'); // Asume que las clases inscritas tienen type 'enrolled'

    setMyClasses(teachingClasses);
    setEnrolledClasses(enrolledClasses);
  }, [classes]);

  return (
    <div className="mis-clases-container">
      <h2 className="mis-clases-title">MIS CLASES</h2>

      <section>
        <h3>Clases que voy a dar</h3>
        {myClasses.length > 0 ? (
          <ul>
            {myClasses.map((clase, index) => (
              <li key={index}>
                <strong>{clase.title}</strong> - {clase.description}
              </li>
            ))}
          </ul>
        ) : (
          <p>No tienes clases para dar.</p>
        )}
      </section>

      <section>
        <h3>Clases en las que me inscribí</h3>
        {enrolledClasses.length > 0 ? (
          <ul>
            {enrolledClasses.map((clase, index) => (
              <li key={index}>
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
