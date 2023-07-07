import { Box, Container, Grid, GridItem, Image } from "@chakra-ui/react";
import HistoriaText from "../../assets/nosotros/Historia.png";
import Banner from "../../assets/nosotros/Banner Historia.png";
import FotoH from '../../assets/nosotros/FotoHistoria.png'

export const Historia = () => {
  return (
    <Box h="680px" bgColor="#4A9A91" display="flex" alignItems="center">
      <Container maxWidth="80%">
        <Grid
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(6, 1fr)"
          gap={4}
          h="auto"
        >
          <GridItem rowSpan={1} colSpan={3} display="flex" alignItems="end" >
            <Image src={HistoriaText}/>
          </GridItem>
          <GridItem rowSpan={2} colSpan={3}>

          <Box position="relative" w="83%" ml="60px">
              <Image
                src={Banner}
                position="absolute"
                top="-14px"
                right="16px"
              />
              <Image src={FotoH} position="absolute"/>
            </Box>

          </GridItem>
          <GridItem rowSpan={1} colSpan={3}>
            <p className="historiaParrafo">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At sequi
              cumque voluptatum explicabo ipsa neque voluptatem esse nisi magni!
            </p>
          </GridItem>
        </Grid>

        {/*         <Grid
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
            <Image src={Titulo} />
          </GridItem>
          <GridItem rowSpan={1} colSpan={3} mb="100px" ml="30px">
            <p className="nosotrosParrafo">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At sequi
              cumque voluptatum explicabo ipsa neque voluptatem esse nisi magni!
            </p>
          </GridItem>
        </Grid> */}
      </Container>
    </Box>
  );
};
