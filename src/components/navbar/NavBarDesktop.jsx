import icono from "../../assets/navBar/Icono.png";
import icono1 from "../../assets/navBar/Icono1.png";
import { Grid, GridItem, Box, Divider } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

export const NavBarDesktop = () => {
    const locationOne = useLocation();

    //Validación para estilos condicionales.
    let validacion;
    const validation = () => {
      if (locationOne.pathname == "/") {
        return (validacion = true);
      } else if (locationOne.pathname == "/personalizados") {
        return (validacion = true);
      } else if (locationOne.pathname == "/informacion") {
        return (validacion = true);
      } else {
        return (validacion = false);
      }
    };
  return (
    <Box mr="10" ml="10" pt="6" className="navDesktop">
        <Grid
          id="navBar"
          className={validation() ? "navBar" : "navBar1"}
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(5, 1fr)"
        >
          <GridItem rowSpan={1} colSpan={1}>
            <Link to={"/productos"}>
              <h2>PRODUCTOS</h2>
            </Link>
          </GridItem>
          <GridItem>
            <Link to={"/personalizados"}>
              <h2>PERSONALIZADOS</h2>
            </Link>
          </GridItem>
          <GridItem display="flex" justifyContent="center" className="logoSize">
            <Link to={"/"}>
              {validation() ? <img src={icono} alt="Logo Nala Tienda" className="logoSize"/> : <img src={icono1} alt="Logo Nala Tienda" className="logoSize"/>}
            </Link>
          </GridItem>
          <GridItem>
            <Link to={"/nosotros"}>
              <h2>NOSOTROS</h2>
            </Link>
          </GridItem>
          <GridItem>
            <Link to={"/contactanos"}>
              <h2>CONTÁCTANOS</h2>
            </Link>
          </GridItem>
          <GridItem colSpan={2}>
            <Divider
              orientation="horizontal"
              border="1px solid"
              className="underline"
            />
          </GridItem>
          <GridItem colStart={4} colSpan={2}>
            <Divider
              orientation="horizontal"
              border="1px solid"
              className="underline"
            />
          </GridItem>
        </Grid>
      </Box> 
  )
}
