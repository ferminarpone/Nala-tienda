import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Image,
} from "@chakra-ui/react";
import { FaRegHeart } from "react-icons/fa";

export const ItemDetail = ({ product }) => {
  return (
    <Container maxWidth="80%">
      <Grid
        templateRows="repeat(3, 1fr)"
        templateColumns="repeat(2, 1fr)"
        gap={4}
      >
        <GridItem colSpan={1} rowSpan={3} >
          <Image src={product.img} alt={product.nombre} height="80%" w="92%" objectFit="cover" borderRadius="10px"/>
        </GridItem>
        <GridItem colSpan={1} rowSpan={1}>
          <Flex justifyContent="space-between"> 
            <h2>{product.nombre}</h2>
            <Button variant="solid" className="buttonCardHeart">
              <FaRegHeart />
            </Button>
          </Flex>
        </GridItem>
        <GridItem>
          <p>Descripción</p>
        </GridItem>
        <GridItem bgColor="red">
          <Button mt="26px">HACER PEDIDO POR WHATSAPP</Button>
        </GridItem>
      </Grid>
    </Container>
  );
};
