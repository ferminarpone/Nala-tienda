import { Footer } from "../Footer";
import { NavBar } from "../NavBar";
import { useContext } from "react";
import { FavoritoContext } from "../../context/FavContext";
import { Container, Flex } from "@chakra-ui/react";
import { FavItem } from "./FavItem";
import { Link } from "react-router-dom";
import { AiOutlineLeft } from "react-icons/ai";
export const Favoritos = () => {
  const { fav, setFav } = useContext(FavoritoContext);

  return (
    <>
      <NavBar />
      <Container maxW="90%" minHeight="480px">
        <Link to={"/productos"}>
          <Flex className="regresar">
            <div>
              <AiOutlineLeft />
            </div>
            <p>Seguir eligiendo</p>
          </Flex>
        </Link>
        <div id="favoritos">
          {fav.map((item) => (
            <FavItem
              key={item.id}
              nombre={item.nombre}
              img={item.img}
              cantidad={item.quantity}
            />
          ))}
        </div>

        {/*    {fav.map((item) => (
          <>
            <h1>{item.nombre}</h1>
            <img src={item.img} />
            <p>Cantidad: {item.quantity}</p>
          </>
        ))} */}
      </Container>
      <Footer />
    </>
  );
};
