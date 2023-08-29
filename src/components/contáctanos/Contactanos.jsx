import { Box, Container, Grid, GridItem, Image } from "@chakra-ui/react";
import { Footer } from "../Footer";
import { NavBar } from "../NavBar";
import { InfoContactanos } from "./InfoContactanos";
import { FormContactanos } from "./FormContactanos";
import Imagen1 from "../../assets/contactanos/Imagen 1.png";
import Imagen2 from "../../assets/contactanos/Imagen 2.png";
import Cuadro from "../../assets/contactanos/Rectangle 16.png";

export const Contactanos = () => {
  return (
    <>
      <NavBar />
      <Container maxWidth="90%" mt="50px" mb="120px">
        <Grid
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(6, 1fr)"
          gap={4}
          h="auto"
        >
          <GridItem rowSpan={2} colSpan={4}>
            <Box position="relative" w="58%">
              <Image
                src={Cuadro}
                alt=""
                position="absolute"
                top="20px"
                left="-18px"
              />
              <Image src={Imagen2} alt="Gorra" position="absolute" />
              <Image
                src={Cuadro}
                alt=""
                position="absolute"
                top="434px"
                left="140px"
              />
              <Image
                src={Imagen1}
                alt="Gorra"
                position="absolute"
                top="408px"
                left="160px"
              />
            </Box>
          </GridItem>
          <GridItem rowSpan={1} colSpan={2}>
            <InfoContactanos />
          </GridItem>
          <GridItem rowSpan={1} colSpan={2}>
            <FormContactanos />
          </GridItem>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};
