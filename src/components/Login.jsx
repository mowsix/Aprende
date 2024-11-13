import React, { useState, useContext } from "react";
import { GlobalContext } from "../GlobalContext";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(GlobalContext);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [registerData, setRegisterData] = useState({
    userFullName: "",
    userMainClass: "",
    userCountry: "",
    userEmail: "",
    userPassword: "",
    userEducation: "Primaria",
    userDescription: "",
  });

  const [notification, setNotification] = useState("");
  const [isError, setIsError] = useState(false); // Nuevo estado para el tipo de mensaje

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const handlePostRequest = async (user) => {
    const url = "https://createuser-ckxakdbjmq-uc.a.run.app";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const result = await response.json();
        if (result.success) {
          setNotification("Registro exitoso. Por favor, inicia sesión con tus datos.");
          setIsError(false); // Mensaje de éxito
        }
      } else {
        console.error("HTTP Error:", response.status);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    handlePostRequest(registerData);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    handleLogin(loginData);
  };

  const handleLogin = async (login) => {
    const url = "https://loginuser-ckxakdbjmq-uc.a.run.app";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(login),
      });
      if (response.ok) {
        const result = await response.json();
        if (result.success) {
          setUser(result.data);
          navigate('/');
        } else {
          setNotification("Usuario no encontrado o datos incorrectos.");
          setIsError(true); // Mensaje de error
        }
      } else {
        console.error("HTTP Error:", response.status);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  return (
    <div style={{ marginTop: "100px" }}>
      {/* Notificación */}
      {notification && (
        <div className={`notification ${isError ? "error" : "success"}`}>
          <p>{notification}</p>
        </div>
      )}

      {/* Formulario de Login */}
      <div className="login-form">
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleLoginSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="text"
              name="userEmail"
              value={loginData.userEmail}
              onChange={handleLoginChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Contraseña:</label>
            <input
              type="password"
              name="userPassword"
              value={loginData.userPassword}
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
              name="userFullName"
              value={registerData.userFullName}
              onChange={handleRegisterChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Celular:</label>
            <input
              type="number"
              name="userPhone"
              value={registerData.userPhone}
              onChange={handleRegisterChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Clases en las que eres bueno:</label>
            <select
              name="userMainClass"
              value={registerData.userMainClass}
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
              name="userCountry"
              value={registerData.userCountry}
              onChange={handleRegisterChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="text"
              name="userEmail"
              value={registerData.userEmail}
              onChange={handleRegisterChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Contraseña:</label>
            <input
              type="password"
              name="userPassword"
              value={registerData.userPassword}
              onChange={handleRegisterChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Estudios:</label>
            <select
              name="userEducation"
              value={registerData.userEducation}
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
              name="userDescription"
              value={registerData.userDescription}
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
