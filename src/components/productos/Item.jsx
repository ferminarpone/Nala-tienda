import {
  Box,
  Button,
  Center,
  Flex,
  GridItem,
  Image,
  Stack,
} from "@chakra-ui/react";
import { useContext } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FavoritoContext } from "../../context/FavContext";

export const Item = ({ nombre, categoria, img, id, precio }) => {
  const { idFound, addToFav } = useContext(FavoritoContext);
  return (
    <GridItem id="cardItem">
      <Center>
        <Box w="auto">
          <div className="imgMobile">
            <Link to={`/producto/${id}`}>
              <Image
                src={img}
                alt={nombre}
                borderRadius="lg"
                className="imgItem"
              />
            </Link>
          </div>
          <Stack mt="6" lineHeight="normal" id="inforCard">
            <h4>Shein</h4>
            <h5>{nombre}</h5>
            <p>$ {precio}</p>
          </Stack>
          <Flex justifyContent="space-between" id="doubleButton">
            <Box w="100%">
              <Link to={`/producto/${id}`}>
                <Button variant="solid" className="buttonCard">
                  LO QUIERO
                </Button>
              </Link>
            </Box>
            <Box>
              <Link to={idFound(id) ? "/productos" : "/favoritos"}>
                <Button
                  variant="solid"
                  className="buttonCardHeart"
                  onClick={() => addToFav(id, img, nombre)}
                >
                  {idFound(id) ? (
                    <FaHeart className="heart" />
                  ) : (
                    <FaRegHeart className="heart" />
                  )}
                </Button>
              </Link>
            </Box>
          </Flex>
        </Box>
      </Center>
    </GridItem>
  );
};
