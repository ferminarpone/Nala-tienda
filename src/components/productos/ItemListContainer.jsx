import { useEffect, useState } from "react";
// para las categorias import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { NavBar } from "../NavBar";
import { Footer } from "../Footer";
import { ItemList } from "./ItemList";
import { Categorias } from "./Categorias";

export const ItemListContainer = () => {
  const [producto, setProducto] = useState([]);
  const { category } = useParams();


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

  //Filtro por categorias.
  const filterCart = producto.filter((el) => el.categoria === category);

  return (
    <>
      <NavBar />
      <Categorias/>
      {category ? (
        <ItemList product={filterCart} categoria={category} />
      ) : (
        <ItemList product={producto} />
      )}
      <Footer />
    </>
  );
};
