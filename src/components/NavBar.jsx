import React, { useEffect, useState } from "react";
import icono from "../assets/navBar/Icono.png";
import icono1 from "../assets/navBar/Icono1.png";
import { Grid, GridItem, Box, Divider, Menu, MenuButton, MenuList, MenuItem, IconButton } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

export const NavBar = () => {
  const locationOne = useLocation();

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

  function tamVentana() {
    var tam = [0, 0];
    if (typeof window.innerWidth != 'undefined')
    {
      tam = [window.innerWidth,window.innerHeight];
    }
    else if (typeof document.documentElement != 'undefined'
        && typeof document.documentElement.clientWidth !=
        'undefined' && document.documentElement.clientWidth != 0)
    {
      tam = [
          document.documentElement.clientWidth,
          document.documentElement.clientHeight
      ];
    }
    else   {
      tam = [
          document.getElementsByTagName('body')[0].clientWidth,
          document.getElementsByTagName('body')[0].clientHeight
      ];
    }
    return tam;
  }

  return (
    <>
      { screen.width > 900? (  
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
          <GridItem display="flex" justifyContent="center">
            <Link to={"/"}>
              {validation() ? <img src={icono} /> : <img src={icono1} />}
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
      ):(
       <Box className="navMobile">
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<RxHamburgerMenu/>}
            variant="outline"
          />
          <MenuList>
            <MenuItem  command="⌘T">
              New Tab
            </MenuItem>
            <MenuItem  command="⌘N">
              New Window
            </MenuItem>
            <MenuItem  command="⌘⇧N">
              Open Closed Tab
            </MenuItem>
            <MenuItem  command="⌘O">
              Open File...
            </MenuItem>
          </MenuList>
        </Menu>
      </Box> )
}
    </>
  );
};
