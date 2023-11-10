import "./styles/info.css";
import { useContext } from "react";
import { Envio, Pagos, NavBar } from "../index";
import { FavoritoContext } from "../../context/FavContext";
import { useScroll } from "../../hooks";

export const Informacion = () => {
  const { navExtend } = useContext(FavoritoContext);
  useScroll();
  return (
    <>
      <div className="informacionImg">
        <NavBar />
      </div>
      <div onClick={navExtend}>
        <Pagos />
        <Envio />
      </div>
    </>
  );
};
