import icono from "../../assets/navBar/Icono.png";
import { Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useContext } from "react";
import { FavoritoContext } from "../../context/FavContext";

export const NavBarMobile = () => {
  const { isOpen, setIsOpen, fav, navExtend } = useContext(FavoritoContext);
  return (
    <nav id="navMobile">
      <div className="navTop">
        <button className="menu" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <RxCross2 /> : <RxHamburgerMenu />}
        </button>
        <Link to={`/`} onClick={navExtend}>
          <Image src={icono} alt="Logo Nala Tienda" w="80%" ml="6%" />
        </Link>
        <Link to={`/favoritos`} onClick={navExtend}>
          {fav.length > 0 ? (
            <FaHeart className="heartNavBar" />
          ) : (
            <FaRegHeart className="heartNavBar" />
          )}
        </Link>
      </div>
      <hr className="divider" />
      <ul className={`navList ${isOpen ? "open" : ""} `}>
        <li onClick={() => setIsOpen(!isOpen)}>
          <Link to={"/productos"}>
            <h1>Productos</h1>
          </Link>
          <hr />
        </li>
        <li onClick={() => setIsOpen(!isOpen)}>
          <Link to={"/personalizados"}>
            <h1>Personalizados</h1>
          </Link>
          <hr />
        </li>
        <li onClick={() => setIsOpen(!isOpen)}>
          <Link to={"/nosotros"}>
            <h1>Nosotros</h1>
          </Link>
          <hr />
        </li>
        <li className="differentLi" onClick={() => setIsOpen(!isOpen)}>
          <Link to={"/contactanos"}>
            <h1>Contactanos</h1>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
