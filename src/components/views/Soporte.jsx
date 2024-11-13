import React, { useEffect } from "react";

export const Soporte = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//code.tidio.co/uijozaner7rzfse4whutndselrsi52on.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{ marginTop: '90px' }}>
    <div className="soporte-container">
      <h1 className="soporte-title">Centro de Soporte Virtual</h1>
      <p className="soporte-description">
        Bienvenido al Centro de Soporte de <strong>A+PRENDE</strong>. Aquí puedes chatear con nuestro bot para obtener respuestas rápidas a tus preguntas.
      </p>
      <div className="features">
        <div className="feature-card">
          <h3>Chat en tiempo real</h3>
          <p>Conversa directamente con nuestro bot para recibir asistencia inmediata.</p>
        </div>
        <div className="feature-card">
          <h3>Respuestas frecuentes</h3>
          <p>Encuentra respuestas rápidas a las preguntas más comunes de nuestros usuarios.</p>
        </div>
        <div className="feature-card">
          <h3>Asistencia 24/7</h3>
          <p>Acceso a soporte en cualquier momento, siempre que lo necesites.</p>
        </div>
      </div>
      <p className="soporte-footer">
        Simplemente haz clic en el botón de chat en la esquina para iniciar la conversación. ¡Estamos aquí para ayudarte!
      </p>
    </div>
    </div>
  );
};
