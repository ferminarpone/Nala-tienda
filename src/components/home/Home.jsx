import "./styles/home.css";
import { Footer, NavBar, Destacados, Opiniones } from "../index";
import { FavoritoContext } from "../../context/FavContext";
import { useContext } from "react";

export const Home = () => {
  const { isOpen, navExtend } = useContext(FavoritoContext);
  return (
    <>
      <div className="homeImg">
        <NavBar />
        <div
          id="homeMobile"
          className={isOpen ? "open" : ""}
          onClick={navExtend}
        >
          <h1>Compra</h1>
          <p>Tus productos favoritos de Shein </p>
        </div>
      </div>
      <div onClick={navExtend}>
        <Destacados />
        <Opiniones />
        <Footer />
      </div>
    </>
  );
};
