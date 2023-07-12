import { useEffect } from "react";

export const ItemList = ({ product, categoria }) => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      {product.map((el) => (
        <div>
          <h3>{el.nombre}</h3>
          <img src={el.img} />
        </div>
      ))}
    </>
  );
};
