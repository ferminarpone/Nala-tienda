import "./styles/detalles.css";
import { Center, CircularProgress } from "@chakra-ui/react";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { NavBar, Footer, ItemDetail } from "../index";
import { FavoritoContext } from "../../context/FavContext";
import { doc, getDoc, getFirestore } from "firebase/firestore";

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
