import { Container, Spacer } from "@chakra-ui/react";
import { useContext } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { FavoritoContext } from "../../context/FavContext";

export const Categorias = () => {
  const catLocation = useLocation();
  const { fav } = useContext(FavoritoContext);
  // Función par agrear subrayado a las categorias de productos.
  const hrFunction = () => {
    switch (catLocation.pathname) {
      case "/productos/piercing":
        return "piercing";
        break;
      case "/productos/llaveros":
        return "llaveros";
        break;
      case "/productos/novedades":
        return "novedades";
        break;
      case "/productos/anillos":
        return "anillos";
        break;
      case "/productos/cabello":
        return "cabello";
        break;
      case "/productos/body%20chain":
        return "body chain";
        break;
      case "/productos/collares":
        return "collares";
        break;
      case "/productos/escritorio":
        return "escritorio";
        break;
      case "/productos":
        return "todo";
        break;
    }
  };
  
  return (
    <Container id="categorias" maxWidth="80%">
      <Link to={`/productos`} className="link">
        <h5 className="productosTitle">Todos los productos</h5>
        {hrFunction() == "todo" ? <hr /> : ""}
      </Link>
      <Spacer />
      <Link to={`/productos/${"novedades"}`} className="link">
        <h5>Novedades</h5>
        {hrFunction() == "novedades" ? <hr /> : ""}
      </Link>
      <Spacer />
      <Link to={`/productos/${"piercing"}`} className="link">
        <h5>Piercings</h5>
        {hrFunction() == "piercing" ? <hr /> : ""}
      </Link>
      <Spacer />
      <Link to={`/productos/${"llaveros"}`} className="link">
        <h5>Llaveros</h5>
        {hrFunction() == "llaveros" ? <hr /> : ""}
      </Link>
      <Spacer />
      <Link to={`/productos/${"anillos"}`} className="link">
        <h5>Anillos</h5>
        {hrFunction() == "anillos" ? <hr /> : ""}
      </Link>
      <Spacer />
      <Link to={`/productos/${"cabello"}`} className="link">
        <h5>Cabello</h5>
        {hrFunction() == "cabello" ? <hr /> : ""}
      </Link>
      <Spacer />
      <Link to={`/productos/${"body chain"}`} className="link">
        <h5 className="bodyChain">Body Chain</h5>
        {hrFunction() == "body chain" ? <hr /> : ""}
      </Link>
      <Spacer />
      <Link to={`/productos/${"collares"}`} className="link">
        <h5>Collares</h5>
        {hrFunction() == "collares" ? <hr /> : ""}
      </Link>
      <Spacer />
      <Link to={`/productos/${"escritorio"}`} className="link">
        <h5>Escritorio</h5>
        {hrFunction() == "escritorio" ? <hr /> : ""}
      </Link>
      <Spacer />
      <Link to={`/favoritos`}>
        {fav.length > 0 ? (
          <FaHeart className="heartIcon" />
        ) : (
          <FaRegHeart className="heartIcon" />
        )}
      </Link>
    </Container>
  );
};
