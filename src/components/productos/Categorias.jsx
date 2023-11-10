import { Container, Spacer } from "@chakra-ui/react";
import { useContext } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { FavoritoContext } from "../../context/FavContext";
import { hrFunction } from "./helper/hrFunction";

export const Categorias = () => {
  const catLocation = useLocation();
  const { fav } = useContext(FavoritoContext);
  return (
    <Container id="categorias" maxWidth="80%">
      <Link to={`/productos`} className="link">
        <h5 className="productosTitle">Todos los productos</h5>
        {hrFunction(catLocation) == "todo" ? <hr /> : ""}
      </Link>
      <Spacer />
      <Link to={`/productos/${"novedades"}`} className="link">
        <h5>Novedades</h5>
        {hrFunction(catLocation) == "novedades" ? <hr /> : ""}
      </Link>
      <Spacer />
      <Link to={`/productos/${"piercing"}`} className="link">
        <h5>Piercings</h5>
        {hrFunction(catLocation) == "piercing" ? <hr /> : ""}
      </Link>
      <Spacer />
      <Link to={`/productos/${"llaveros"}`} className="link">
        <h5>Llaveros</h5>
        {hrFunction(catLocation) == "llaveros" ? <hr /> : ""}
      </Link>
      <Spacer />
      <Link to={`/productos/${"anillos"}`} className="link">
        <h5>Anillos</h5>
        {hrFunction(catLocation) == "anillos" ? <hr /> : ""}
      </Link>
      <Spacer />
      <Link to={`/productos/${"cabello"}`} className="link">
        <h5>Cabello</h5>
        {hrFunction(catLocation) == "cabello" ? <hr /> : ""}
      </Link>
      <Spacer />
      <Link to={`/productos/${"body chain"}`} className="link">
        <h5 className="bodyChain">Body Chain</h5>
        {hrFunction(catLocation) == "body chain" ? <hr /> : ""}
      </Link>
      <Spacer />
      <Link to={`/productos/${"collares"}`} className="link">
        <h5>Collares</h5>
        {hrFunction(catLocation) == "collares" ? <hr /> : ""}
      </Link>
      <Spacer />
      <Link to={`/productos/${"escritorio"}`} className="link">
        <h5>Escritorio</h5>
        {hrFunction(catLocation) == "escritorio" ? <hr /> : ""}
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
