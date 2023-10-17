import { Container, Divider } from "@chakra-ui/react";
import BrochePastel from "../../assets/home/BrochePastel.png";
import BrocheTransparente from "../../assets/home/BrocheTransparente.png";
import Strap from "../../assets/home/Strap.png";
import StrapNegro from "../../assets/home/StrapNegro.png";

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
        <img src={BrocheTransparente} alt="BrocheTransparente" />
        <img src={Strap} alt="Strap" />
        <img src={BrochePastel} alt="BrochePastel" />
        <img className="sinMargin" src={StrapNegro} alt="StrapNegro" />
      </div>
    </Container>
  );
};
