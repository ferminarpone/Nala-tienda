import "./nosotros.css";
import { Box, Container, Grid, GridItem, Image } from "@chakra-ui/react";
import { NavBar } from "../navbar/NavBar";
import Circulo from "../../assets/nosotros/Rectangle 20.png";
import FotoCirculo from "../../assets/nosotros/Mask group.png";
import Titulo from "../../assets/nosotros/Que hacemos.png";
import { Historia } from "./Historia";
import { Terminos } from "./Terminos";
import { Footer } from "../../components/footer/Footer";

export const Nosotros = () => {
  return (
    <>
      <div id="bgNosotros">
        <NavBar />
        <div className="mobile"></div>
        <div id="nosotrosDesktop">
          <Container maxWidth="80%">
            <Grid
              h="470px"
              templateRows="repeat(2, 1fr)"
              templateColumns="repeat(6, 1fr)"
              gap={4}
            >
              <GridItem rowSpan={2} colSpan={3}>
                <Box position="relative" w="83%" mt="16px">
                  <Image
                    src={Circulo}
                    position="absolute"
                    top="20px"
                    left="-18px"
                  />
                  <Image src={FotoCirculo} position="absolute" />
                </Box>
              </GridItem>
              <GridItem
                rowSpan={1}
                colSpan={3}
                display="flex"
                alignItems="end"
                ml="30px"
              >
                <Image src={Titulo} alt="Que hacemos" />
              </GridItem>
              <GridItem rowSpan={1} colSpan={3} mb="100px" ml="30px">
                <p className="nosotrosParrafo">
                  Nala tienda es un emprendimiento que compra en la pagina
                  original de Shein, trayendo los productos de Brasil. Contamos
                  con dos tipos de venta, por un lado vendemos los productos en
                  tendencias y por otro tenemos un servicio personalizado de
                  traerte hasta tu casa lo que vos quieras dentro de las
                  categorías más accesibles por el tamaño (como maquillaje,
                  fundas de celular o auriculares, billetera, cartera, medias,
                  etc).
                </p>
              </GridItem>
            </Grid>
          </Container>
        </div>
        <div id="nosotrosMobile">
          <Container
            maxW="90%"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Image src={Titulo} alt="Que hacemos" />
            <p className="nosotrosParrafo">
              Nala tienda es un emprendimiento que compra en la pagina original
              de Shein, trayendo los productos de Brasil. Contamos con dos tipos
              de venta, por un lado vendemos los productos en tendencias y por
              otro tenemos un servicio personalizado de traerte hasta tu casa lo
              que vos quieras dentro de las categorías más accesibles por el
              tamaño (como maquillaje, fundas de celular o auriculares,
              billetera, cartera, medias, etc).
            </p>
          </Container>
        </div>
        {/*    <Historia />
             <Terminos /> 
             */}
      </div>
      <Footer />
    </>
  );
};
