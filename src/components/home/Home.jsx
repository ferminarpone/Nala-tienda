import "./home.css";
import { Footer } from "../../components/footer/Footer";
import { NavBar } from "../navbar/NavBar";
import { Destacados } from "./Destacados";
import { Opiniones } from "./Opiniones";
import { FavoritoContext } from "../../context/FavContext";
import { useContext } from "react";
import compra from "../../assets/home/Compra.png";
import { Image } from "@chakra-ui/react";

export const Home = () => {
  const { isOpen } = useContext(FavoritoContext);

  return (
    <>
      <div className="homeImg">
        <NavBar />
        <div id="homeMobile" className={isOpen ? "open" : ""}>
          <Image src={compra} w="35%" ml="32%" />
          <p>Tus productos favoritos de Shein </p>
        </div>
      </div>
      <Destacados />
      <Opiniones />
      <Footer />
    </>
  );
};
