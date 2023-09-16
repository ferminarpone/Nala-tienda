import { Container, Spacer } from "@chakra-ui/react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export const Categorias = () => {
  const catLocation = useLocation();
  // Función par agrear subrayado a las categorias.
  const hrFunction = () => {
    switch (catLocation.pathname) {
      case "/productos/piercing":
        return "piercing";
        break;
      case "/productos/llaveros":
        return "llaveros";
        break;
      case "/productos/scrunchies":
        return "scrunchies";
        break;
      case "/productos/anillos":
        return "anillos";
        break;
      case "/productos/vinchas":
        return "vinchas";
        break;
      case "/productos/body%20chain":
        return "body chain";
        break;
      case "/productos/collares":
        return "collares";
        break;
      case "/productos/gorras":
        return "gorras";
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
        <Link to={`/productos/${"scrunchies"}`} className="link">
          <h5>Scrunchies</h5>
          {hrFunction() == "scrunchies" ? <hr /> : ""}
        </Link>
        <Spacer />
        <Link to={`/productos/${"anillos"}`} className="link">
          <h5>Anillos</h5>
          {hrFunction() == "anillos" ? <hr /> : ""}
        </Link>
        <Spacer />
        <Link to={`/productos/${"vinchas"}`} className="link">
          <h5>Vinchas</h5>
          {hrFunction() == "vinchas" ? <hr /> : ""}
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
        <Link to={`/productos/${"gorras"}`} className="link">
          <h5>Gorras</h5>
          {hrFunction() == "gorras" ? <hr /> : ""}
        </Link>
        <Spacer />
        <Link to={`/favoritos`}>
          <FaRegHeart className="heartIcon" />
        </Link>
    </Container>
  );
};
