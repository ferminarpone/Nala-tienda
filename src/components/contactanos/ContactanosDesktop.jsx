import { Container, Grid, GridItem, Image } from "@chakra-ui/react";
import Banner from "../../assets/contactanos/Imagen Contactanos.png";
import { InfoContactanos } from "./InfoContactanos";
import { FormContactanos } from "./FormContactanos";
export const ContactanosDesktop = () => {
  return (
    <Container maxWidth="90%" mt="25px">
      <Grid
        templateRows="repeat(3, 1fr)"
        templateColumns="repeat(7, 1fr)"
        gap={4}
        className="gridContactanos"
      >
        <GridItem rowSpan={3} colSpan={4}>
          <Image
            src={Banner}
            className="bannerContactanos"
            alt="Gorras Shein"
          />
        </GridItem>
        <GridItem rowSpan={1} colSpan={3}>
          <InfoContactanos />
        </GridItem>
        <GridItem rowSpan={2} colSpan={3}>
          <FormContactanos />
        </GridItem>
      </Grid>
    </Container>
  );
};
