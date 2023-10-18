import "./contactanos.css";
import { Container, Grid, GridItem, Image } from "@chakra-ui/react";
import { Footer } from "../footer/Footer";
import { NavBar } from "../navbar/NavBar";
import { InfoContactanos } from "./InfoContactanos";
import { FormContactanos } from "./FormContactanos";
import Banner from "../../assets/contactanos/Imagen Contactanos.png";
import { useContext } from "react";
import { FavoritoContext } from "../../context/FavContext";

export const Contactanos = () => {
  const { isOpen, setIsOpen } = useContext(FavoritoContext);
  return (
    <>
      <NavBar />
      <div id="contactanosDesktop">
        <Container maxWidth="90%" mt="25px">
          <Grid
            templateRows="repeat(3, 1fr)"
            templateColumns="repeat(7, 1fr)"
            gap={4}
            className="gridContactanos"
          >
            <GridItem rowSpan={3} colSpan={4}>
              <Image
                src={Banner}
                className="bannerContactanos"
                alt="Gorras Shein"
              />
            </GridItem>
            <GridItem rowSpan={1} colSpan={3}>
              <InfoContactanos />
            </GridItem>
            <GridItem rowSpan={2} colSpan={3}>
              <FormContactanos />
            </GridItem>
          </Grid>
        </Container>
      </div>
      <div onClick={() => isOpen && setIsOpen(!isOpen)}>
        <div id="contactanosMobile" className={isOpen ? "open" : ""}>
          <h1 className="titleInfo">Contáctanos</h1>
        </div>
        <div id="componentsMobile">
          <FormContactanos />
          <InfoContactanos />
        </div>
        <Footer />
      </div>
    </>
  );
};
