import React from "react";
import icono from "../assets/Icono.png";
import { Grid, GridItem, Box, Flex, Center } from "@chakra-ui/react";

export const NavBar = () => {
  return (
    <Box mr="10" ml="10" pt="6">
      <Grid
        id="navBar"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
      >
        <GridItem rowSpan={1} colSpan={1}>
          <h2>PRODUCTOS</h2>
        </GridItem>
        <GridItem>
          <h2>PERSONALIZADOS</h2>
        </GridItem>
        <GridItem display="flex" justifyContent="center">
          <img src={icono} />
        </GridItem>
        <GridItem>
          <h2>NOSOTROS</h2>
        </GridItem>
        <GridItem>
          <h2>CONTÁCTANOS</h2>
        </GridItem>
        <GridItem colSpan={2}>
          <hr className="underline" />
        </GridItem>
        <GridItem colStart={4} colSpan={2}>
          <hr className="underline" />
        </GridItem>
      </Grid>
    </Box>
  );
};
