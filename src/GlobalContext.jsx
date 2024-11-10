import React, { createContext, useState } from 'react';

// Crear el contexto
export const GlobalContext = createContext();

// Proveedor del contexto global
export const GlobalProvider = ({ children }) => {
  // Cambia el estado inicial a un objeto vacío para almacenar el usuario completo
  const [user, setUser] = useState(null);

  // Función para establecer el usuario completo en el estado global
  const setGlobalUser = (newUser) => {
    setUser(newUser);
  };

  return (
    <GlobalContext.Provider value={{ user, setUser: setGlobalUser }}>
      {children}
    </GlobalContext.Provider>
  );
};
