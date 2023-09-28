import { useContext, useEffect } from "react";
import { Envio } from "./Envio";
import { Pagos } from "./Pagos";
import { NavBar } from "../navbar/NavBar";
import "./info.css";
import { FavoritoContext } from "../../context/FavContext";

export const Informacion = () => {
  const { isOpen, setIsOpen } = useContext(FavoritoContext);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <div className="informacionImg">
        <NavBar />
      </div>
      <div onClick={() => isOpen && setIsOpen(!isOpen)}>
        <Pagos />
        <Envio />
      </div>
    </>
  );
};
