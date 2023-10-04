import  { useContext, useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { NavBar } from "../navbar/NavBar";
import { Footer } from "../../components/footer/Footer";
import { ItemList } from "./ItemList";
import "./productos.css";
import { FavoritoContext } from "../../context/FavContext";

export const ItemListContainer = () => {
  const [producto, setProducto] = useState([]);
  const { category } = useParams();
  const { isOpen, setIsOpen } = useContext(FavoritoContext);

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
      <div onClick={() => isOpen && setIsOpen(!isOpen)}>
        <div id="itemListMobile" className={isOpen ? "openIM" : ""}>
          {category ? (
            <ItemList product={filterCart} categoria={category} />
          ) : (
            <ItemList product={producto} />
          )}
        </div>
        <div id="footerListMobile" className={isOpen ? "openFM" : ""}>
          <Footer />
        </div>
      </div>
    </>
  );
} ;
