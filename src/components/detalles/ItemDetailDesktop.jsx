import { Button, Flex, Grid, GridItem, Image } from "@chakra-ui/react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { FavoritoContext } from "../../context/FavContext";
import { sendWsp } from "./helper/sendWsp";

export const ItemDetailDesktop = ({ id, nombre, img, precio, descripcion }) => {
  const { idFound, addToFav } = useContext(FavoritoContext);
  return (
    <Grid
      templateRows="repeat(6, 1fr)"
      templateColumns="repeat(2, 1fr)"
      gap={4}
      mt="20px"
      mb="100px"
      maxHeight="450px"
    >
      <GridItem colSpan={1} rowSpan={6}>
        <Image
          src={img}
          alt={nombre}
          height="100%"
          w="94%"
          objectFit="cover"
          borderRadius="10px"
        />
      </GridItem>
      <GridItem colSpan={1} rowSpan={1}>
        <Flex justifyContent="space-between">
          <h2>{nombre}</h2>
          <Link to={idFound(id) ? `/producto/${id}` : "/favoritos"}>
            <Button
              variant="solid"
              className="buttonHeart"
              onClick={() => addToFav(id, img, nombre)}
            >
              {idFound(id) ? (
                <FaHeart className="heartDesktop" />
              ) : (
                <FaRegHeart className="heartDesktop" />
              )}
            </Button>
          </Link>
        </Flex>
      </GridItem>
      <GridItem rowSpan={1}>
        <p className="precio">$ {precio}</p>
      </GridItem>
      <GridItem rowSpan={3}>
        <p className="descripcion">{descripcion}</p>
      </GridItem>
      <GridItem display="flex" alignItems="end" rowSpan={1}>
        <Button className="pedidoWsp" onClick={sendWsp}>
          HACER PEDIDO POR WHATSAPP
        </Button>
      </GridItem>
    </Grid>
  );
};
