import "./home.css";
import { Footer } from "../../components/footer/Footer";
import { NavBar } from "../navbar/NavBar";
import { Destacados } from "./Destacados";
import { Opiniones } from "./Opiniones";
import { FavoritoContext } from "../../context/FavContext";
import { useContext } from "react";

export const Home = () => {
  const { isOpen, setIsOpen } = useContext(FavoritoContext);

  return (
    <>
      <div className="homeImg">
        <NavBar />
        <div
          id="homeMobile"
          className={isOpen ? "open" : ""}
          onClick={() => isOpen && setIsOpen(!isOpen)}
        >
          <h1 className="titleHome">Compra</h1>
          <p>Tus productos favoritos de Shein </p>
        </div>
      </div>
      <div onClick={() => isOpen && setIsOpen(!isOpen)}>
        <Destacados />
        <Opiniones />
        <Footer />
      </div>
    </>
  );
};
