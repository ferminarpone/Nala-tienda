import { useEffect, useState } from "react";
// para las categorias import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { NavBar } from "../navbar/NavBar";
import { Footer } from "../../components/footer/Footer";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import { Center, CircularProgress } from "@chakra-ui/react";
import "./detalles.css";
import { useContext } from "react";
import { FavoritoContext } from "../../context/FavContext";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const { isOpen, setIsOpen } = useContext(FavoritoContext);
  //Llamado a la DB.
  useEffect(() => {
    window.scroll(0, 0);
    const dataBase = getFirestore();
    const item = doc(dataBase, "productos Shein", `${id}`);
    getDoc(item).then((snapShot) => {
      if (snapShot.exists()) {
        const doc = { id: snapShot.id, ...snapShot.data() };
        setProduct(doc);
      }
    });
  }, []);

  return (
    <>
      <NavBar />
      <div onClick={() => isOpen && setIsOpen(!isOpen)}>
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
