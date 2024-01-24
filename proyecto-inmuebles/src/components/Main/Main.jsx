import React from 'react';
import imagen1 from '../../assets/imagen1.jpg';  // Ajusta la ruta según tu estructura de carpetas
import './Main.css';  // Ajusta la ruta según tu estructura de carpetas


const SectionMenu = () => {
  return (
    <section className="menu">
      <div className="infoizq">
        <div>
          <h1 className="titulo">Bring Your Family's<br />Happiness to Your<br />Dream House</h1>
          <p className="primerparrafo">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima nihil minus<br /> porro consequuntur culpa id vel esse.</p>
        </div>

        <div>
          <form>
            <input type="text" defaultValue=" Search Here" className="formulariouno" />
            <input type="button" value="Search" className="funciona" />
          </form>
        </div>

        <div className="numeros">
          <div>
            <h2 className="tamañonumeros">280+</h2>
            <p>Awards Winning</p>
          </div>

          <div>
            <h2 className="tamañonumeros">78+</h2>
            <p>Property Ready</p>
          </div>

          <div>
            <h2 className="tamañonumeros">298+</h2>
            <p>Happy Customers</p>
          </div>
        </div>
      </div>

      <div>
        <img src={imagen1} alt="imagen" className="imagenuno" />
      </div>
    </section>
  );
}

export default SectionMenu;
