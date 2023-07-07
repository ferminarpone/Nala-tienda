import { Box, Container, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { NavBar } from "../NavBar";
import Circulo from "../../assets/nosotros/Rectangle 20.png";
import FotoCirculo from "../../assets/nosotros/Mask group.png";
import Titulo from "../../assets/nosotros/Que hacemos.png";

export const Nosotros = () => {
  return (
    <>
      <div id="bgNosotros">
        <NavBar />
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
            <GridItem rowSpan={1} colSpan={3} display="flex" alignItems="end" ml="30px">
              <Image src={Titulo} />
            </GridItem>
            <GridItem rowSpan={1} colSpan={3} mb="100px" ml="30px">
              <p className="nosotrosParrafo">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                sequi cumque voluptatum explicabo ipsa neque voluptatem esse
                nisi magni!
              </p>
            </GridItem>
          </Grid>
        </Container>
      </div>
    </>
  );
};
