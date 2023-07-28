import { NavBar } from "../NavBar"
import { Envio } from "./Envio"
import { Pagos } from "./Pagos"

export const Informacion = () => {
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
