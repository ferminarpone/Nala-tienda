import { Container, Divider } from "@chakra-ui/react";
import Gorra from "../../assets/home/Gorra argollas.png";
import Estrella from "../../assets/home/Estrellas.png";
import Strass from "../../assets/home/Ombligo strass.png";
import Durazno from "../../assets/home/Durazno.png";
import { Link } from "react-router-dom";

export const Destacados = () => {
  return (
    <Container maxWidth="90%" pt="90px">
      <div className="divTitle">
        <h2 className="title">DESTACADOS</h2>
        <Divider
          orientation="horizontal"
          color="#4A9A91"
          border="solid 1px"
          className="dividerDestacados"
        />
      </div>
      <div id="destacados">
        <Link to={`/producto/pSlVW10RRGrC8uOhVTzG`} className="link">
          <button>
            <img src={Gorra} alt="Gorra argollas" />
          </button>
        </Link>
        <Link to={`/producto/wlOOCOHdgTwGB9hR3tQU`} className="link">
          <button>
            <img src={Estrella} alt="Body chain Estrellas" />
          </button>
        </Link>
        <Link to={`/producto/uspK7nr8cMFgJVNT1Mie`} className="link">
          <button>
            <img src={Strass} alt="Ombligo Strass" />
          </button>
        </Link>
        <Link to={`/producto/5CRyl44dxclPMwBW6PRB`}>
          <button className="sinMargin">
            <img src={Durazno} alt="Llavero duraznos" />
          </button>
        </Link>
      </div>
    </Container>
  );
};
