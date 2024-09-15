import React, { useState } from 'react';

export const CreateClass = ({ addClass }) => {
  
  const [formData, setFormData] = useState({
    category: '',
    title: '',
    price: '',
    description: ''
  });

  // Manejar los cambios en el formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Clase enviada:", formData); // Mostrar datos en la consola
    addClass(formData);  // Añadir la nueva clase al estado global
    setFormData({
      category: '',
      title: '',
      price: '',
      description: ''
    });
  };

  return (
    <div className="container create-class-form">
      <h2>Crear una nueva clase</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="category">Categoría</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="form-control"
            required
          >
            <option value="">Selecciona una categoría</option>
            <option value="matematicas">Matemáticas</option>
            <option value="programacion">Programación</option>
            <option value="quimica">Química</option>
            <option value="fisica">Física</option>
            <option value="idiomas">Idiomas</option>
            <option value="dibujo">Dibujo</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="title">Título</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="form-control"
            placeholder="Título de la clase"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Precio</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="form-control"
            placeholder="Precio de la clase"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Descripción</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="form-control"
            placeholder="Descripción de la clase"
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Crear Clase
        </button>
      </form>
    </div>
  );
};
