import { Footer } from "../Footer"
import { NavBar } from "../NavBar"
import {useContext} from 'react'
import { FavoritoContext } from "../../context/FavContext"
export const Favoritos = () => {
  const {fav , setFav } = useContext(FavoritoContext);

  return (
    <>
    <NavBar/>
    {fav.map((item) => 
      <>
      <h1>{item.nombre}</h1>
      <img src={item.img} />
      <p>Cantidad: {item.quantity}</p>
      </>
    )}
    <Footer/>
    </>
  )
}
