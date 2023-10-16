import {
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Image,
  Stack,
} from "@chakra-ui/react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { FavoritoContext } from "../../context/FavContext";

export const ItemDetail = ({ id, nombre, img, precio, descripcion }) => {
  const { isOpen, idFound, addToFav } = useContext(FavoritoContext);
  const currentUrl = window.location.href;
  //Función que envia el producto en cuestion por wsp.
  const sendWsp = () => {
    const url = `https://web.whatsapp.com/send?phone=34617429097&text=%0A%2ANala%20tienda%2A%0AConsulta%20disponibilidad%20de%20producto%0A%0A%2AProducto%3A%2A ${nombre}%0A%0A%2AId%3A%2A%${id}%0A%0A ${currentUrl}`;
    window.open(url, "_blank");
  };

  return (
    <Container
      maxWidth="80%"
      id="itemDetail"
      className={isOpen ? "openMobile" : ""}
    >
      <div id="linkItemDetail">
        <div className="linkBack">
          <Link to={"/productos"}>
            <div className="back">
              <div>
                <AiOutlineLeft />
              </div>
              <p>Productos</p>
            </div>
          </Link>
        </div>

        <div className="favoritosBack">
          <Link to={"/favoritos"}>
            <div className="back">
              <p>Favoritos</p>
              <div>
                <AiOutlineRight />
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div id="detallesDesktop">
        <Grid
          templateRows="repeat(7, 1fr)"
          templateColumns="repeat(2, 1fr)"
          gap={4}
          mt="20px"
          mb="-100px"
        >
          <GridItem colSpan={1} rowSpan={6}>
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
{/*           <GridItem rowSpan={1}>
            <p className="precio">$ {precio}</p>
          </GridItem> */}
          <GridItem rowSpan={3}>
            <p className="descripcion">{descripcion}</p>
          </GridItem>
          <GridItem display="flex" justifyContent="center" rowSpan={1}>
            <Button className="pedidoWsp" onClick={sendWsp}>
              HACER PEDIDO POR WHATSAPP
            </Button>
          </GridItem>
        </Grid>
      </div>
      <div id="detallesMobile">
        <div className="imgItemDetail">
          <Image src={img} alt={nombre} borderRadius="lg" />
        </div>
        <Stack mt="6" lineHeight="normal" id="infoDetallesCard">
          <div className="cardGroup">
            <h5>{nombre}</h5>
            <Link
              to={idFound(id) ? `/producto/${id}` : "/favoritos"}
              onClick={() => addToFav(id, img, nombre)}
            >
              <div>
                {idFound(id) ? (
                  <FaHeart className="favDetallesMobile" />
                ) : (
                  <FaRegHeart className="favDetallesMobile" />
                )}
              </div>
            </Link>
          </div>
          <p>$ {precio}</p>
          <p className="descripcionMobile">{descripcion}</p>
        </Stack>
        <div id="butonWsp">
          <Button className="pedidoWsp" onClick={sendWsp}>
            HACER PEDIDO POR WHATSAPP
          </Button>
        </div>
      </div>
    </Container>
  );
};
