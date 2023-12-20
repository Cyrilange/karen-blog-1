import React from "react";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="homeContainer">
      <header>
        <Navigation />
      </header>

      <div className="part-two">
        <div className="texte">
          <p>
            "¡Bienvenidos a mi blog! Mi nombre es Karen y me apasiona la
            naturaleza tanto como el mundo de la moda. A través de estas
            páginas, quiero compartir mi fascinación por la belleza natural y
            cómo se entrelaza con las tendencias y estilos de la moda. Únete a
            mí mientras exploramos la conexión entre la exuberancia de la
            naturaleza y la expresión creativa que la moda nos brinda. ¡Te
            invito a sumergirte en este viaje lleno de inspiración y
            autenticidad!"
          </p>
        </div>
        <div className="fleur">
          <img className="flower" src="./image4.jpeg" center alt="" />
        </div>
      </div>
      <div className="part-tres">
        <div className="house">
          <img src="./image5.jpeg" alt="petite maison seule" cover />
        </div>
        <div>
          <p>
            Explora la fusión entre la moda y la naturaleza en mi espacio. Sigue
            mi canal para descubrir secretos de estilo y aromas encantadores.
            Encuentra una exclusiva selección de perfumes y ropa de mujer. Únete
            a esta comunidad de moda y naturaleza, te espero!
          </p>
        </div>
      </div>
      <div className="grid-container"></div>
    </div>
  );
};

export default Home;
