import "./contactanos.css";
import { Box, Container, Grid, GridItem, Image } from "@chakra-ui/react";
import { Footer } from "../../components/footer/Footer";
import { NavBar } from "../navbar/NavBar";
import { InfoContactanos } from "./InfoContactanos";
import { FormContactanos } from "./FormContactanos";
import Imagen1 from "../../assets/contactanos/Imagen 1.png";
import Imagen2 from "../../assets/contactanos/Imagen 2.png";
import Cuadro from "../../assets/contactanos/Rectangle 16.png";
import title from "../../assets/contactanos/ContáctanosMobile.png";
import { useContext } from "react";
import { FavoritoContext } from "../../context/FavContext";

export const Contactanos = () => {
  const { isOpen } = useContext(FavoritoContext);

  return (
    <>
      <NavBar />
      <div id="contactanosDesktop">
        <Container maxWidth="90%" mt="50px" mb="120px">
          <Grid
            templateRows="repeat(4, 1fr)"
            templateColumns="repeat(6, 1fr)"
            gap={4}
            
          >
            <GridItem rowSpan={2} rowStart={2} colSpan={3} bgColor="red">
              <div className="bannerBox">
                <Image
                  src={Cuadro}
                  className="cuadroImg2"
                />
                <Image src={Imagen2} alt="Gorra" 
                className="imagen2" />
                <Image
                  src={Cuadro}
                  alt=""
                  className="cuadroImg1"
                />
                <Image
                  src={Imagen1}
                  alt="Gorra"
                  className="imagen1"
                />
              </div>
            </GridItem>
            <GridItem rowSpan={2} colSpan={3} bgColor="red">
              <InfoContactanos />
            </GridItem>
            <GridItem rowSpan={2} colSpan={3} bgColor="red">
              <FormContactanos />
            </GridItem>
          </Grid>
        </Container>
      </div>
      <div id="contactanosMobile" className={isOpen ? "open" : ""}>
        <Image src={title} alt="titulo" />
      </div>
      <div id="componentsMobile">
        <FormContactanos />
        <InfoContactanos />
      </div>
      <Footer />
    </>
  );
};
