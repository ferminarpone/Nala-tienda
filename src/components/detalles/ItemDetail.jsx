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
import { AiOutlineLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

export const ItemDetail = ({ product }) => {
  return (
    <Container maxWidth="80%" id="itemDetail">
      <Link to={"/productos"}>

      <Flex className="back">
        <div>
      <AiOutlineLeft />
        </div>
      <p>Atrás</p>
      </Flex>
      </Link>
      <Grid
        templateRows="repeat(3, 1fr)"
        templateColumns="repeat(2, 1fr)"
        gap={4}
        mt="20px"
        mb="-100px"
      >
        <GridItem colSpan={1} rowSpan={3} >
          <Image src={product.img} alt={product.nombre} height="80%" w="92%" objectFit="cover" borderRadius="10px"/>
        </GridItem>
        <GridItem colSpan={1} rowSpan={1}>
          <Flex justifyContent="space-between"> 
            <h2>{product.nombre}</h2>
            <Button variant="solid" className="buttonHeart">
              <FaRegHeart />
            </Button>
          </Flex>
        </GridItem>
        <GridItem>
          <p className="descripcion"> • Descripción:</p>
        </GridItem>
        <GridItem  display="flex" justifyContent="center">
          <Button className="pedidoWsp">HACER PEDIDO POR WHATSAPP</Button>
        </GridItem>
      </Grid>
    </Container>
  );
};
