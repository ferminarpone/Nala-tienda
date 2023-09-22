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
import { set } from "react-hook-form";

export const Item = ({ nombre, categoria, img, id }) => {
  const { fav, setFav, idFound } = useContext(FavoritoContext);


/* 
ORIGINAL
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
        return [...favItems, { id, img, nombre, quantity: 1 }];
      }
    });
  }; */

  // Función que agrega o elimina un producto de favoritos.

  const addToFav = () => {

    const itemExist = fav.find((item)=> item.id ===id)
    if(itemExist){
      const newFav = fav.filter((item) => item.id !== id);
      setFav(newFav);
    }else{
      const favItem = [...fav, {id, img, nombre}]
      setFav(favItem)
    }
  };

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
            <Link to={"/favoritos"} onClick={() => addToFav()}>
              {idFound(id) ? (
                <FaHeart className="favMobile" />
              ) : (
                <FaRegHeart className="favMobile" />
              )}
            </Link>
          </div>
          <Stack mt="6" lineHeight="normal" id="inforCard">
            <h4>Shein</h4>
            <h5>{nombre}</h5>
            <p>$ 1.000</p>
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
              <Link to={idFound(id)? "/productos" : "/favoritos" }>
                <Button
                  variant="solid"
                  className="buttonCardHeart"
                  onClick={() => addToFav()}
                >
              {idFound(id) ? (
                <FaHeart className="heart"/>
              ) : (
                <FaRegHeart className="heart"/>
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
