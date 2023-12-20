import React from "react";
import Navigation from "../components/Navigation";

import Menu from "../components/Menu";

const Single = () => {
  return (
    <section>
      <Navigation />

      <div className="single">
        <div className="content">
          <img src="/image4.jpeg" alt="" />
          <div className="user">
            <img src="/image3.jpeg" alt="" />
            <div className="info">
              <span>Karen</span>
              <p>posted 12/18/2023</p>
              <button>
                <a
                  href="https://www.amazon.es/shop/kamachasi?ref_=cm_sw_r_cp_mwn_aipsfshop_aipsfkamachasi_4B9CF4Y6RVA6MJVRED7W&language=en_US&fbclid=IwAR2NOYEpSsG1tTudmSaYqoQXXocy7mZ_gOD2KhBi9OCHioAva1XCE5767Fc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mi página en Amazon
                </a>
              </button>
            </div>
          </div>
          <h2 className="titre-post">Mi primer post</h2>
          <p className="text-post">
            "Un día en Bilbao fue una experiencia increíble. La ciudad emanaba
            una energía única y acogedora. Desde el emblemático Museo Guggenheim
            hasta las pintorescas calles del Casco Viejo, cada rincón irradiaba
            historia y modernidad al mismo tiempo. Explorar sus museos,
            disfrutar de la deliciosa gastronomía vasca en los pintxos, y pasear
            a lo largo del río Nervión, ofreció una experiencia enriquecedora.
            El ambiente cultural y la amabilidad de la gente hicieron que este
            día fuera inolvidable. Bilbao, con su combinación de tradición y
            modernidad, dejó una huella imborrable en mi corazón."
          </p>

          <img src="/Karenmodelo1.jpg" alt="karen fotos" />
          <div className="user">
            <img src="/image3.jpeg" alt="profil" />
            <div className="info">
              <span>Karen</span>
              <p>posted 12/18/2023</p>
              <button>
                <a
                  href="https://www.amazon.es/shop/kamachasi?ref_=cm_sw_r_cp_mwn_aipsfshop_aipsfkamachasi_4B9CF4Y6RVA6MJVRED7W&language=en_US&fbclid=IwAR2NOYEpSsG1tTudmSaYqoQXXocy7mZ_gOD2KhBi9OCHioAva1XCE5767Fc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mi página en Amazon
                </a>
              </button>
            </div>
          </div>
          <h2 className="titre-post">Mis horas de fotografias</h2>
          <p className="text-post">
            El mundo de la moda es un lugar fascinante y vibrante que abarca una
            amplia gama de estilos, tendencias y expresiones creativas. Desde
            las pasarelas hasta el día a día, la moda no solo refleja nuestra
            identidad, sino que también inspira confianza y creatividad.
            Explorar este mundo es sumergirse en un universo lleno de
            innovación, colores, telas exquisitas y diseños que impactan y
            cautivan nuestros sentidos. Es un espacio dinámico donde convergen
            la elegancia, la individualidad y la constante evolución de las
            tendencias, creando un entorno encantador y apasionante para todos
            aquellos que se sumergen en él
          </p>
        </div>
        <div className="menu">
          <Menu />
        </div>
      </div>
    </section>
  );
};

export default Single;
