import "./styles/info.css";
import { useContext, useEffect } from "react";
import { Envio, Pagos, NavBar } from "../index";
import { FavoritoContext } from "../../context/FavContext";

export const Informacion = () => {
  const { navExtend } = useContext(FavoritoContext);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
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
