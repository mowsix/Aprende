import React, { useState } from "react";

const Login = () => {
  // Manejo del estado de los campos del formulario
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [registerData, setRegisterData] = useState({
    nombre: "",
    edad: "",
    clases: "",
    pais: "",
    genero: "",
    celular: "",
    estudios: "primaria", // Valor por defecto
    descripcion: "",
  });

  // Manejadores de cambio para los formularios
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para procesar el login
    console.log("Datos de Login:", loginData);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para procesar el registro
    console.log("Datos de Registro:", registerData);
  };

  return (
    <div style={{ marginTop: "100px" }}> {/* Ajuste por la altura del navbar */}
      {/* Formulario de Login */}
      <div className="login-form">
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleLoginSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={loginData.email}
              onChange={handleLoginChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Contraseña:</label>
            <input
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleLoginChange}
              required
            />
          </div>
          <button type="submit" className="btn-submit">Iniciar Sesión</button>
        </form>
      </div>

      {/* Formulario de Registro */}
      <div className="register-form">
        <h2>Registro de Nuevo Usuario</h2>
        <form onSubmit={handleRegisterSubmit}>
          <div className="form-group">
            <label>Nombre:</label>
            <input
              type="text"
              name="nombre"
              value={registerData.nombre}
              onChange={handleRegisterChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Edad:</label>
            <input
              type="number"
              name="edad"
              value={registerData.edad}
              onChange={handleRegisterChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Clases en las que eres bueno:</label>
            <select
              name="clases"
              value={registerData.clases}
              onChange={handleRegisterChange}
              required
            >
              <option value="">Seleccionar</option>
              <option value="Matemáticas">Matemáticas</option>
              <option value="Programación">Programación</option>
              <option value="Química">Química</option>
              <option value="Física">Física</option>
              <option value="Idiomas">Idiomas</option>
              <option value="Dibujo">Dibujo</option>
            </select>
          </div>
          <div className="form-group">
            <label>País:</label>
            <input
              type="text"
              name="pais"
              value={registerData.pais}
              onChange={handleRegisterChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Género:</label>
            <input
              type="text"
              name="genero"
              value={registerData.genero}
              onChange={handleRegisterChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Celular:</label>
            <input
              type="tel"
              name="celular"
              value={registerData.celular}
              onChange={handleRegisterChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Estudios:</label>
            <select
              name="estudios"
              value={registerData.estudios}
              onChange={handleRegisterChange}
              required
            >
              <option value="primaria">Primaria</option>
              <option value="secundaria">Secundaria</option>
              <option value="universitarios">Universitarios</option>
              <option value="maestria">Maestría</option>
              <option value="doctorado">Doctorado</option>
              <option value="licenciado">Licenciado</option>
            </select>
          </div>
          <div className="form-group">
            <label>Descripción:</label>
            <textarea
              name="descripcion"
              value={registerData.descripcion}
              onChange={handleRegisterChange}
              rows="4"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn-submit">Registrar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
