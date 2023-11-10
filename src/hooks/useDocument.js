import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const useDocument = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

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

  return {
    product,
  };
};
