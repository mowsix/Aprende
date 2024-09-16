import React, { useState } from "react";

export const EncuentraUnaClase = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("Todas");

  console.log("Clases recibidas en EncuentraUnaClase:", props.data); // Verifica si las clases se pasan correctamente


  const handleSearch = (e) => {
    console.log(e)
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterCategory(e.target.value);
  };

  const filteredClasses = props.data
    .filter((clase) => {
      return (
        (filterCategory === "Todas" || clase.category === filterCategory) &&
        clase.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });

  return (
    <div className="encuentra-clase-container">
      <h2>Encuentra una Clase</h2>
      <div className="search-filter-container">
        <input
          type="text"
          placeholder="Buscar clase..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
        <select value={filterCategory} onChange={handleFilterChange} className="filter-select">
          <option value="Todas">Todas</option>
          <option value="matematicas">Matemáticas</option>
          <option value="programacion">Programación</option>
          <option value="quimica">Química</option>
          <option value="fisica">Física</option>
          <option value="idiomas">Idiomas</option>
          <option value="dibujo">Dibujo</option>
        </select>
      </div>

      <div className="class-list">
        {filteredClasses.length > 0 ? (
          filteredClasses.map((clase, index) => (
            <div key={index} className="class-card">
              <h3>{clase.title}</h3>
              <p>Categoría: {clase.category}</p>
              <p>Precio: {clase.price}</p>
            </div>
          ))
        ) : (
          <p>No se encontraron clases.</p>
        )}
      </div>
    </div>
  );
};
