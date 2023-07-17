import { useEffect, useState } from "react";
// para las categorias import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { NavBar } from "../NavBar";
import { Footer } from "../Footer";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
export const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  //Llamado a la DB.
  useEffect(() => {
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
      <ItemDetail product={product} />
      <Footer />
    </>
  );
};
