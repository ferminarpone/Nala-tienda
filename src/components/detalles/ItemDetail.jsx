import { Container } from "@chakra-ui/react";
import { useContext } from "react";
import { FavoritoContext } from "../../context/FavContext";
import { ItemDetailMobile } from "./ItemDetailMobile";
import { ItemDetailDesktop } from "./ItemDetailDesktop";
import { LinkDetail } from "./LinkDetail";

export const ItemDetail = ({ id, nombre, img, precio, descripcion }) => {
  const { isOpen } = useContext(FavoritoContext);
  return (
    <Container
      maxWidth="80%"
      id="itemDetail"
      className={isOpen ? "openMobile" : ""}
    >
      <div id="linkItemDetail">
        <LinkDetail />
      </div>
      <div id="detallesDesktop">
        <ItemDetailDesktop
          id={id}
          precio={precio}
          nombre={nombre}
          img={img}
          descripcion={descripcion}
        />
      </div>
      <div id="detallesMobile">
        <ItemDetailMobile
          id={id}
          precio={precio}
          nombre={nombre}
          img={img}
          descripcion={descripcion}
        />
      </div>
    </Container>
  );
};
