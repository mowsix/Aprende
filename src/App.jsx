import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import './i18n'; // Importa la configuración de i18n

import { ClasesDestacadas } from "./components/views/ClasesDestacadas";
import { OfreceTusServicios } from "./components/views/OfreceTusServicios";
import { EncuentraUnaClase } from "./components/views/EncuentraUnaClase";
import { Soporte } from "./components/views/Soporte";
import LanguageSwitcher from "./components/LanguageSwitcher"; // Importa el componente para cambiar el idioma

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
      <LanguageSwitcher /> {/* Botón para cambiar el idioma */}
      <Navigation />
      <Routes>
        <Route path="/" element={
          <>
            <Header data={landingPageData.Header} />
            <Features data={landingPageData.Features} />
            <About data={landingPageData.About} />
            <Services data={landingPageData.Services} />
            <Gallery data={landingPageData.Gallery} />
            <Team data={landingPageData.Team} />
            <Contact data={landingPageData.Contact} />
          </>
        } />
        <Route path="/clases-destacadas" element={<ClasesDestacadas />} />
        <Route path="/ofrece-tus-servicios" element={<OfreceTusServicios />} />
        <Route path="/encuentra-una-clase" element={<EncuentraUnaClase />} />
        <Route path="/soporte" element={<Soporte />} />
      </Routes>
    </Router>
  );
};

export default App;
