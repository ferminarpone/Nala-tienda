import { useContext } from "react";
import { useParams } from "react-router-dom";
import "./styles/productos.css";
import { NavBar, Footer, ItemList } from "../index";
import { FavoritoContext } from "../../context/FavContext";
import { useDocuments } from "../../hooks/useDocuments";
import { filterCat } from "./helper/filterCat";
import { useScroll } from "../../hooks";
export const ItemListContainer = () => {
  const { isOpen, setIsOpen } = useContext(FavoritoContext);
  const { producto } = useDocuments();
  const { category } = useParams();
  useScroll();
  return (
    <>
      <NavBar />
      <div onClick={() => isOpen && setIsOpen(!isOpen)}>
        <div id="itemListMobile" className={isOpen ? "openIM" : ""}>
          {category ? (
            <ItemList
              product={filterCat(producto, category)}
              categoria={category}
            />
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
};
