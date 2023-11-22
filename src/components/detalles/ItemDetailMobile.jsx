import {
    Button,
    Collapse,
    Image,
    Stack,
  } from "@chakra-ui/react";
import {
    AiOutlineDown,
    AiOutlineUp,
  } from "react-icons/ai";
import { useExtend } from "../../hooks";
import { useContext } from "react";
import { FavoritoContext } from "../../context/FavContext";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";


export const ItemDetailMobile = ({ id, nombre, img, precio, descripcion }) => {
    const { idFound, addToFav } = useContext(FavoritoContext);
    const { show, handleToggle } = useExtend();
    const currentUrl = window.location.href;
  return (
    <>
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
        {descripcion.split(" ").length > 20 ? (
          <div>
            <Collapse
              startingHeight={32}
              in={show}
              className="descripcionMobile"
            >
              {descripcion}
            </Collapse>
            <button onClick={handleToggle} className="show">
              {show ? (
                <div>
                  <AiOutlineUp /> Ver menos
                </div>
              ) : (
                <div>
                  <AiOutlineDown /> Ver más
                </div>
              )}
            </button>
          </div>
        ) : (
          <p className="descripcionMobile">{descripcion}</p>
        )}
      </Stack>
      <div id="butonWsp">
        <Button
          className="pedidoWsp"
          onClick={() => sendWsp(nombre, currentUrl)}
        >
          HACER PEDIDO POR WHATSAPP
        </Button>
      </div>
    </>
  );
};
