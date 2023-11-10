import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";

export const useDocuments = () => {
  const [producto, setProducto] = useState([]);
  //Llamado a la DB.
  useEffect(() => {
    const dataBase = getFirestore();
    const itemsCollection = collection(dataBase, "productos Shein");
    getDocs(itemsCollection).then((snapShot) => {
      setProducto(
        snapShot.docs.map((item) => ({ id: item.id, ...item.data() }))
      );
    });
  }, []);
  return {
    producto
  };
};
