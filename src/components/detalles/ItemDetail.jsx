import { Button, Container, Grid, GridItem, Image } from "@chakra-ui/react";

export const ItemDetail = ({ product }) => {
  return (
    <Container maxWidth="80%">
      <Grid
        templateRows="repeat(3, 1fr)"
        templateColumns="repeat(2, 1fr)"
        gap={4}
      >
        <GridItem colSpan={1} rowSpan={3}><Image src={product.img} alt={product.nombre}/></GridItem>
        <GridItem colSpan={1} rowSpan={1}><h2>{product.nombre}</h2></GridItem>
        <GridItem><p>Descripción</p></GridItem>
        <GridItem><Button>HACER PEDIDO POR WHATSAPP</Button> </GridItem>
      </Grid>
      </Container>
  );
};
