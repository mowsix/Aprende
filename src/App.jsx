import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

import { MisClases } from "./components/views/MisClases";
import { OfreceTusServicios } from "./components/views/OfreceTusServicios";
import { EncuentraUnaClase } from "./components/views/EncuentraUnaClase";
import { Soporte } from "./components/views/Soporte";
import { CreateClass } from "./components/views/CreateClass";

import Login from './components/Login';

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  const [classes, setClasses] = useState([]); // Estado global para clases

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  // Función para agregar una clase nueva al estado global
  const addClass = (newClass) => {
    setClasses((prevClasses) => [...prevClasses, newClass]); // Añadir la nueva clase al estado
    console.log('Clases actualizadas:', classes);  // Verificar si las clases se agregan correctamente
  };

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={
          <>
            <Header data={landingPageData.Header} />
            <Features data={landingPageData.Features} />
            <About data={landingPageData.About} />
            <Services data={landingPageData.Services} />
            <Team data={landingPageData.Team} />
            <Contact data={landingPageData.Contact} />
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/mis-clases" element={<MisClases classes={classes} />} />
        <Route path="/ofrece-tus-servicios" element={<OfreceTusServicios />} />
        <Route path="/encuentra-una-clase" element={<EncuentraUnaClase data={classes} />} />
        <Route path="/soporte" element={<Soporte />} />
        <Route path="/crear-clase" element={<CreateClass addClass={addClass} />} />
      </Routes>
    </Router>
  );
};

export default App;
