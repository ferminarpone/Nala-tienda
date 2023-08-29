import { useEffect } from "react";
import { NavBar } from "../NavBar"
import { Envio } from "./Envio"
import { Pagos } from "./Pagos"

export const Informacion = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
    <div className="informacionImg">
      <NavBar/> 
    </div>
    <Pagos/>
    <Envio/>
    </>
  )
}
