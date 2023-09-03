import icono from "../../assets/navBar/Icono.png";
import { Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { FaRegHeart } from "react-icons/fa";
import { useContext } from "react";
import { FavoritoContext } from "../../context/FavContext";

export const NavBarMobile = () => {
  const { isOpen, setIsOpen } = useContext(FavoritoContext);
console.log(isOpen);
  return (
    <nav id="navMobile">
      <div className="navTop">
        <button className="menu" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <RxCross2 /> : <RxHamburgerMenu />}
        </button>
        <Link to={`/`}>
          <Image src={icono} alt="Logo Nala Tienda" w="80%" ml="6%" />
        </Link>
        <Link to={`/favoritos`}>
          <FaRegHeart className="heartNavBar" />
        </Link>
      </div>
      <hr className="divider" />

      <ul className={`navList ${isOpen ? "open" : ""} `}>
        <li onClick={() => setIsOpen(!isOpen)}>
          <Link to={"/productos"}>Productos</Link>
          <hr />
        </li>
        <li onClick={() => setIsOpen(!isOpen)}>
          <Link to={"/personalizados"}>Personalizados</Link>
          <hr />
        </li>
        <li onClick={() => setIsOpen(!isOpen)}>
          <Link to={"/nosotros"}>Nosotros</Link>
          <hr />
        </li>
        <li className="differentLi" onClick={() => setIsOpen(!isOpen)}>
          <Link to={"/contactanos"}>Contactanos</Link>
        </li>
      </ul>
    </nav>
  );
};
