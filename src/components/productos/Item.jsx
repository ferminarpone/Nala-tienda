import {
  Box,
  Button,
  Center,
  Flex,
  GridItem,
  Image,
  Stack
} from "@chakra-ui/react";
import { useContext } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FavoritoContext } from "../../context/FavContext";

export const Item = ({ nombre, categoria, img, id }) => {
  const { fav, setFav } = useContext(FavoritoContext);

  const addToFav = () => {
    setFav((favItems) => {
      const itemFound = favItems.find((item) => item.id === id);
      if (itemFound) {
        return favItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        return [
          ...favItems,
          { id, img, nombre, quantity: 1 },
        ];
      }
    });
  };

  return (
    <GridItem id="cardItem">
      <Center>
        <Box w="auto">
          <Image
            src={img}
            alt={nombre}
            borderRadius="lg"
            w="330px"
            h="280px"
            objectFit="cover"
          />
          <Stack mt="6" lineHeight="normal">
            <h4>Shein</h4>
            <h5>{nombre}</h5>
            <p>$ 1.000</p>
          </Stack>
          <Flex justifyContent="space-between">
            <Box w="100%">
              <Link to={`/producto/${id}`}>
                <Button variant="solid" className="buttonCard">
                  LO QUIERO
                </Button>
              </Link>
            </Box>
            <Box>
              <Link to={"/favoritos"}>
                <Button
                  variant="solid"
                  className="buttonCardHeart"
                  onClick={() => addToFav()}
                >
                  <FaRegHeart />
                </Button>
              </Link>
            </Box>
          </Flex>
        </Box>
      </Center>
    </GridItem>
  );
};
