import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export const EncuentraUnaClase = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("Todas");
  const [classes, setClasses] = useState([]); // Estado para almacenar las clases

  // Realizar la solicitud GET al backend cuando el componente se monta
  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await fetch('https://getlessons-ckxakdbjmq-uc.a.run.app');
        if (response.ok) {
          const result = await response.json();
          setClasses(result.data); // Asignar las clases obtenidas al estado
        } else {
          console.error("Error al obtener las clases");
        }
      } catch (error) {
        console.error("Error en la solicitud:", error);
      }
    };

    fetchClasses();
  }, []);
  // <div key={index} className="class-card" onClick={() => openClassDetails(clase)} style={{ cursor: "pointer" }}>
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
        (filterCategory === "Todas" || clase.classCategory === filterCategory) &&
        clase.classTitle.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });

  // Función para abrir una nueva pestaña con los detalles de la clase
  const openClassDetails = (clase) => {
    const detailsUrl = `/class-details?title=${encodeURIComponent(clase.classTitle)}&category=${encodeURIComponent(clase.classCategory)}&price=${encodeURIComponent(clase.classPrice)}&owner=${encodeURIComponent(clase.classOwner)}&description=${encodeURIComponent(clase.classDescription)}`;
    window.open(detailsUrl, '_blank'); // Abrir en una nueva pestaña
  };

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
<Link
  to="/detalle"
  state={{
    classTitle: clase.classTitle,
    classCategory: clase.classCategory,
    classPrice: clase.classPrice,
    classOwner: clase.classOwner,
    classDescription: clase.classDescription
  }}
  className="feature-link"
>
  <div className="class-card">
    <h3>{clase.classTitle}</h3>
    <p>Categoría: {clase.classCategory}</p>
    <p>Precio: {clase.classPrice}</p>
    <p>Profesor: {clase.classOwner}</p>
  </div>
</Link>



          ))
        ) : (
          <p>No se encontraron clases.</p>
        )}
      </div>
    </div>
  );
};
