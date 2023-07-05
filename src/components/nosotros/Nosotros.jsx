import { Container, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { NavBar } from "../NavBar";
import Circulo from "../../assets/nosotros/Rectangle 20.png";
import FotoCirculo from "../../assets/nosotros/Mask group.png";
import Titulo from "../../assets/nosotros/Que hacemos.png";

export const Nosotros = () => {
  return (
    <>
      <div id="bgNosotros">
        <NavBar />
        <Container maxWidth="90%">
          <Grid
            h="470px"
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(6, 1fr)"
            gap={4}
          >
            <GridItem rowSpan={2} colSpan={3}>
              <Image
                src={Circulo}
                position="absolute"
                left="60px"
                top="130px"
                h="50%"
              />
              <Image src={FotoCirculo} position="absolute" h="50%"/>
            </GridItem>
            <GridItem rowSpan={1} colSpan={3} display="flex" alignItems="end">
              <Image src={Titulo} />
            </GridItem>
            <GridItem rowSpan={1} colSpan={3}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                sequi cumque voluptatum explicabo ipsa neque voluptatem esse
                nisi magni! Repellat officia itaque accusantium dolores iste,
                debitis maxime accusamus? Tenetur, dignissimos!
              </p>
            </GridItem>
          </Grid>
        </Container>
      </div>
    </>
  );
};
