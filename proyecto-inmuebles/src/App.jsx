import React from "react";
import "./App.css";
import "./components/Page/Page.css"; 
import HeaderPage from "./components/Page/Page";
import { imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7,imagen8, imagen9, imagen10, imagen11, imagen12, imagen13, imagen14, imagen15, imagen16, imagen17 } from "./src/assets/index.js";

const App = () => {
  // Usa las imágenes según sea necesario
  return (
    <div>
      <HeaderPage />
      <img src={imagen1} alt="Imagen 1" />
      <img src={imagen2} alt="Imagen 2" />
      <img src={imagen3} alt="Imagen 3" />
      <img src={imagen4} alt="Imagen 4" />
      <img src={imagen5} alt="Imagen 5" />
      <img src={imagen6} alt="Imagen 6" />
      <img src={imagen7} alt="Imagen 7" />
      <img src={imagen8} alt="Imagen 8" />
      <img src={imagen9} alt="Imagen 9" />
      <img src={imagen10} alt="Imagen 10" />
      <img src={imagen11} alt="Imagen 11" />
      <img src={imagen12} alt="Imagen 12" />
      <img src={imagen13} alt="Imagen 13" />
      <img src={imagen14} alt="Imagen 14" />
      <img src={imagen15} alt="Imagen 15" />
      <img src={imagen16} alt="Imagen 16" />
      <img src={imagen17} alt="Imagen 17" />
      
      {/* Otro contenido de tu aplicación */}
    </div>
  );
}

export default App;
