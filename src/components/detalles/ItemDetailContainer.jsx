import { useEffect, useState } from "react";
// para las categorias import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { NavBar } from "../navbar/NavBar";
import { Footer } from "../../components/footer/Footer";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import { Center, CircularProgress } from "@chakra-ui/react";
export const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

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
      {product == "" ? (
        <Center minH="400px">
          <CircularProgress isIndeterminate color="#7cbfba" />
        </Center>
      ) : (
        <ItemDetail id={product.id} nombre={product.nombre} img={product.img} />
      )}
      <Footer />
    </>
  );
};
