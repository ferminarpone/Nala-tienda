import { Container, Grid, GridItem, Image, Button } from "@chakra-ui/react";
import { NavBar } from "../navbar/NavBar";
import { Formulario } from "./Formulario";
import BannerPersonalizado from "../../assets/personalizados/BannerPersonalizado.png";
import muchoMas from "../../assets/personalizados/Mucho más.png";
import { Footer } from "../../components/footer/Footer";
import "./personalizados.css";
import { useContext } from "react";
import { FavoritoContext } from "../../context/FavContext";

export const Personalizados = () => {
  const { isOpen } = useContext(FavoritoContext);
  const sheinOpen = () => {
    window.open(
      "https://es.shein.com/?url_from=esgooglebrandshein_srsa_Shein01_20221011&cid=18569136939&setid=143075703795&adid=627556790592&pf=GOOGLE&gclid=Cj0KCQjwuNemBhCBARIsADp74QRjiuUE0FiDAH3TdzzJAWYOTm_vsQM_SLXOkPFflv7FWTBydcHKdu4aAknZEALw_wcB",
      "_blank"
    );
  };
  return (
    <>
      <div className="bgPersonalizadosDesktop">
        <NavBar />

        <div className={`bgPersonalizados ${isOpen ? "openP" : ""}`}>
          <div id="personalizadosMobile">
            <Image src={muchoMas} w="48%" ml="26%" />
            <p>
              Estamos aquí para ayudarte con cualquier productode Shein que
              quieras y no se encuentre en nuestro catálogo{" "}
            </p>
          </div>

          <Container maxWidth="90%" id="personalizados">
            <Grid
              h="auto"
              templateRows="repeat(3, 1fr)"
              templateColumns="repeat(6, 1fr)"
              gap={1}
              mt="50px"
            >
              <GridItem
                colStart={4}
                rowSpan={3}
                colSpan={3}
                display="flex"
                justifyContent="center"
              >
                <Image src={BannerPersonalizado} className="bannerPersonalizado" />
              </GridItem>
              <GridItem colSpan={3}>
                <h3 className="personalizadosText">
                  Estamos aquí para ayudarte con cualquier producto de Shein que
                  quieras y no este en nuestro catálogo.
                </h3>
              </GridItem>
              <GridItem colSpan={3}>
                <Button
                  variant="outline"
                  _hover={{
                    bg: "#4A9A91",
                    transform: "scale(1.1)",
                  }}
                  className="personalizadosButton"
                  bg="#4A9A91"
                  color="#ffffff"
                  size="lg"
                  onClick={() => sheinOpen()}
                >
                  DEJA TUS DATOS
                </Button>
              </GridItem>
              <GridItem
                rowStart={1}
                rowSpan={1}
                colSpan={3}
                display="flex"
                alignItems="center"
              >
                <h1 className="titlePersonalizados"> Algo Más </h1>
              </GridItem>
            </Grid>
          </Container>
          
        </div>
      </div>
      <Formulario />
      <Footer />
    </>
  );
};
