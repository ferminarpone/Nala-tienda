import icono from "../../assets/navBar/Icono.png";
import icono1 from "../../assets/navBar/Icono1.png";
import {
  Grid,
  GridItem,
  Box,
  Divider,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Image,
  Text,
  Accordion,
  AccordionItem,
  AccordionIcon,
  AccordionButton,
  AccordionPanel,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

export const NavBarMobile = () => {
  return (
    /*     <Box id="navMobile">
      <Menu>
        <MenuButton ml="15px" bgColor="#4a9a91" color="white" fontSize="1.7rem">
          {" "}
          <RxHamburgerMenu />{" "}
        </MenuButton>
        <MenuList ml="-15px">
            <MenuItem >
              Productos
            </MenuItem>
            <MenuItem>
              <p>Personalizados</p>
            </MenuItem>
            <MenuItem>Nosotros</MenuItem>
            <MenuItem>Contactanos</MenuItem>
        </MenuList>
      </Menu>
      <Image src={icono} />
    </Box> */

    <Accordion defaultIndex={[0]} allowMultiple bgColor="#4a9a91">
      <AccordionItem>
        <Text h="70px" display="flex">
          <AccordionButton>
            <Box
              as="span"
              flex="1"
              textAlign="left"
              fontSize="1.6rem"
              color="white"
            >
              <RxHamburgerMenu />
            </Box>
          </AccordionButton>
        </Text>
        <AccordionPanel pb={4} bgColor="#4a9a91">
          <ul className="navList">
            <li> <Link to={"/productos"}>
              Productos
            </Link></li>
            <li>Personalizados</li>
            <li>Nosotros</li>
            <li>Contactanos</li>
          </ul>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
