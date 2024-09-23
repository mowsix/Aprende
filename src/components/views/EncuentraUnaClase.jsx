import React, { useState, useEffect } from "react";

export const EncuentraUnaClase = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("Todas");
  const [classes, setClasses] = useState([]); // Estado para almacenar las clases

  // Realizar la solicitud GET al backend cuando el componente se monta
  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/clases');
        if (response.ok) {
          const result = await response.json();
          setClasses(result.clases); // Asignar las clases obtenidas al estado
          console.log("Clases obtenidas:", result.clases);
        } else {
          console.error("Error al obtener las clases");
        }
      } catch (error) {
        console.error("Error en la solicitud:", error);
      }
    };

    fetchClasses();
  }, []);

  // Manejar la búsqueda por término
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Manejar el cambio de filtro por categoría
  const handleFilterChange = (e) => {
    setFilterCategory(e.target.value);
  };

  // Filtrar las clases por categoría y búsqueda
  const filteredClasses = classes
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
