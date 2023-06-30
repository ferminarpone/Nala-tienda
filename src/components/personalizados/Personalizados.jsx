import { Container, Grid, GridItem, Image } from "@chakra-ui/react";
import { NavBar } from "../NavBar";
import { Formulario } from "./Formulario";
import BannerPersonalizado from "../../assets/personalizados/BannerPersonalizado.png";
import AlgoMas from "../../assets/personalizados/Algo más.png";
export const Personalizados = () => {
  return (
    <>
      <div className="bgPersonalizados">
        <NavBar />
        <Container maxWidth="90%">
          <Grid
            h="300"
            templateRows="repeat(3, 1fr)"
            templateColumns="repeat(5, 1fr)"
            gap={4}
          >
            <GridItem colStart={4} rowSpan={3} colSpan={2} display="flex" justifyContent="center">
              <Image src={BannerPersonalizado} h="300px"/>
            </GridItem>
            <GridItem colSpan={3} bg="blue"></GridItem>
            <GridItem colSpan={3} bg="papayawhip"></GridItem>
            <GridItem
              rowStart={1}
              rowSpan={1}
              colSpan={3}
            >
              <Image src={AlgoMas}/>
            </GridItem>
          </Grid>
        </Container>
      </div>

      <Formulario />
    </>
  );
};
