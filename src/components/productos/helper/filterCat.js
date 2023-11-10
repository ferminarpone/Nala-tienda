//Filtro por categorias.
export const filterCat = (producto, category) => {
  return producto.filter((el) => el.categoria === category);
};
