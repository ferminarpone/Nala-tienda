import {
  Box,
  Center,
  Container,
  Grid,
  GridItem,
  Image,
} from "@chakra-ui/react";
import HistoriaText from "../../assets/nosotros/Historia.png";
import Banner from "../../assets/nosotros/Banner Historia.png";
import FotoH from "../../assets/nosotros/FotoHistoria.png";

export const Historia = () => {
  return (
    <Box h="680px" bgColor="#4A9A91" display="flex" alignItems="center">
      <Container maxWidth="80%">
        <Grid
          templateRows="repeat(6, 1fr)"
          templateColumns="repeat(6, 1fr)"
          gap={4}
          h="auto"
        >
          <GridItem rowSpan={1} colSpan={3} display="flex" alignItems="end">
            <Image src={HistoriaText} />
          </GridItem>
          <GridItem rowSpan={6} colSpan={3}>
              <Box position="relative" w="83%" ml="60px" mt="125px">
                <Image
                  src={Banner}
                  position="absolute"
                  top="-14px"
                  right="16px"
                />
                <Image src={FotoH} position="absolute" />
              </Box>
          </GridItem>
          <GridItem rowSpan={5} colSpan={3}>
            <p className="historiaParrafo">
              Nala tienda nacio el año pasado después de terminar el colegio y
              con la incertidumbre de lo que iba a ser mi primer año de
              facultad. Sabia que era una carrera difícil y era muy complicado
              buscar un trabajo con los horarios que tenia. Un dia me puse a
              pensar que podía hacer y tenia 3 ideas principales: 1) Que me
              guste a mi lo que iba a vender y que sea de calidad, 2) que no me
              lleve mucho tiempo hacer, sino que sea mas dinámica la compra y
              venta, 3) que sea algo que aca no había o si había estaban
              demasiado caro por ser tendencia. Tenia ahorros e invertí en hacer
              un compra para ver como me iba, ver calidades y demás detalles. Y
              así nació Nala tienda en honor a mi perra Nala.
            </p>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};
