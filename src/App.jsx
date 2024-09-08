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

import { ClasesDestacadas } from "./components/views/ClasesDestacadas";
import { OfreceTusServicios } from "./components/views/OfreceTusServicios";
import { EncuentraUnaClase } from "./components/views/EncuentraUnaClase";
import { Soporte } from "./components/views/Soporte";

import Login from './components/Login'; // Sin llaves para una exportación por defecto

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

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
        <Route path="/login" element={<Login />} /> {/* Nueva ruta para Login */}
        <Route path="/clases-destacadas" element={<ClasesDestacadas />} />
        <Route path="/ofrece-tus-servicios" element={<OfreceTusServicios />} />
        <Route path="/encuentra-una-clase" element={<EncuentraUnaClase data={landingPageData.Classes} />} />
        <Route path="/soporte" element={<Soporte />} />
      </Routes>
    </Router>
  );
};

export default App;
