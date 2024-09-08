import React, { useState } from "react";

export const EncuentraUnaClase = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("Todas");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterCategory(e.target.value);
  };

  const filteredClasses = props.data
    .filter((clase) => {
      return (
        (filterCategory === "Todas" || clase.category === filterCategory) &&
        clase.name.toLowerCase().includes(searchTerm.toLowerCase())
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
          <option value="Matematicas">Matemáticas</option>
          <option value="Programacion">Programación</option>
          <option value="Quimica">Química</option>
          <option value="Fisica">Física</option>
          <option value="Idiomas">Idiomas</option>
          <option value="Dibujo">Dibujo</option>
        </select>
      </div>

      <div className="class-list">
        {filteredClasses.length > 0 ? (
          filteredClasses.map((clase, index) => (
            <div key={index} className="class-card">
              <h3>{clase.name}</h3>
              <p>Categoría: {clase.category}</p>
            </div>
          ))
        ) : (
          <p>No se encontraron clases.</p>
        )}
      </div>
    </div>
  );
};
