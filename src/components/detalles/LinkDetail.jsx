import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";

export const LinkDetail = () => {
  return (
    <>
      <div className="linkBack">
        <Link to={"/productos"}>
          <div className="back">
            <div>
              <AiOutlineLeft />
            </div>
            <p>Productos</p>
          </div>
        </Link>
      </div>
      <div className="favoritosBack">
        <Link to={"/favoritos"}>
          <div className="back">
            <p>Favoritos</p>
            <div>
              <AiOutlineRight />
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};
