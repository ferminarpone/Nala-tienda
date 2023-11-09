import "./styles/detalles.css";
import { Center, CircularProgress } from "@chakra-ui/react";
import { useContext } from "react";
import { NavBar, Footer, ItemDetail } from "../index";
import { FavoritoContext } from "../../context/FavContext";
import { useDocument } from "../../hooks/useDocument";

export const ItemDetailContainer = () => {
  const { product } = useDocument();
  const { isOpen, navExtend } = useContext(FavoritoContext);
  return (
    <>
      <NavBar />
      <div onClick={navExtend}>
        {product == "" ? (
          <Center minH="400px">
            <CircularProgress isIndeterminate color="#7cbfba" />
          </Center>
        ) : (
          <ItemDetail
            id={product.id}
            nombre={product.nombre}
            img={product.img}
            precio={product.precio}
            descripcion={product.descripcion}
          />
        )}
        <div className={isOpen ? "footerMobItemDetail" : ""}>
          <Footer />
        </div>
      </div>
    </>
  );
};
