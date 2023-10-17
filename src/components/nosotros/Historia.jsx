import { Box, Container, Grid, GridItem, Image } from "@chakra-ui/react";
import Banner from "../../assets/nosotros/Imagen Historia.png";

export const Historia = () => {
  return (
    <Box id="historia">
      <div id="historiaDesktop">
        <Container maxWidth="90%">
          <Grid
            templateRows="repeat(6, 1fr)"
            templateColumns="repeat(6, 1fr)"
            gap={4}
            mt="5%"
          >
            <GridItem rowSpan={1} colSpan={3} display="flex" alignItems="end">
              <h1 className="titleHistoria">Historia</h1>
            </GridItem>
            <GridItem
              rowSpan={3}
              rowStart={3}
              colSpan={3}
              colStart={4}
              display="flex"
              justifyContent="center"
            >
              <Image src={Banner} className="bannerHistoria" />
            </GridItem>
            <GridItem rowSpan={5} colSpan={3}>
              <p className="historiaParrafo">
                Nala tienda nacio el año pasado después de terminar el colegio y
                con la incertidumbre de lo que iba a ser mi primer año de
                facultad. Sabia que era una carrera difícil y era muy complicado
                buscar un trabajo con los horarios que tenia. Un dia me puse a
                pensar que podía hacer y tenia 3 ideas principales: 1) Que me
                guste a mi lo que iba a vender y que sea de calidad, 2) que no
                me lleve mucho tiempo hacer, sino que sea mas dinámica la compra
                y venta, 3) que sea algo que aca no había o si había estaban
                demasiado caro por ser tendencia. Tenia ahorros e invertí en
                hacer un compra para ver como me iba, ver calidades y demás
                detalles. Y así nació Nala tienda en honor a mi perra Nala.
              </p>
            </GridItem>
          </Grid>
        </Container>
      </div>
      <div id="historiaMobile">
        <Container
          maxWidth="90%"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <h1 className="titleHistoria">Historia</h1>
          <p className="historiaParrafo">
            Nala tienda nacio el año pasado después de terminar el colegio y con
            la incertidumbre de lo que iba a ser mi primer año de facultad.
            Sabia que era una carrera difícil y era muy complicado buscar un
            trabajo con los horarios que tenia. Un dia me puse a pensar que
            podía hacer y tenia 3 ideas principales: 1) Que me guste a mi lo que
            iba a vender y que sea de calidad, 2) que no me lleve mucho tiempo
            hacer, sino que sea mas dinámica la compra y venta, 3) que sea algo
            que aca no había o si había estaban demasiado caro por ser
            tendencia. Tenia ahorros e invertí en hacer un compra para ver como
            me iba, ver calidades y demás detalles. Y así nació Nala tienda en
            honor a mi perra Nala.
          </p>
        </Container>
      </div>
    </Box>
  );
};
