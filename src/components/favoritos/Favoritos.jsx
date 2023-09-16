import { Footer } from "../../components/footer/Footer";
import { NavBar } from "../navbar/NavBar";
import { useContext, useEffect, useState } from "react";
import { FavoritoContext } from "../../context/FavContext";
import { Button, Center, Container, Flex } from "@chakra-ui/react";
import { FavItem } from "./FavItem";
import { Link } from "react-router-dom";
import { AiOutlineLeft } from "react-icons/ai";
import { FormularioFav } from "./FormularioFav";
import "./favoritos.css";

export const Favoritos = () => {
  const { fav } = useContext(FavoritoContext);

  //State para hacer aparecer el formulario
  const [form, setform] = useState(false);

  //Función que devuelve true si hay productos en favoritos.
  const itemFav = () => (fav.length > 0 ? true : false);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <div className={form? "mediaOpen":""}>
        {form?
      <FormularioFav />
    :""}
        <NavBar />
        <Container className="containerFav">
          <Link to={"/productos"}>
            {itemFav() ? (
              <Flex className="regresar">
                <div>
                  <AiOutlineLeft />
                </div>
                <p>Seguir eligiendo</p>
              </Flex>
            ) : (
              ""
            )}
          </Link>
          {itemFav() ? (
            <div id="favoritos">
              {fav.map((item) => (
                <div key={item.id} className="item">
                  <FavItem
                    nombre={item.nombre}
                    img={item.img}
                    cantidad={item.quantity}
                    id={item.id}
                  />
                  <hr className="dividerFavoritos" />
                </div>
              ))}
              {!form ? (
                <Button onClick={() => setform(!form)} className="comprarWsp">
                  COMPRAR POR WHATSAPP
                </Button>
              ) : (
                ""
              )}
            </div>
          ) : (
            <Center
              minHeight="400px"
              display="flex"
              flexDirection="column"
              id="sinFav"
            >
              <h1>No tienes productos en tu lista de favoritos.</h1>
              <Link to={"/productos"}>
                <Button> Ver productos </Button>
              </Link>
            </Center>
          )}
        </Container>
        <Footer />
      </div>
    </>
  );
};
