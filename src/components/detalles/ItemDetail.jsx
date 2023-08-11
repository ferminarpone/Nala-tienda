import {
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
import { useContext } from "react";
import { FavoritoContext } from "../../context/FavContext";

export const ItemDetail = ({ id, nombre, img }) => {
  const { fav, setFav } = useContext(FavoritoContext);
  const currentUrl = window.location.href;

  //Función que agrega item a Favoritos.
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
  };

  //Función que envia el producto en cuestion por wsp.
  const sendWsp = ()=>{
    const url = `https://web.whatsapp.com/send?phone=34617429097&text=%0A%2ANala%20tienda%2A%0AConsulta%20disponibilidad%20de%20productos%3A%0A%0A%2AProducto%3A%2A ${nombre}%0A%0A%2AId%3A%2A%${id}%0A%0A ${currentUrl}`;
    window.open(url,'_blank') 
    
  }
  
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
        <GridItem colSpan={1} rowSpan={3}>
          <Image
            src={img}
            alt={nombre}
            height="80%"
            w="92%"
            objectFit="cover"
            borderRadius="10px"
          />
        </GridItem>
        <GridItem colSpan={1} rowSpan={1}>
          <Flex justifyContent="space-between">
            <h2>{nombre}</h2>
            <Link to={"/favoritos"}>
              <Button
                variant="solid"
                className="buttonHeart"
                onClick={() => addToFav()}
              >
                <FaRegHeart />
              </Button>
            </Link>
          </Flex>
        </GridItem>
        <GridItem>
          <p className="descripcion"> • Descripción:</p>
        </GridItem>
        <GridItem display="flex" justifyContent="center">
          <Button className="pedidoWsp" onClick={()=>sendWsp()}>HACER PEDIDO POR WHATSAPP</Button>
        </GridItem>
      </Grid>
    </Container>
  );
};
