import {
  Container,
  Divider,
  Center,
  Text,
  Grid,
  GridItem,
  Image,
} from "@chakra-ui/react";
import Instagram from "../assets/footer/Instagram.png";
import Tiktok from "../assets/footer/tik-tok 1.png";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <Container maxW="89%" mt="100px">
      <Divider orientation="horizontal" color="#4A9A91" border="solid 1px" />
      
      <Grid templateColumns="repeat(5, 1fr)" gap={1} >
        <GridItem colSpan={2}>
          <Center height="100px">
            <Link to={"/informacion"}>
            <h4 className="footerText">Más información</h4>
            </Link>
          </Center>
        </GridItem>
        <GridItem colSpan={1}>
          <Center height="100px">
            <Divider
              orientation="vertical"
              h="24px"
              border="solid 1px"
              color="#575757"
            />
          </Center>
        </GridItem>
        <GridItem colSpan={2}>
          <Center height="100px">
            <h4 className="footerText">Síguenos</h4>
            <a href="https://instagram.com/nala_tiendaa?igshid=MzRlODBiNWFlZA==" target="_blank">              
            <Image src={Instagram} ml="30px" boxSize="40px" />
            </a>
            <a href="https://www.tiktok.com/@nalatienda" target="_blank">
            <Image src={Tiktok} ml="5px" boxSize="30px" />
            </a>
          </Center>
        </GridItem>
      </Grid>
    </Container>
  );
};
