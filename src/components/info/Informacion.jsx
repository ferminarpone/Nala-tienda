import "./styles/info.css";
import { useContext, useEffect } from "react";
import { Envio, Pagos, NavBar } from "../index";
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
