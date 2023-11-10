import { useContext } from "react";
import "./styles/personalizados.css";
import { Container, Grid, GridItem, Image } from "@chakra-ui/react";
import { NavBar, Formulario, Footer } from "../index";
import BannerPersonalizado from "../../assets/personalizados/BannerPersonalizado.png";
import { FavoritoContext } from "../../context/FavContext";
import { sheinOpen } from "./helper/sheinOpen";
import { useFocus, useScroll } from "../../hooks";
export const Personalizados = () => {
  const { isOpen, navExtend } = useContext(FavoritoContext);
  const { foco, makeFocus } = useFocus();
  useScroll();
  return (
    <>
      <div className="bgPersonalizadosDesktop">
        <NavBar />
        <div className={`bgPersonalizados ${isOpen ? "openP" : ""}`}>
          <div id="personalizadosMobile">
            <h1 className="titlePersMobile">Mucho Más</h1>
            <p>
              Estamos aquí para ayudarte con cualquier producto de Shein que
              quieras y no se encuentre en nuestro catálogo.{" "}
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
                <Image
                  src={BannerPersonalizado}
                  className="bannerPersonalizado"
                />
              </GridItem>
              <GridItem colSpan={3}>
                <h3 className="personalizadosText">
                  Estamos aquí para ayudarte con cualquier producto de Shein que
                  quieras y no este en nuestro catálogo.
                </h3>
              </GridItem>
              <GridItem colSpan={3}>
                <button
                  className="personalizadosButton"
                  onClick={() => sheinOpen()}
                >
                  IR A SHEIN
                </button>
                <button className="personalizadosButtonB" onClick={makeFocus}>
                  DEJA TUS DATOS
                </button>
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
      <div onClick={navExtend}>
        <div id="formularioPer" className={isOpen ? "openFormularioPer" : ""}>
          <Formulario foco={foco} />
        </div>
        <Footer />
      </div>
    </>
  );
};
