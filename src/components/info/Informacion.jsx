import { useEffect } from "react";
import { Envio } from "./Envio"
import { Pagos } from "./Pagos"
import { NavBar } from "../navbar/NavBar";
import './info.css'

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
