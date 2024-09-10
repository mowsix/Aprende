import React, { useState } from 'react';

export const CreateClass = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    price: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Datos del formulario:', formData);
  };

  return (
    <div className="create-class-container">
      <h2>Crear una clase</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Título de la clase:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Categoría:</label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Precio:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn-submit">Crear Clase</button>
      </form>
    </div>
  );
};

export default CreateClass;
