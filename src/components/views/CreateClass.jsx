import React, { useState } from 'react';

export const CreateClass = () => {
  const [formData, setFormData] = useState({
    //classId: new Date().now(),
    classCategory: '',
    classTitle: '',
    classPrice: '',
    classDescription: ''
  });
  const [successMessage, setSuccessMessage] = useState(''); // Estado para el mensaje de éxito

  // Manejar los cambios en el formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e);
    const classId = new Date().now();
    const x = {...e,classId}
    console.log(x);
    // await handlePostClassRequest(formData);
  };

  const handlePostClassRequest = async (lesson) => {
    const url = "https://createclass-ckxakdbjmq-uc.a.run.app"; // Cambia por tu endpoint
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(lesson),
      });
  
      if (response.ok) {
        const result = await response.json();
        console.log("Response:", result);
        
        // Mostrar el mensaje de éxito temporalmente
        setSuccessMessage("Clase creada con éxito");
        setTimeout(() => {
          setSuccessMessage(''); // Limpiar el mensaje después de 3 segundos
        }, 3000);
        
      } else {
        console.error("HTTP Error:", response.status);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  return (
    <div className="mis-clases-container">
      <h2 className="create-clases-title">CREA UNA CLASE</h2>

      {/* Mostrar el mensaje de éxito si existe */}
      {successMessage && (
        <div className="alert alert-success" role="alert">
          {successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="category">Categoría</label>
          <select
            id="category"
            name="classCategory"
            value={formData.classCategory}
            onChange={handleChange}
            className="form-control custom-select"
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
            name="classTitle"
            value={formData.classTitle}
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
            name="classPrice"
            value={formData.classPrice}
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
            name="classDescription"
            value={formData.classDescription}
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
